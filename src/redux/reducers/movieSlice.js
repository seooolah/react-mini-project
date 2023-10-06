import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movie',
    initialState : {
        popularMovies : [],
        topRatedMovies : [],
        upcomingMovies : [],

        genreList : []
    },
    reducers : {
        initData : (state, action) =>{
            console.log('[movieSlice.js]', action);
            // action은 {type, payload}로 객체화되어있으니깐
            // 구조분해를 통해 payload 속성값만 접근할 수 있음
            let {payload} = action // => 이렇게 정의하면 payload만 가져올 수 있음
            console.log('action안에 payload 가져오기',payload);

            state.popularMovies = payload.popular.results
            state.topRatedMovies = payload.topRated.results
            state.upcomingMovies = payload.upcoming.results

            state.genreList = payload.genre.genres
        }
    }
})

export const MovieReducerActions = movieSlice.actions

export default movieSlice.reducer