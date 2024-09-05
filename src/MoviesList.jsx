import { Component } from 'react';
import Movie from './Movie';
import './styles.css';
import Modal from './Modal';


class MoviesList extends Component {
    constructor() {
        super();
        this.state = {
            movies: [
                { id: 1, genre: 'Thriller', title: 'The Dark Knight', description: 'Thriller and Suspense' },
                { id: 2, genre: 'Action', title: 'Mad Max', description: 'Action' },
                { id: 3, genre: 'Comedy', title: 'Friday', description: 'Comedy' },
                { id: 4, genre: 'Romance', title: 'The Idea of You', description: 'Romance' },
            ]
        };
    }

    handleDelete = (id) => {
        this.setState(prevState => ({
            movies: prevState.movies.filter(movie => movie.id !== id)
        }));
    };

    filterByGenre = (genre) => {
        this.setState(prevState => ({
            movies: prevState.movies.filter(movie => movie.genre == genre)
        }));

    }
    bringListBack = () => {
        this.setState({
            movies: [
                { id: 1, genre: 'Thriller', title: 'The Dark Knight', description: 'Thriller and Suspense' },
                { id: 2, genre: 'Action', title: 'Mad Max', description: 'Action' },
                { id: 3, genre: 'Comedy', title: 'Friday', description: 'Comedy' },
                { id: 4, genre: 'Romance', title: 'The Idea of You', description: 'Romance' },
            ]}) 
    }
    


    render() {
        return (
            <div className='movie-list'>
                <h2>Movie Catalogue</h2>
                <button onClick={() => this.filterByGenre("Action")} className='Action'>Action</button>
                <button onClick={() => this.filterByGenre("Romance")} className='Romance'>Romance</button>
                <button onClick={() => this.filterByGenre("Thriller")} className='Thriller'>Thriller</button>
                <button onClick={() => this.filterByGenre("Comedy")} className='Comedy'>Comedy</button>
                <button onClick={() => this.bringListBack()} className='movie-item'>Toggle Back</button>
                <ul>
                    {this.state.movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            genre={movie.genre}
                            title={movie.title}
                            description={movie.description}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default MoviesList;






