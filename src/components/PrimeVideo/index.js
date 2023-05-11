// Write your code here
import {Component} from 'react'

import MovieSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  renderActionMovies = () => {
    const {moviesList} = this.props

    return moviesList.filter(eachMovie => eachMovie.categoryId === 'ACTION')
  }

  renderComedyMovies = () => {
    const {moviesList} = this.props

    return moviesList.filter(eachMovie => eachMovie.categoryId === 'COMEDY')
  }

  render() {
    const actionMovies = this.renderActionMovies()
    const comedyMovies = this.renderComedyMovies()
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt=" prime video"
          className="prime-video-image"
        />
        <div className="movies-container">
          <h1 className="title">Action Movies</h1>
          <MovieSlider moviesList={actionMovies} />
          <h1 className="title">Comedy Movies</h1>
          <MovieSlider moviesList={comedyMovies} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
