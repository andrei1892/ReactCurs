import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';


const Header = ( props ) => {
    return (
             <header>
                 <Stats total={props.total} nr={props.nr} />
                 <h1>  {props.titlu}  </h1>
                 <Stopwatch />
             </header>
     )
 }

 export default Header;