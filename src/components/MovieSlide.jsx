import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from './MovieCard';

const MovieSlide = ({movies, genres}) => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div style={{marginLeft:"20px"}}>
            <Carousel responsive={responsive}>
                {movies.map((item)=>(
                    <MovieCard key={item.id} movie={item} genre={genres}></MovieCard>
                ))}
            </Carousel>
        </div>
        
    )
}

export default MovieSlide