
import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { SafeAreaView, StatusBar } from 'react-native';
import { useAppSelector } from "./app/store/hooks";
import { TabType } from "./app/store/navigationSlice";
import GiveClue from './app/pages/GiveClue';
import GuessClue from './app/pages/GuessClue';
import HowToPlay from './app/pages/HowToPlay';
import JoinLobby from './app/pages/JoinLobby';
import MainMenu from './app/pages/MainMenu';
import SettingsPage from './app/pages/SettingsPage';
import Lobby from './app/pages/StartLobby';
import Play from './app/pages/Play';
import GradientBackground from './app/Components/GlobalComponents/GradientBackground';
import LeaderboardPage from './app/pages/LeaderboardPage';
import WaitingForOthers from './app/pages/WaitingForOthers';

export default function App () {
  const currentActiveTab = useAppSelector(
    (state) => state.navigation.tabStack.at(-1)
  );



  return (
    <>
      <StatusBar hidden={true} />
       <SafeAreaView style={{ flex: 1 }}>
          <GradientBackground>
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
              LEADERBOARD: <LeaderboardPage></LeaderboardPage>
            }[currentActiveTab?.type ?? TabType.MAIN_MENU]
          }
        </ApplicationProvider>
        </GradientBackground>
        </SafeAreaView>
        

    </>
  );
}


