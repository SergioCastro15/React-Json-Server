import React from 'react';
import GameInfo from './GameInfo';

const GamesPlayed = ({ games, saveRefreshAPI }) => (
  games.map((game) => (
    <GameInfo
      game={game}
      key={game.id}
      saveRefreshAPI={saveRefreshAPI}
    />
  ))
);

export default GamesPlayed;
