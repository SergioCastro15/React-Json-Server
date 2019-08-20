import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Games from './screens/Games';
import AddGames from './screens/AddGames';
import EditGames from './screens/EditGames';
import Header from './components/Header';
const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Games}/>
        <Route exact path="/Add" component={AddGames}/>
        <Route exact path="/Edit/:id" component={EditGames}/>
      </Switch>
    </Router>
  );
}

export default App;
