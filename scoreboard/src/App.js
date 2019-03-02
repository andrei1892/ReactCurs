import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Players from "./components/Players";
import AddPlayer from "./components/Addplayer"

class App extends Component {

  state = {
    players: [
      { name: "Player1", id: 0, score: 0 },
      { name: "Player2", id: 1, score: 0 },
      { name: "Player3", id: 2, score: 0 },
      { name: "Player4", id: 3, score: 0 },
      { name: "Player5", id: 4, score: 0 }
    ] 

  }

  handleScore = ( index, increment ) => {; 
    this.setState ( ( prevState  ) =>  {
          const players = [...prevState.players];
          players[index].score += increment;
         return {
           players
         }           
           } )  ;
  } 

   handlePlayers = (id) => {
   //  this.setState( (prevState ) => ({    players: prevState.players.filter(p => id !== p.id )    } ));
      this.setState( (prevState ) => {
        const players = prevState.players.filter( p => p.id !== id ) 
        return {    
          players
          }
     } );
   }

   handleChange = (event) => {
     this.setState({value: event.target.value});
   }

   handleSubmitPLayer = (e) => {
     e.preventDefault();
     
     this.setState ( prevState => {
         const players = [ ...prevState.players, { name:prevState.value , id: prevState.players.slice(-1)[0].id + 1 , score: 0 } ]
         return {
           players
         }
     } )
    e.target.reset();   
   }

  render() {
    const jucatori = this.state.players.map((item, index) => { //console.log(item.id.toString())
      return < Players 
      key={item.id.toString()} 
      id={item.id}
      index = {index}
      name={item.name} 
      score={item.score}
      handleScore={this.handleScore} 
      handlePlayers={this.handlePlayers} />
    })

    return (
      <div className="scoreboard" >
        <Header titlu="Tabela Scor" nr={this.state.players.length} total={this.state.players.reduce((total, player) => total + player.score, 0)} />
        {jucatori}
        <AddPlayer handleSubmitPLayer  = { this.handleSubmitPLayer } handleChange = {this.handleChange} />
      </div>
    );
  }
}

export default App;