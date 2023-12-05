import './App.css';
import React ,{useState} from "react"
import MovieList from './MovieList';

import AddMovieForm from './AddMovieForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  const [movies,setMovies]=useState([
    // setting movies
    
{
  title:"Mean Girls",
  description:
  "A teenage girl's humorous and chaotic experience navigating high school cliques and social dynamics.",
  rating:4,
  posterURL:"https://m.media-amazon.com/images/M/MV5BYThkNWRmOTYtMjFiMy00ODA4LThlODgtNGVjYzQ4YjM0NDc5XkEyXkFqcGdeQXVyMTEyMDcwNw@@._V1_.jpg",
trailerURL:"https://www.youtube.com/watch?v=oDU84nmSDZY"},
{
  title:"Legally Blonde",
  description:"A fashionable sorority girl defies stereotypes and discovers her legal prowess at Harvard Law School in pursuit of love and self-discovery ",
  rating:4,
  posterURL:"https://m.media-amazon.com/images/M/MV5BNTEyNjUwMTkxMV5BMl5BanBnXkFtZTcwNjk0NDk0NA@@._V1_FMjpg_UX1000_.jpg",
  trailerURL:"https://www.youtube.com/watch?v=vWOHwI_FgAo"},
{
  title:"13 Going on 30",
  description:"A 13-year-old magically transforms into her 30-year-old self, navigating adulthood with humor and heart in '13 Going on 30.",
  rating:3.5,
  posterURL:"https://m.media-amazon.com/images/M/MV5BMjE1NzI5NTkwMF5BMl5BanBnXkFtZTYwOTA4NzY2._V1_.jpg",
  trailerURL:"https://www.youtube.com/watch?v=5UrCaXLBN30"},
{title: "The Devil Wears Prada",
    description:"An aspiring journalist's journey into the demanding world of high fashion as the assistant to a powerful and influential magazine editor." ,
  rating:4,
posterURL:"https://m.media-amazon.com/images/M/MV5BZjQ3ZTIzOTItMGNjNC00MWRmLWJlMGEtMjJmMDM5ZDIzZGM3XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_.jpg",
trailerURL:"https://www.youtube.com/watch?v=6ZOZwUQKu3E"},
{
  title:"The Princess Diaries",
  description:"A socially awkward teenager discovers she's heir to a European throne, navigating royal responsibilities and self-discovery in 'The Princess Diaries.",
  rating:4,
  posterURL:"https://m.media-amazon.com/images/M/MV5BMzcwYjEwMzEtZTZmMi00ZGFhLWJhZjItMDAzNDVkNjZmM2U5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  trailerURL:"https://www.youtube.com/watch?v=CzcGwB7qat8"
},
{
  title:"The Sisterhood of the Traveling Pants",
  description:"Four lifelong friends stay connected through a magical pair of jeans that fits each of them perfectly, as they navigate the challenges of growing up.",
  rating:3.5,
  posterURL:"https://m.media-amazon.com/images/M/MV5BNmRjYWE3OTQtYzEwOC00OWM4LTk3MzktZTUyZTgzNjY4NDc0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
  trailerURL:"https://www.youtube.com/watch?v=eV1IkLvTe1I"},
{
  title:"Bride Wars",
  description:"Two best friends turn into bride-to-be rivals, creating comedic chaos as they clash in their wedding preparations in 'Bride Wars.",
  rating:3,
  posterURL:"https://m.media-amazon.com/images/M/MV5BMTUyNTg2OTUwN15BMl5BanBnXkFtZTgwNzEzMzg5MTI@._V1_.jpg",
  trailerURL:"https://www.youtube.com/watch?v=KBDE4uznmIw"},
])
// filter useState
const [filter, setFilter] = useState("");
const filteredMovies = movies.filter((movie) => {
  const titleMatch = movie.title.toLowerCase().includes(filter.toLowerCase());
  const ratingMatch =
    movie.rating !== undefined && movie.rating.toString().includes(filter);
// filter by title or rating
  return titleMatch || ratingMatch;
});
const handleFilterChange = (e) => {
  setFilter(e.target.value);
};
const handleAddMovie = (newMovie) => {
  setMovies((prevMovies) => [...prevMovies, newMovie]);
};





  return (
    <div className="App">
      {/* setting webpage title */}
      <h1  style={{color:"#FFFFFF",backgroundColor:"#ff8fab",height:"60px",marginTop:"0px", paddingTop:"10px"}} id='bigtitle'>
        <FontAwesomeIcon icon="heart" style={{ color: '#FFFFFF', fontSize: '24px', marginRight: '10px' }} />
        2000s Girls' Night Movies
        <FontAwesomeIcon icon="heart" style={{ color: '#FFFFFF', fontSize: '24px', marginLeft: '10px' }} /></h1> 
      <br></br>
      <br></br>
      <div>
        {/* filter input */}
        <label htmlFor="filter"></label>
        <input
          type="text"
          id="filter"
          placeholder='Filter by Title or Rating:'
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      {/* add movie component */}
      <AddMovieForm onAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
