import { useState, useEffect } from "react";
import youtube from '../img/icons/youtube.png'
import styles from "../styles/Videos.module.css"
const { VITE_YOUTUBE_APIKEY, VITE_PLAYLIST_ID } = import.meta.env;

const Videos = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${VITE_PLAYLIST_ID}&maxResults=5&key=${VITE_YOUTUBE_APIKEY}`)
    .then((res) => res.json())
    .then((videos) => setVideos(videos.items))
  }, [])

  return (
    <div className='app-center' id='contact' style={{ minHeight: '100vh', paddingTop: '3.5rem' }}>
      <h1 className='titleSection' style={{display: 'flex', alignItems: 'center'}}>
        <img src={youtube} alt="Pablo Gallardo Dev" />/Pablo Gallardo Dev
      </h1>
      <div className={styles.videos}>
      {
        videos.map(({ snippet }) => {
          const { title, thumbnails, resourceId } = snippet
          const { videoId } = resourceId
          const { high } = thumbnails
          return (
          <a href={`https://youtu.be/${videoId}`} target='_blank'>
            <img width='30%' src={high.url} alt={title}/>
          </a>
          )
        })
      }
    </div>
    </div>
  )
}

export default Videos