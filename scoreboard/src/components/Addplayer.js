import React from 'react';


const AddPlayer = (props) => {
    
    return(
    <form   onSubmit={props.handleSubmitPLayer} >
        <input type="text"  placeholder="Add a new player" onChange={props.handleChange} />
        <input type="submit" value=" Add player" />
    </form>
    )
}

export default AddPlayer;