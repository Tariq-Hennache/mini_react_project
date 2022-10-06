import {useState, useEffect} from 'react';
import MovieQuote from '../components/MovieQuote';


const ProjectContainer = ( ) => {


    const [movieQuote, setMovieQuote] = useState({})

    const fetchMovieQuote = async () => {
        const response = await fetch("https://movie-quote-api.herokuapp.com/v1/quote/");
        const jsonData = await response.json();
        setMovieQuote(jsonData)
    }

    useEffect(()=> {
        fetchMovieQuote()

    }, [])

    return (
        <>
            <h1> Guess the TV show from the quote</h1>
            <MovieQuote movieQuote={movieQuote}/>
        </>
    )
}

export default ProjectContainer;