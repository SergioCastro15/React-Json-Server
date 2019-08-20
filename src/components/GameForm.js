import React from 'react'

const GameForm = ({
  addGame,
  saveGame,
  saveGender,
  saveDescription
}) =>{
  return(
    <form onSubmit={addGame} className="container mt-3">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name:</label>
        <input
          placeholder="Enter Game"
          onChange={ e => saveGame(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Gender</label>
        <input
          placeholder="Enter gender"
          onChange={e => saveGender(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">description</label>
        <input
          placeholder="Enter description"
          onChange={e => saveDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default GameForm;