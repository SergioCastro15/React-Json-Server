import React, { useState } from 'react';

const GameForm = ({
  gameEdit,
  genderEdit,
  descriptionEdit,
  onSubmit
}) => {
    const [game, setGame] = useState(gameEdit || '');
    const [gender, setGender] = useState(genderEdit || '');
    const [description, setDescription] = useState(descriptionEdit || '');

    return (
      <form onSubmit={(e)=> onSubmit(e, {game, gender, description})} className="container mt-3">
        <div className="form-group">
          <label>Name:</label>
          <input
            placeholder="Enter Game"
            value={game}
            onChange={(e) => setGame(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Gender</label>
          <input
            placeholder="Enter gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">description</label>
          <input
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
}

export default GameForm;

