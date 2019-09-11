import React from 'react';
import { withRouter } from 'react-router-dom';
import { addGameDB } from '../api';
import GameForm from '../components/GameForm';

const AddGames = ({ history }) => {

  const addGame = async (e, {
    game,
    gender,
    description
  }) => {
    e.preventDefault();
    try {
      await addGameDB({
        name: game,
        gender,
        description
      });
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GameForm
      onSubmit={addGame}
    />
  );
};

export default withRouter(AddGames);
