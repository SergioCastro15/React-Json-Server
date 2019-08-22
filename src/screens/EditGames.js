import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { getGameDB, editGameDB } from '../api';
import GameForm from '../components/GameForm';

const EditGames = ({ history, match }) => {
  const [game, setGame] = useState('');
  const [gender, setGender] = useState('');
  const [description, setDescription] = useState('');
  useEffect(() => {
    const getGame = async () => {
      try {
        const response = await getGameDB(match.params.id);
        setGame(response.name);
        setGender(response.gender);
        setDescription(response.description);
      } catch (err) {
        console.log(err);
      }
    };
    getGame();
  }, [match.params.id]);

  const editGame = async (e) => {
    e.preventDefault();
    try {
      const response = await editGameDB(match.params.id, {
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
      onSubmit={editGame}
    />
  );
};

export default withRouter(EditGames);
