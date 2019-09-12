import React from 'react';
import { withRouter } from 'react-router-dom';
import { addGameDB } from '../api';
import GameForm from '../components/GameForm';

const AddGames = ({ history }) => {
  const addGame = async ({
    game,
    gender,
    description,
  }) => {
    try {
      await addGameDB({
        name: game,
        gender,
        description,
      });
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };
  // (e) => {
  //   e.preventDefault();
  //   return asdasd;
  // }

  return (
    <GameForm
      onSubmitHandler={addGame}
    />
  );
};

export default withRouter(AddGames);
