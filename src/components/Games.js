import React from 'react'
import GameInfo from './GameInfo';

const GamesPlayed = ({games, saveRefreshAPI}) =>(
  games.map( (game, index) => (
    <GameInfo
      game ={game}
      key={index}
      saveRefreshAPI={saveRefreshAPI}
    />
  ))
);

export default GamesPlayed;