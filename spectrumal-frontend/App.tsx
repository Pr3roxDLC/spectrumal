import Lobby from './app/pages/Lobby';
import MainMenu from './app/pages/MainMenu';
import React, { useState } from 'react';
import HowToPlay from './app/pages/HowToPlay';
import GiveClue from './app/pages/GiveClue';
import Play from './app/pages/Play';
import JoinGame from './app/Components/PlayComponents/JoinGame';

export default function App() {

const[page, setPage] = useState<string>("Main Menu")

  return (
    <>
      {page === "Main Menu" && (<MainMenu setPage={setPage}></MainMenu>)}
      {page === "Lobby" && (<Lobby setPage={setPage}/>)}
      {page === "Play" && (<Play setPage={setPage} />)}
       {page === "Join Game" && (<JoinGame setPage={setPage} />)}  
      {page === "Give Clue" && (<GiveClue setPage={setPage}   />)}
      {page === "How To Play" && (<HowToPlay setPage={setPage}  />)}
    </>
  );
}


