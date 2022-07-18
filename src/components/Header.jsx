import logo from "../img/icons/logo.png"
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.content} app-center`}>
        <img src={logo} alt="Logo" width="70" />
        <div className={styles.menu}>
          <a href="#home">Yo</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </nav>
  )
}

export default Header