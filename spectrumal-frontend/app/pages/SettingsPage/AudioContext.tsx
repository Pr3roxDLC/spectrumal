import React, { createContext, useContext, useRef, useState, useEffect } from 'react';
import { Audio } from 'expo-av';

type AudioContextType = {
  isMusicPlaying: boolean;
  isSfxEnabled: boolean;
  isHapticsEnabled: boolean; 
  toggleMusic: () => void;
  toggleSfx: () => void;
  toggleHaptics: () => void; 
  playSfx: (file: any) => Promise<void>;
};

const AudioContext = createContext<AudioContextType>({
  isMusicPlaying: false,
  isSfxEnabled: true,
  isHapticsEnabled: true, 
  toggleMusic: () => {},
  toggleSfx: () => {},
  toggleHaptics: () => {}, 
  playSfx: async () => {},
});

export const useAudio = () => useContext(AudioContext);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const music = useRef<Audio.Sound | null>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isSfxEnabled, setIsSfxEnabled] = useState(true);
  const [isHapticsEnabled, setIsHapticsEnabled] = useState(true); 

  const loadMusic = async () => {
    if (!music.current) {
      const { sound } = await Audio.Sound.createAsync(
        require('../../../assets/sounds/background-music.mp3'),
        { isLooping: true, volume: 0.8 }
      );
      music.current = sound;
    }
  };

  const toggleMusic = async () => {
    await loadMusic();
    if (music.current) {
      if (isMusicPlaying) {
        await music.current.pauseAsync();
        setIsMusicPlaying(false);
      } else {
        await music.current.playAsync();
        setIsMusicPlaying(true);
      }
    }
  };

  const toggleSfx = () => {
    setIsSfxEnabled((prev) => !prev);
  };

  const toggleHaptics = () => {
    setIsHapticsEnabled((prev) => !prev); 
  };

  const playSfx = async (file: any) => {
    if (!isSfxEnabled) return;

    try {
      const { sound } = await Audio.Sound.createAsync(file);
      await sound.replayAsync();

      sound.setOnPlaybackStatusUpdate((status) => {
        if (!status.isLoaded || status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    } catch (err) {
      console.warn('Failed to play SFX:', err);
    }
  };

  useEffect(() => {
    loadMusic();
    return () => {
      music.current?.unloadAsync();
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        isMusicPlaying,
        isSfxEnabled,
        isHapticsEnabled,     
        toggleMusic,
        toggleSfx,
        toggleHaptics,        
        playSfx,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
