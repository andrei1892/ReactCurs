import React, { Component } from "react";
import { getMovies } from "../services/fakeData";
import Like from "../common/Like"
import Pagination from "../common/Pagination";
// import {paginate} from '../utils/paginate'

class Movies extends Component {

  state = {
        movies: getMovies() ,
        isLiked: false ,
        maxItemsOnPage: 4,
        crtPage: 1
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

  getMovies = (crtPage, maxItemsOnPage ) => {
      let start = ( crtPage -1 ) * maxItemsOnPage ;
      let end = start + maxItemsOnPage;
    //  console.log(this.state.movies.slice(0,4))
      return this.state.movies.slice(start,end)
  }

  onPageChange = (page) => {
      this.setState({
        crtPage: page
      })
  }

  render() {
      const { length } = this.state.movies;
      if(this.state.movies.length === 0 ) return <p>There are no movies left.</p>

    return (
      <React.Fragment>
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
            { this.getMovies(this.state.crtPage, this.state.maxItemsOnPage).map ( (movie, index) => (
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
      <Pagination crtPage={this.state.crtPage} maxItemsOnPage={this.state.maxItemsOnPage} onPageChange={this.onPageChange} itemsCount = {length} />
      </React.Fragment>
    );
  }
}

export default Movies;
