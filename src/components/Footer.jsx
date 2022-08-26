import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={`${styles.footer}`} id='contact'>
      <a href="mailto:pablito.260197@gmail.com" target="blank">Correo</a>
      <a href="https://github.com/pablogallardodev" target="blank">GitHub</a>
      <a href="https://www.youtube.com/c/PabloGallardoDev" target="blank">Youtube</a>
      <a href="https://www.instagram.com/pablogallardodev" target="blank">Instagram</a>
      <a href="https://www.twitch.tv/pablogallardodev" target="blank">Twitch</a>
    </footer>
  )
}

export default Footer