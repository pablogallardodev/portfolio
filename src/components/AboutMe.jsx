import styles from '../styles/AboutMe.module.css'

const AboutMe = () => {
  return (
    <div className={`${styles.about} app-center`} id='aboutme'>
      <h1>Sobre mí</h1>
      <p>Ingeniero en Sistemas Computacionales 👨‍🎓, apasionado por ser desarrollador, aprender y aplicar nuevas tecnologías. Actualmente soy desarrollador Front-End 💻 🖱 para una consultora. Un hobby es poder compartir mis conocimientos 📹 📺, para que los demás puedan aprender más. Por último, pero no menos importante soy de México. 🌮 🌮</p>
    </div>
  )
}

export default AboutMe