import React, { useEffect } from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { SafeAreaView, StatusBar } from 'react-native';
import { useAppSelector } from './app/store/hooks';
import { TabType } from './app/store/features/navigation/navigationSlice';
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
import WaitingForOthers from './app/pages/WaitingForOthers/WaitingForOthers';
import GameStarting from './app/pages/GameStarting/GameStarting';
import LeaderboardPageTest from './app/pages/LeaderboardPageTest/LeaderboardPageTest';
import GameSettings from './app/pages/GameSettingsPage/GameSettings';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import { AudioProvider } from './app/pages/SettingsPage/AudioContext';
import Podium from './app/pages/Podium/Podium';
import SplashScreen from './app/pages/SplashScreen/SplashScreen';

export default function App() {
  const currentActiveTab = useAppSelector(
    (state) => state.navigation.tabStack.at(-1)
  );

  const player = useAudioPlayer(require('./assets/sounds/background-music.mp3'));
  const status = useAudioPlayerStatus(player);

  useEffect(() => {
    player.volume = 0.8;
    player.loop = true;
    player.play();

    return () => {
      player.pause();
    };
  }, []);

  useEffect(() => {
    if (status.didJustFinish && !player.loop) {
      player.seekTo(0);
      player.play();
    }
  }, [status.didJustFinish]);

  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{ flex: 1 }}>
        <GradientBackground>
          <AudioProvider>
            <ApplicationProvider {...eva} theme={eva.dark}>
              {
                {
                  GIVE_CLUE: <GiveClue />,
                  GUESS_CLUE: <GuessClue />,
                  HOW_TO_PLAY: <HowToPlay />,
                  JOIN_LOBBY: <JoinLobby />,
                  MAIN_MENU: <MainMenu />,
                  PLAY: <Play />,
                  SETTINGS_PAGE: <SettingsPage />,
                  START_LOBBY: <Lobby />,
                  WAITING_FOR_OTHERS: <WaitingForOthers />,
                  LEADERBOARD: <LeaderboardPage />,
                  GAME_STARTING: <GameStarting />,
                  LEADERBOARD_PAGE_TEST: <LeaderboardPageTest />,
                  GAME_SETTINGS_PAGE: <GameSettings />,
                  PODIUM_PAGE: <Podium />,
                  SPLASH_SCREEN: <SplashScreen />
                }[currentActiveTab?.type ?? TabType.MAIN_MENU]
              }
            </ApplicationProvider>
          </AudioProvider>
        </GradientBackground>
      </SafeAreaView>
    </>
  );
}


