import logo from "../picture/profile.png"
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Logo" width="60" />
      <ul>
        <li>About me</li>
        <li>Proyectos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  )
}

export default Navbar