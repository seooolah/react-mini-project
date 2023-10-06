import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MovieCard = ({movie, genre}) => {

  console.log('movieCard:', movie);
  console.log('movieCard:', genre);


  const div_styled= {
    backgroundImage : `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.poster_path})`,
    width : '300px',
    height : '200px',
    backgroundSize : 'cover'
  }

  
  return (
    <div className='movie-card' style={div_styled}>
      <Link to={`/movies/${movie.id}`}>
        <div className='overlay'>
          <div style={{fontSize:'20px', marginLeft:'15px'}}>{movie.title}</div>
          <div className='genres'>
            {movie.genre_ids.map((num)=><Badge bg="danger" key={num} style={{marginLeft:'15px'}}>
              {/* find() : 일치한 정보 중 첫번째 요소만 반환하는 함수 */}
              {genre.find((item)=>item.id===num).name}
              </Badge>)}
          </div>
          <div className='info' style={{marginLeft:'15px'}}>평점 : {movie.vote_average}점 | {movie.adult? '성인':'청소년'}⬆️</div>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard