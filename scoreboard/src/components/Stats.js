import React from 'react';
const Stats = (props) =>{

    return(
           <table className="stats">
           <tbody>
            <tr><td>Players: {props.nr} </td></tr>
            <tr><td> Total score: {props.total} </td></tr>
            </tbody>
            </table>
        )
};

export default Stats ;