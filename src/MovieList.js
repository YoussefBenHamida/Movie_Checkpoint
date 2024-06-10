import { MovieCard } from "./MovieCard"

const MovieList =({movies, searchName, searchRating })=>{
    return (
        <div
        style={{
          marginTop:'5%',
          marginBottom:'5%',
          marginLeft:'13%',
          display:'inline-grid',
          gridTemplateColumns: 'auto auto auto auto ',
          gridGap:'100px',
        }}
      > 
    {movies.filter((el)=>el.name.toLowerCase().includes(searchName.toLowerCase()) && el.rating >= searchRating ).map((el)=>(
        <MovieCard el={el}/> 
    ))
}

</div>



)
}

export default MovieList