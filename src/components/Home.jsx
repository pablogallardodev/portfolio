import Profile from '../img/profile.png'
import github from '../img/icons/github.png'
import instagram from '../img/icons/instagram.png'
import twitch from '../img/icons/twitch.png'
import youtube from '../img/icons/youtube.png'

import reactSvg from '../img/icons/react.svg'
import cssSvg from '../img/icons/css.svg'
import gitSvg from '../img/icons/git.svg'
import githubSvg from '../img/icons/github.svg'
import htmlSvg from '../img/icons/html.svg'
import jsSvg from '../img/icons/js.svg'

import styles from '../styles/Home.module.css'

const Home = () => {
  return <>
    <div className={styles.home}>
      <div className={styles.left}>
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
      <div className={styles.right}>
        <img src={Profile} alt="Pablo Gallardo" />

        {
          Array.from({ length: 10 }).map((el, index) => {
            const arraySVG = [reactSvg, htmlSvg, cssSvg, jsSvg, gitSvg, githubSvg]
            const icon = arraySVG[Math.floor(Math.random() * arraySVG.length)]
            const left = Math.floor(Math.random() * (95 - 65) + 65);
            const animationDelay = Math.floor(Math.random() * 15);
            const animationDuration = Math.floor(Math.random() * (20 - 10) + 10);

            return <img className={styles.svg} src={icon} style={{ left: `${left}%`, animationDelay: `${animationDelay}s`, animationDuration: `${animationDuration}s` }} key={index}></img>
          })
        }

      </div>      
    </div>
  </>
}

export default Home