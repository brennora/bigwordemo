import React, { Component } from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spellbinder } from "./SpellBinder.js";
import { ChooseGame } from "./ChooseGame.js"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      renderGame: "Choose a Game"
    }
  }

  buttonClick = e => {
      this.setState({renderGame: e.target.value});
  };

  render(){
    switch(this.state.renderGame){
      case "Spell Binder":
        return <Spellbinder renderGame={this.state.renderGame}/>;
      default:
        return <ChooseGame renderGame={this.state.renderGame} buttonClick = {this.buttonClick}/>;
    }
  }
}

export default App;