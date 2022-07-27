import logo from "../img/icons/logo.png"
import styles from '../styles/Header.module.css'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.nav animate={{ opacity: [0,1] }} transition={{ duration: 1.5 }} className={styles.nav}>
      <div className={`${styles.content} app-center`}>
        <img src={logo} alt="Pablo Gallardo" width="70" />
        <div className={styles.menu}>
          <motion.a whileTap={{ scale: 0.9 }} whileHover={{scale: 1.1}} href="#home">Yo</motion.a>
          <motion.a whileTap={{ scale: 0.9 }} whileHover={{scale: 1.1}} href="#projects">Proyectos</motion.a>
          <motion.a whileTap={{ scale: 0.9 }} whileHover={{scale: 1.1}} href="#contact">Contacto</motion.a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Header