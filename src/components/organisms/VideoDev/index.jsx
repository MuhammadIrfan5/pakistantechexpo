import React from 'react';
// import video from "../../../media/background_video.mp4"

export const VideoDev = () => {
  return (
    <div  className='justify-center flex background_video'>
      <video autoPlay muted loop className='object-cover' >
         <source  src="/background_video.mp4" type="video/mp4" />
      </video>
    </div>
  )
}