import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './reducers/movieSlice'
import movieReducer2 from './reducers/movieSlice'

export default configureStore({
    reducer : {
        movie : movieReducer
    }
})