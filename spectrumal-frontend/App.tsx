import MainMenu from './app/pages/MainMenu';
import React, { useState } from 'react';
import HowToPlay from './app/pages/HowToPlay';
import GiveClue from './app/pages/GiveClue';
import Play from './app/pages/Play';
import JoinGame from './app/Components/PlayComponents/JoinGame';
import StartLobby from './app/pages/StartLobby';
import JoinLobby from './app/pages/JoinLobby';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import GuessClue from './app/pages/GuessClue';
import SelectorDemoPage from './app/pages/SelectorDemoPage';

export default function App() {

const[page, setPage] = useState<string>("Main Menu")

  return (
    <>
    <ApplicationProvider {...eva} theme={eva.dark}>
     {page === "Main Menu" && (<MainMenu setPage={setPage} />)}
      {page === "Start Lobby" && (<StartLobby setPage={setPage}/>)}
      {page === "Join Lobby" && (<JoinLobby setPage={setPage}/>)}
      {page === "Play" && (<Play setPage={setPage} />)}
       {page === "Join Game" && (<JoinGame setPage={setPage} />)}  
      {page === "Give Clue" && (<GiveClue setPage={setPage}   />)}
      {page === "Guess Clue" && (<GuessClue setPage={setPage}   />)}
      {page === "How To Play" && (<HowToPlay setPage={setPage}  />)}
      {page === "Demo" && (<SelectorDemoPage setPage={setPage} />)}
    </ApplicationProvider>
    </>
  );
}


