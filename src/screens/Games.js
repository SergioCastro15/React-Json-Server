import React, { useState, useEffect} from 'react';
import GamesPlayed from '../components/Games';

const Games = () => {
  const [games, saveGames] = useState([]);
  const [refreshApi, saveRefreshAPI] = useState(true);
  useEffect(()=>{
    const callApi = async () =>{
      const response = await fetch('http://localhost:4000/games');
      const data = await response.json();
      saveGames(data);
    }
    if(refreshApi){
      callApi();
    }
    saveRefreshAPI(false);
  },[refreshApi])
  return(
    <GamesPlayed games={games} saveRefreshAPI={saveRefreshAPI}/>
  )
};

export default Games;