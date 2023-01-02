import React, { useEffect } from 'react'
import {API_KEY,imageUrl} from '../../constance/constance'
import Youtube from 'react-youtube'
import axios from '../../axios'
import { useState } from 'react';
import "./Banner.css";


function Banner() {
    const [movie, setMovie] = useState()
    const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        setMovie(response.data.results[Math.round(Math.random()*response.data.results.length)])

    })

  }, [])

  const opts = {
    height: '528',
    width: '600px',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const movieTrailer=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        if(response.data.length !==0){
            setUrlId(response.data.results[0])
        }
    })

  }
  
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})`}} 
     className='banner'>
        <div className='video'>
         { urlId &&  <Youtube opts={opts} videoId={urlId.key}  /> }
         </div>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title :""}</h1>
        <div className='banner_buttons'>
            <button onClick={()=>movieTrailer(movie.id)} className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview :""}</h1>
      </div>
       <div  className='fade_bottom'></div>
     
    </div>
    
  )
}

export default Banner