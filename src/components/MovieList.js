import MovieCard from "./MovieCard";
const MovieList = ({movies , removeMovie}) => {

    
	return (
       
            
        <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"space-evenly"}}>
            {movies.map((el,i)=>(
                <MovieCard removeMovie={removeMovie} movie={el} key={i}/>   
            ))}
        </div>
        
	);
};

export default MovieList;