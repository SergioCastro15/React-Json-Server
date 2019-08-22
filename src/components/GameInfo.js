import React from 'react';
import { withRouter } from 'react-router-dom';
import { deleteGameDB } from '../api';

const GameInfo = ({ history, game, saveRefreshAPI }) => {
  const deleteGame = async (id) => {
    try {
      const response = await deleteGameDB(id);
      console.log(response);
      saveRefreshAPI(true);
    } catch (err) {
      console.log(err);
    }
  };

  const routeEdit = (id) => {
    history.push(`/Edit/${id}`);
  };

  return (
    <div className="card container mt-2 mb-2">
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{game.gender}</h6>
        <p className="card-text">{game.description}</p>
        <button onClick={() => deleteGame(game.id)} type="button" className="btn btn-danger">Delete</button>
        <button onClick={() => routeEdit(game.id)} type="button" className="btn btn-primary">Edit</button>
      </div>
    </div>
  );
};


export default withRouter(GameInfo);
