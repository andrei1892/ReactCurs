import React, { Component } from "react";
import Star from "./Star";

class StarRating extends Component {
  // Initialize a 'rating' state
  state = {
    rating: 0
    /*       course: [
        { id:0 , rating: 0 },
        { id:1 , rating: 0 },
        { id:2 , rating: 0 },
        { id:3 , rating: 0 },
        { id:4 , rating: 0 }
      ] */
  };

  // Write a function that returns 5 Star components
  getStars = () => {
    const renderStar = [];
    let  maxRating = 5
    for (let i = 0; i < maxRating; i++) {
      renderStar.push(
        <Star
          isSelected={  this.state.rating > i }
          key={i.toString()}
          id={i}
          updateRating={this.updateRating}
        />
      );
    }
    return renderStar;
  };
  // Write an event handler that updates the rating state.
  updateRating = id => {
    
    this.setState( (prevState)  => {
         return  prevState.rating === id ? prevState.rating=0 : {rating: prevState.rating = id}
        } )
  };

  // Pass the function to a Star component via props

  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
        {this.getStars()}
      </ul>
    );
  }
}

export default StarRating;