import React from 'react'

const Banner = ({movie}) => {

  console.log('[Banner.jsx]:', movie);

  const div_style = {
    backgroundImage : `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.poster_path})`,
    height: '670px',
    display : "flex",
    flexDirection : 'column',
    justifyContent : 'center',
    objectFit : 'cover',
    opacity : '0.8'
  };

  const div_zip = {
    display : "flex",
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center'
  };

  const div_title = {
    display : "flex",
    fontSize : '50px',
    alignItems : 'center',
    justifyContent : 'center'
  };

  const div_content = {
    display : "flex",
    width : '750px',
    fontSize : '20px',
    wordBreak : 'keep-all',
    textAlign : 'center',
    justifyContent : 'center'
  };


  return (
    <div className='banner'  style={div_style}>
      <div style={div_zip}>
        <div style={div_title}>{movie?.title}</div>
        <div style={div_content}>{movie?.overview}</div>
      </div>
    </div>
  )
}

export default Banner