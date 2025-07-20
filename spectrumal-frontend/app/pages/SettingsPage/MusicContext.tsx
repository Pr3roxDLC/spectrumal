import React, { createContext, useContext, useRef, useState, useEffect } from 'react';
import { Audio } from 'expo-av';

type MusicContextType = {
  isPlaying: boolean;
  toggleMusic: () => void;
};

const MusicContext = createContext<MusicContextType>({
  isPlaying: false,
  toggleMusic: () => {},
});

export const useMusic = () => useContext(MusicContext);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const sound = useRef<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const loadMusic = async () => {
    try {
      if (!sound.current) {
        const { sound: playbackObject } = await Audio.Sound.createAsync(
          require('../../../assets/sounds/335571__magntron__gamemusic.mp3'), 
          {
            isLooping: true,
            volume: 0.8,
          }
        );
        sound.current = playbackObject;
      }
    } catch (error) {
      console.error('Failed to load background music:', error);
    }
  };

  const toggleMusic = async () => {
    try {
      await loadMusic();

      if (sound.current) {
        if (isPlaying) {
          await sound.current.pauseAsync();
          setIsPlaying(false);
        } else {
          await sound.current.playAsync();
          setIsPlaying(true);
        }
      }
    } catch (error) {
      console.error('Error toggling music:', error);
    }
  };

  useEffect(() => {
    loadMusic();

    return () => {
      sound.current?.unloadAsync();
    };
  }, []);

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic }}>
      {children}
    </MusicContext.Provider>
  );
};
