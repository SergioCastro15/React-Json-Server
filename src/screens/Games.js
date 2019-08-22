import React, { useState, useEffect } from 'react';
import { getGamesDB } from '../api';
import GamesPlayed from '../components/Games';

const Games = () => {
  const [games, saveGames] = useState([]);
  const [refreshApi, saveRefreshAPI] = useState(true);

  useEffect(() => {
    const callApi = async () => {
      const data = await getGamesDB();
      saveGames(data);
    };
    if (refreshApi) {
      callApi();
    }
    saveRefreshAPI(false);
  }, [refreshApi]);

  return (
    <GamesPlayed games={games} saveRefreshAPI={saveRefreshAPI} />
  );
};

export default Games;
