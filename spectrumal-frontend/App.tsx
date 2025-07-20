
import React, { useEffect, useRef } from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { SafeAreaView, StatusBar } from 'react-native';
import { useAppSelector } from "./app/store/hooks";
import { TabType } from "./app/store/features/navigation/navigationSlice";
import GiveClue from './app/pages/GiveClue/GiveClue';
import GuessClue from './app/pages/GuessClue/GuessClue';
import HowToPlay from './app/pages/HowToPlay/HowToPlay';
import JoinLobby from './app/pages/JoinLobby/JoinLobby';
import MainMenu from './app/pages/MainMenu/MainMenu';
import SettingsPage from './app/pages/SettingsPage/SettingsPage';
import Lobby from './app/pages/StartLobby/StartLobby';
import Play from './app/pages/Play/Play';
import GradientBackground from './app/Components/gradientBackground/GradientBackground';
import LeaderboardPage from './app/pages/LeaderboardPage/LeaderboardPage';
import WaitingForOthers  from './app/pages/WaitingForOthers/WaitingForOthers';
import GameStarting from './app/pages/GameStarting/GameStarting';
import LeaderboardPageTest from './app/pages/LeaderboardPageTest/LeaderboardPageTest';
import { Audio } from 'expo-av';
import { AudioProvider } from './app/pages/SettingsPage/AudioContext';
import GameSettings from './app/pages/GameSettingsPage/GameSettings';

export default function App () {
   const sound = useRef(null);
  const currentActiveTab = useAppSelector(
    (state) => state.navigation.tabStack.at(-1)
  );

    
  useEffect(() => {
    const playBackgroundMusic = async () => {
      try {
        const { sound: playbackObject } = await Audio.Sound.createAsync(
          require('./assets/sounds/background-music.mp3'), 
          {
            shouldPlay: true,
            isLooping: true,
            volume: 0.8,
          }
        );
        sound.current = playbackObject;
      } catch (error) {
        console.error('Error loading or playing sound:', error);
      }
    };

    playBackgroundMusic();

 return () => {
    };
  }, []);


  return (
    <>
      <StatusBar hidden={true} />
       <SafeAreaView style={{ flex: 1 }}>
          <GradientBackground>
            <AudioProvider>
        <ApplicationProvider {...eva} theme={eva.dark}>
          {
            {
              GIVE_CLUE: <GiveClue ></GiveClue>,
              GUESS_CLUE: <GuessClue></GuessClue>,
              HOW_TO_PLAY: <HowToPlay></HowToPlay>,
              JOIN_LOBBY: <JoinLobby></JoinLobby>,
              MAIN_MENU: <MainMenu></MainMenu>,
              PLAY: <Play></Play>,
              SETTINGS_PAGE: <SettingsPage></SettingsPage>,
              START_LOBBY: <Lobby></Lobby>,
              WAITING_FOR_OTHERS: <WaitingForOthers></WaitingForOthers>,
              LEADERBOARD: <LeaderboardPage></LeaderboardPage>,
              GAME_STARTING: <GameStarting></GameStarting>,
              LEADERBOARD_PAGE_TEST: <LeaderboardPageTest></LeaderboardPageTest>,
              GAME_SETTINGS_PAGE: <GameSettings></GameSettings>,
            }[currentActiveTab?.type ?? TabType.MAIN_MENU]
          }
        </ApplicationProvider>
        </AudioProvider>
        </GradientBackground>
        </SafeAreaView>
        

    </>
  );
}


