import { motion } from 'framer-motion'

import profile from '../img/profile.png'
import instagram from '../img/icons/instagram.png'
import twitch from '../img/icons/twitch.png'
import youtube from '../img/icons/youtube.png'
import github from '../img/icons/github.svg'
import react from '../img/icons/react.svg'
import css from '../img/icons/css.svg'
import git from '../img/icons/git.svg'
import html from '../img/icons/html.svg'
import js from '../img/icons/js.svg'

import styles from '../styles/Home.module.css'

const Home = () => {
  const arraySVG = [react, html, css, js, git, github, react, html, css, js, git, github]

  return (
    <>
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.2, duration: 1 }} className={`${styles.home} app-center`}>
        <div className={styles.left}>

          <h1 className={styles.presentation}>Hola! <span>👋</span>, soy</h1>
          <motion.h2 animate={{ y: [-300, 10, -10, 0] }} transition={{ delay: 0.5, duration: 1.5, type: 'spring' }} className={styles.name}>Pablo Gallardo</motion.h2>
          <span className={styles.job}>(Front-End Developer)</span>

          <p className={styles.description}>Soy <strong>Mexicano🌮 e Ingeniero en Sistemas Computacionales</strong>.👨‍🎓Me gustaría especializarme en tecnologías web, por lo que me encuentro aprendiendo todo lo relacionado con <strong>JavaScript</strong>, así como la creación de <strong>API</strong>.</p>
          <p className={styles.description}>Actualmente soy <strong>desarrollador Front-End con React JS</strong>💻, mi reto personal es aprender cosas nuevas y mantenerme siempre actualizado. Una manera que uso para seguir aprendiendo es enseñar lo que sé📽️, pero eso lo cuento más adelante.</p>
          <p className={styles.description}>Ahora me encuentro aprendiendo <strong>TypeScript</strong> para aplicarlo en mis proyectos web.</p>

          <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className={styles.cv}> Descargar CV, para saber más </motion.button>

          <div className={styles.redes}>
            <h1>Sígueme en:</h1>
            <motion.a whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} href='https://github.com/pablogallardodev' target='blank'><img src={github} alt='Pablo Gallardo' /></motion.a>
            <motion.a whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} href='https://www.youtube.com/c/PabloGallardoDev' target='blank'><img src={youtube} alt='Pablo Gallardo' /></motion.a>
            <motion.a whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} href='https://www.instagram.com/pablogallardodev' target='blank'><img src={instagram} alt='Pablo Gallardo' /></motion.a>
            <motion.a whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} href='https://www.twitch.tv/pablogallardodev' target='blank'><img src={twitch} alt='Pablo Gallardo' /></motion.a>
          </div>
        </div>
        <div className={styles.right}>
          {
          arraySVG.map((icon, index) => {
            const left = Math.floor(Math.random() * (90 - 10) + 10)
            const animationDelay = Math.floor(Math.random() * 15)
            const animationDuration = Math.floor(Math.random() * (15 - 10) + 10)

            return <img className={styles.svg} src={icon} style={{ left: `${left}%`, animationDelay: `${animationDelay}s`, animationDuration: `${animationDuration}s` }} key={index} />
          })
        }
          <img
            className={styles.profile} src={profile} alt='Pablo Gallardo'
          />
        </div>
      </motion.div>
    </>
  )
}

export default Home
