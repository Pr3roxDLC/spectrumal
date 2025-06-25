import MainMenu from './app/pages/MainMenu';
import React, { useState } from 'react';
import HowToPlay from './app/pages/HowToPlay';
import GiveClue from './app/pages/GiveClue';
import Play from './app/pages/Play';
import JoinGame from './app/Components/PlayComponents/JoinGame';
import StartLobby from './app/pages/StartLobby';
import JoinLobby from './app/pages/JoinLobby';
import GuessClue from './app/pages/GuessClue';
import SelectorDemoPage from './app/pages/SelectorDemoPage';
import SettingsPage from './app/pages/SettingsPage';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { StatusBar } from 'react-native';

export default function App() {

  const [page, setPage] = useState<string>("Main Menu")
  const [previousPage, setPreviousPage] = useState<string | null>(null);

  return (
    <>
      <StatusBar hidden={true} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        {page === "Main Menu" ? (<MainMenu setPage={setPage} />) : null}
        {page === "Start Lobby" ? (<StartLobby setPage={setPage} setPreviousPage={setPreviousPage} />) : null}
        {page === "Join Lobby" ? (<JoinLobby setPage={setPage} setPreviousPage={setPreviousPage} />) : null}
        {page === "Play" ? (<Play setPage={setPage} setPreviousPage={setPreviousPage} />) : null}
        {page === "Join Game" ? (<JoinGame setPage={setPage} setPreviousPage={setPreviousPage} />) : null}
        {page === "Give Clue" ? (<GiveClue setPage={setPage} setPreviousPage={setPreviousPage} />) : null}
        {page === "Guess Clue" ? (<GuessClue setPage={setPage} setPreviousPage={setPreviousPage} />) : null}
        {page === "How To Play" ? (<HowToPlay setPage={setPage} setPreviousPage={setPreviousPage} />) : null}
        {page === "Settings" ? (<SettingsPage setPage={setPage} setPreviousPage={setPreviousPage} previousPage={previousPage} />) : null}
      </ApplicationProvider>
    </>
  );
}


