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
            <p> Hello from container</p>
            <MovieQuote />
        </>
    )
}

export default ProjectContainer;