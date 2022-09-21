import youtube from '../img/icons/youtube.png'
import styles from "../styles/Videos.module.css"
import useVideos from '../hooks/useVideos'

const Videos = () => {
  
  const { videos, loading, popularVideos } = useVideos()

  return (
    <div className='containerSection app-center'>
      <h1 className='titleSection' style={{display: 'flex', alignItems: 'center'}}>
        <img src={youtube} alt="Pablo Gallardo Dev" />/Pablo Gallardo Dev
      </h1>
      <p className={styles.descripcion}>Como lo mencione antes, cuento con un canal de YouTube en donde me gusta enseñar y mostrar los conocimientos que tengo. Esperando que pueda ser de ayuda para otros desarrolladores que inician.</p>
      <h3 className={styles.subTitle}>Vídeos subidos recientemente</h3>
      <div className={styles.videos}>
      {
        !loading && videos.map((video, index) => (
          <a href={video.videoUrl} target='_blank' className={styles.video} key={index}>
            <img src={video.imgUrl} alt={video.title}/>
            <p>{video.title}</p>
          </a>
        ))
      }
      </div>
      <h3 className={styles.subTitle}>Vídeos más populares</h3>
      <div className={styles.videos}>
      {
        !loading && popularVideos.map((video, index) => (
          <a href={video.videoUrl} target='_blank' className={styles.video} key={index}>
            <img src={video.imgUrl} alt={video.title}/>
            <p>{video.title}</p>
          </a>
        ))
      }
      </div>
    </div>
  )
}

export default Videos