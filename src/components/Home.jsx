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
  
  const arraySVG = [reactSvg, htmlSvg, cssSvg, jsSvg, gitSvg, githubSvg, reactSvg, htmlSvg, cssSvg, jsSvg, gitSvg, githubSvg]

  return <>
    <div className={`${styles.home} app-center`}>
      <div className={styles.left}>

        <h1 className={styles.presentation}>
          Hola!!! <span>👋</span>, yo soy <br />
          <strong>Pablo Gallardo</strong> <br/>
          (Front-End Developer)
        </h1>
        
        <p className={styles.description}>Soy un <strong>Mexicano🌮 Ingeniero en Sistemas Computacionales</strong>.👨‍🎓Conocí el mundo del desarrollo por coincidencia pero desde entonces le agradezco👏, a mí yo del pasado.<br/>Actualmente soy <strong>desarrollador Front-End con React JS</strong>💻, me gusta mucho aprender cosas nuevas y mantenerme actualizado. Una manera que uso para seguir aprendiendo es enseñar lo que sé📽️, pero eso lo cuento más adelante.</p>

        <button className={styles.cv}>Descargar CV, para saber más</button>

        <div className={styles.redes}>
          <h1>Sígueme en:</h1>
          <a href="https://www.youtube.com/c/PabloGallardoDev" target="blank"><img src={youtube} alt="Pablo Gallardo" /></a>
          <a href="https://www.instagram.com/pablogallardodev" target="blank"><img src={instagram} alt="Pablo Gallardo" /></a>
          <a href="https://www.twitch.tv/pablogallardodev" target="blank"><img src={twitch} alt="Pablo Gallardo" /></a>
          <a href="https://github.com/pablogallardodev" target="blank"><img src={github} alt="Pablo Gallardo" /></a>
        </div>
      </div>
      <div className={styles.right}>
        {          
          arraySVG.map((icon, index) => {
            const left = Math.floor(Math.random() * (90 - 10) + 10);
            const animationDelay = Math.floor(Math.random() * 15);
            const animationDuration = Math.floor(Math.random() * (30 - 15) + 15);
            
            return <img className={styles.svg} src={icon} style={{ left: `${left}%`, animationDelay: `${animationDelay}s`, animationDuration: `${animationDuration}s` }} key={index}></img>
          })
        }
        <img className={styles.profile} src={Profile} alt="Pablo Gallardo" />

      </div>      
    </div>
  </>
}

export default Home