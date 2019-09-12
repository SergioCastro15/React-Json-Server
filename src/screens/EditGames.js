import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getGameDB, editGameDB } from '../api';
import GameForm from '../components/GameForm';

const EditGames = ({ history, match }) => {
  const [newGame, setNewGame] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getGame = async () => {
      try {
        const response = await getGameDB(match.params.id);
        setNewGame(response);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getGame();
  }, [match.params.id]);
  console.log('newGame', newGame);

  const editGame = async ({
    game,
    gender,
    description,
  }) => {
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

  if (isLoading) {
    return null;
  }

  return (
    <GameForm
      gameEdit={newGame.name}
      genderEdit={newGame.gender}
      descriptionEdit={newGame.description}
      onSubmitHandler={editGame}
    />
  );
};

export default withRouter(EditGames);
