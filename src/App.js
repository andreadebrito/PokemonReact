import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  return (
    // O componente Router encapsula o nosso App e fica responsável por escutar todas as alterações de Rotas
    <Router>
      <Header />
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/pokemon/:name">
            <PokemonDetail />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
