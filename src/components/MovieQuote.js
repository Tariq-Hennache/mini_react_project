const MovieQuote = ({movieQuote, newQuote}) => {

    let answerRevealDecider = true;

    const handleClick = () => {
        // once button clicked shows quoute origin
        
        window.alert(movieQuote.show)
    }

    const getNewQuote = () => {
        window.location.reload()
    }

    
    return (
        <>
            
            <p>{movieQuote.quote}</p>
            <input type="text " placeholder="Your guess ..."></input>
            <br></br><br></br>
            <button onClick={handleClick}>The Answer</button>
            <br></br>
            <button onClick={getNewQuote}>New Quote</button>
            

        </>
    )
}

export default MovieQuote;