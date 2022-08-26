import { useState, useEffect } from "react"
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
    <div className='containerSection app-center' id='contact'>
      <h1 className='titleSection' style={{display: 'flex', alignItems: 'center'}}>
        <img src={youtube} alt="Pablo Gallardo Dev" />/Pablo Gallardo Dev
      </h1>
      <p className={styles.descripcion}>Como lo mencione antes, cuento con un canal de YouTube en donde me gusta enseñar y mostrar los conocimientos que tengo. Esperando que pueda ser de ayuda para otros desarrolladores que inician.</p>
      <h3 className={styles.subTitle}>Vídeos subidos recientemente</h3>
      <div className={styles.videos}>
      {
        videos.map(({ snippet }) => {
          const { title, thumbnails, resourceId } = snippet
          const { videoId } = resourceId
          const { medium } = thumbnails
          return (
          <a href={`https://youtu.be/${videoId}`} target='_blank' className={styles.video}>
            <img src={medium.url} alt={title}/>
            <p>{title}</p>
          </a>
          )
        })
      }
    </div>
    </div>
  )
}

export default Videos