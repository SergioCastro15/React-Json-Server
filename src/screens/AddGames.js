import React, {useState} from 'react'
import GameForm from '../components/GameForm';
import {withRouter} from 'react-router-dom';

const AddGames = ({history}) => {
  const [game, saveGame] = useState("");
  const [gender, saveGender] = useState("");
  const [description, saveDescription] = useState("");
  const addGame = async (e) =>{
    e.preventDefault();
    try{
      const saved = await fetch('http://localhost:4000/games', {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: game,
            gender,
            description,
          }),
      });
      console.log(saved);
      history.push("/");
    } catch(err){
      console.log(err);
    }
  }
  return(
    <GameForm
      saveGame={saveGame}
      saveGender={saveGender}
      saveDescription={saveDescription}
      addGame={addGame}
    />
  )
};

export default withRouter(AddGames);