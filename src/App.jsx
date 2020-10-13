import React from 'react';
import FirstGen from './Components/FirstGen';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Footer from './Components/Footer';


function App() {
  return (
    <div id="main">

      <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact>
              <FirstGen Gen={'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'}/>
          </Route>

          <Route path="/2">
              <FirstGen Gen={'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151'}/>
          </Route>

          <Route path="/3">
              <FirstGen Gen={'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251'}/>
          </Route>

          <Route path="/4">
             <FirstGen Gen={'https://pokeapi.co/api/v2/pokemon?limit=107&offset=386'}/>
          </Route>

          <Route path="/5">
              <FirstGen Gen={'https://pokeapi.co/api/v2/pokemon?limit=156&offset=493'}/>
          </Route>

          <Route path="/6">
              <FirstGen Gen={'https://pokeapi.co/api/v2/pokemon?limit=72&offset=649'}/>
          </Route>

          <Route path="/7">
              <FirstGen Gen={'https://pokeapi.co/api/v2/pokemon?limit=86&offset=721'}/>
          </Route>
        </Switch>

      </Router>
      
      <Footer/>
      
      
    </div>
  );
}

export default App;
