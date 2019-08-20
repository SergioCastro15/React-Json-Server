import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom';
import GameForm from '../components/GameForm';

const EditGames = ({match}) => {
  useEffect(()=>{
    const getGame = async () =>{
      try{
        const callById = await fetch(`http://localhost:4000/games/${match.params.id}`,{
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });
        const response = await callById.json();
        console.log(response);
      }catch(err){
        console.log(err);
      }
    }
    getGame();
  },[]);
  //console.log(callById);
  return(
    <GameForm/>
  )
};

export default withRouter(EditGames);