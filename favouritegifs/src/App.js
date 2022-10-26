import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home.js'
import MyFavouriteGifs from './Components/MyFavourityeGifs.js';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* <Route component={ListOfGifs} path="/gif/:keyword"> */}
        {/* </Route> */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/myfavouritegifs'>
            <MyFavouriteGifs />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment >
  );
}

export default App;
