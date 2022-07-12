import Profile from '../picture/profile.png'
import github from '../picture/github.png'
import instagram from '../picture/instagram.png'
import twitch from '../picture/twitch.png'
import youtube from '../picture/youtube.png'
import styles from '../styles/Home.module.css'

const Home = () => {
  return <>
    <ul className={styles.circles}>
      {
        Array.from({ length: 30 }).map((el, index) => {
          const size = Math.floor(Math.random() * (50 - 20) + 20);
          const position = Math.floor(Math.random() * 90);
          const animationDelay = Math.floor(Math.random() * 15);
          const animationDuration = Math.floor(Math.random() * (40 - 10) + 10);

          return <li style={{ left: `${position}%`, width: `${size}px`, height: `${size}px`, animationDelay: `${animationDelay}s`, animationDuration: `${animationDuration}s` }} key={index}></li>
        })
      }
    </ul>

    <div className={styles.home}>
      <div>
        <h1>Hola!!! 👋, yo soy</h1>
        <h1 className={styles.name}>Pablo Gallardo</h1>
        <h2 className={styles.title}>Front-end Developer</h2>
        <button className={styles.cv}>Donwload CV</button>
        <div className={styles.redes}>
          <a href="https://github.com/pablogallardodev" target="blank"><img src={github} alt="Pablo Gallardo" /></a>
          <a href="https://www.youtube.com/channel/UCS-YoU7f8PztGHBd4OD9RSw" target="blank"><img src={youtube} alt="Pablo Gallardo" /></a>
          <a href="https://www.instagram.com/pablogallardodev" target="blank"><img src={instagram} alt="Pablo Gallardo" /></a>
          <a href="https://www.twitch.tv/pablogallardodev" target="blank"><img src={twitch} alt="Pablo Gallardo" /></a>
        </div>
      </div>
      <div>
        <img src={Profile} alt="Pablo Gallardo" />
      </div>      
    </div>
  </>
}

export default Home