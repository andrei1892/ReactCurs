import React, { Component } from "react";
import { getMovies } from "../services/fakeData";
import Like from "../common/Like"

class Movies extends Component {

  state = {
        movies: getMovies() ,
        isLiked: false
  }

  handleDelete(movie){
    this.setState( prevState=> {
          const  movies= prevState.movies.filter( m=> m._id !== movie._id )
            return {
              movies
            }
          }
    )
  }

  handleLike = (movie) => {
    this.setState( prevState => {
        const movies = prevState.movies;
        const index = movies.indexOf(movie);
        movies[index].liked = !movies[index].liked;
        return{ 
          movies: movies
        } 
    })
  }

  render() {
      const { length } = this.state.movies;
      if(this.state.movies.length === 0 ) return <p>There are no movies left.</p>

    return (
      <div>
        <p> There are {length } movies in stock. </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title </th>
              <th>Genre </th>
              <th>Stock </th>
              <th>Rate </th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            { this.state.movies.map ( (movie, index) => (
                  <tr  key={movie._id} >
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                      <Like index={index}
                       liked={movie.liked}
                       onLikeClicked={ () => this.handleLike(movie) } /> 
                  </td>
                  <td>
                  <button onClick={ () => this.handleDelete(movie) }
                  className="btn btn-danger btn-sm">Delete</button>
                </td>
                </tr>
                 ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
