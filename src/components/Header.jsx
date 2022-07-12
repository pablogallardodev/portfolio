import logo from "../picture/Logo.png"
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.content} app-center`}>
        <img src={logo} alt="Logo" width="70" />
        <div className={styles.menu}>
          <a href="#home">Inicio</a>
          <a href="#aboutme">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </nav>
  )
}

export default Header