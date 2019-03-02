import React, { Component } from "react";
import { getMovies } from "../services/fakeData";

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

  handleLike(movies){
      
      this.setState({
        isLiked: !this.state.isLiked
      })
  }

  render() {
    const classes = "fa fa-heart fa-heart-o"
    return (
      <div>
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
            { this.state.movies.map ( movies => (
                  <tr  key={movies._id} >
                  <td>{movies.title}</td>
                  <td>{movies.genre.name}</td>
                  <td>{movies.numberInStock}</td>
                  <td>{movies.dailyRentalRate}</td>
                  <td>
                      <i onClick= {() =>this.handleLike(movies)  } 
                      className={(this.state.isLiked) ? 'fa fa-heart' : 'fa fa-heart-o'  } ></i>
                  </td>
                  <td>
                  <button onClick={()=> this.handleDelete(movies) }
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
