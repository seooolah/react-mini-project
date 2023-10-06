import React, { useEffect, useState } from 'react'
import api from '../api'
import { useDispatch, useSelector } from 'react-redux'
import {MovieReducerActions} from '../redux/reducers/movieSlice'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader"

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)

  // *영화 목록
  const popmovie = useSelector((state)=>state.movie.popularMovies)
  const topmovie = useSelector((state)=>state.movie.topRatedMovies)
  const upcommovie = useSelector((state)=>state.movie.upcomingMovies)
  // // *영화 장르
  const genrearr = useSelector((state)=>state.movie.genreList)

  // dispatch()를 이용해 movieSlice.js의 initData 액션함수 호출 (console.log)
  const dispatch = useDispatch()

  // 3가지 종류의 영화목록을 묶어서 요청하는 방법
  const getMovieList = async()=>{

  setIsLoading(true)
  // 영화목록
  const popularList = api.get('/movie/popular?language=ko-KR&page=1')
  const topRatedList = api.get('/movie/top_rated?language=ko-KR&page=1')
  const upcomingList = api.get('/movie/upcoming?language=ko-KR&page=1')
  const genreList = api.get('/genre/movie/list?language=ko')

  // 세 개의 url을 한번에 비동기식으로 처리하기
  const [popular, topRated, upcoming, genre] = await Promise.all([popularList, topRatedList, upcomingList, genreList])
  console.log('인기:', popular.data);
  console.log('top:', topRated.data);
  console.log('급상승:', upcoming.data);
  console.log('장르', genre.data);

  dispatch(MovieReducerActions.initData({ popular:popular.data, 
                                          topRated:topRated.data,
                                          upcoming:upcoming.data, 
                                          genre:genre.data})); // ⬆️ 객체 형태로 데이터 받아오기

  setIsLoading(false)
  }


  useEffect(()=>{

    getMovieList()

  },[])
  
  return (
    <div>
      {isLoading ? 
        <ClipLoader color='#fff' loading={isLoading} size={150} aria-label="Loading Spinner" data-testid="loader"/>
      :
      <div>
        {<Banner movie={popmovie[0]}/>}
      
        <h1>인기 영화</h1>
        <MovieSlide movies={popmovie} genres={genrearr}></MovieSlide>

        <h1>TOP 영화</h1>
        <MovieSlide movies={topmovie} genres={genrearr}></MovieSlide>

        <h1>개봉예정 영화</h1>
        <MovieSlide movies={upcommovie} genres={genrearr}></MovieSlide>
      </div>
    }
            
    </div>
  )
}

export default Home