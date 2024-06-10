import ReactStars from 'react-stars'

const FILTER ={
    paddingTop:'3%',
    color: 'white',
    display:'flex',
    justifyContent:'center',

}

const TITLE ={
    paddingRight:'2%',
    fontWeight :'600',
    fontSize:'16px',

}


const SearchMovie =({setSearchName, setSearchRating})=>{

    const ratingChange = (newRating)=>{
        setSearchRating(newRating)
    }

    return (
        <>
        <div style ={FILTER}> 
           <p style={TITLE} >Choose a Movie</p>
           <input
           type="text"
           onChange={(e)=>setSearchName(e.target.value)}
           ></input>
         </div>
    <div style={{display:'flex',justifyContent:'center', paddingLeft:'150px'}}>
        {<ReactStars
  count={5}
  size={30}
  color2={'#ffd700'}
  onChange={ratingChange}
 />} 
        </div>
        </>
    )
}

export default SearchMovie