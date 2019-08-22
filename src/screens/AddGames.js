import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { addGameDB } from '../api';
import GameForm from '../components/GameForm';

const AddGames = ({ history }) => {
  const [game, setGame] = useState('');
  const [gender, setGender] = useState('');
  const [description, setDescription] = useState('');

  const addGame = async (e) => {
    e.preventDefault();
    try {
      const response = await addGameDB({
        name: game,
        gender,
        description,
      });
      console.log(response);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <GameForm
      setGame={setGame}
      setGender={setGender}
      setDescription={setDescription}
      game={game}
      gender={gender}
      description={description}
      onSubmit={addGame}
    />
  );
};

export default withRouter(AddGames);
