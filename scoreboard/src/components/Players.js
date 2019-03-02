import React from 'react' ;
import Counter from './Counter';

const Players = (props) => {
    return (
        <div className="player">
                      <span className="player-name">
                      <button className="remove-player" onClick={ () => { props.handlePlayers(props.id) } }>✖</button>
                             {props.name} 
                       </span>           
        <Counter score={props.score} id = { props.id} index={props.index} handleScore={props.handleScore}   /* increment = {props.increment } decrement={props.decrement} */ />
        </div>       
   )
};

export default Players;