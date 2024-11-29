import MovieProps from './MovieProps';
function Movie(){
    return(
        <>
            <h3> Movie Component</h3>
                        
            <MovieProps movie = "KALKI" language = "telugu" hero = "prabhas" > </MovieProps>
            <MovieProps movie = "KGF" language = "kannada" hero = "yash"> </MovieProps>
            <MovieProps movie = "KGF2" language = "kannada" hero = "yash" > </MovieProps>
            <MovieProps movie = "Kantara" language = "kannada"hero = "rishab" > </MovieProps>
            <MovieProps movie = "EEGA" language = "kannada" hero = "sudeep"> </MovieProps>
            </>
    );
}
export default Movie;