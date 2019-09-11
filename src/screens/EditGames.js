import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getGameDB, editGameDB } from '../api';
import GameForm from '../components/GameForm';

const EditGames = ({ history, match }) => {
  const [newGame, setNewGame] = useState({});

  useEffect(() => {
    const getGame = async () => {
      try {
        const response = await getGameDB(match.params.id);
        setNewGame(response);
      } catch (err) {
        console.log(err);
      }
    };
    getGame();
  }, [match.params.id]);

  const editGame = async (e, {
    game,
    gender,
    description,
  }) => {
    e.preventDefault();
    try {
      await editGameDB(match.params.id, {
        name: game,
        gender,
        description,
      });
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GameForm
      gameEdit={newGame.name}
      genderEdit={newGame.gender}
      descriptionEdit={newGame.description}
      onSubmit={editGame}
    />
  );
};

export default withRouter(EditGames);
