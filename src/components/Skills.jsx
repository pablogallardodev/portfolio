import { useRef } from "react"
import { motion } from "framer-motion"

import js from '../img/icons/js.svg'
import github from '../img/icons/github.svg'
import react from '../img/icons/react.svg'
import css from '../img/icons/css.svg'
import git from '../img/icons/git.svg'
import html from '../img/icons/html.svg'
import dotnet from '../img/icons/dotnet.svg'
import nodedotjs from '../img/icons/nodedotjs.svg'

import styles from '../styles/Skills.module.css'

const Skills = () => {
  const constraintsRef = useRef(null);

  return (
    <div className='containerSection app-center' id='skills'>
      <h1 className='titleSection'>Habilidades</h1>

      <motion.div className={styles.dragArea} ref={constraintsRef}>
        <motion.img drag dragConstraints={constraintsRef} src={js}/>
        <motion.img drag dragConstraints={constraintsRef} src={react}/>
        <motion.img drag dragConstraints={constraintsRef} src={dotnet}/>
        <motion.img drag dragConstraints={constraintsRef} src={nodedotjs}/>
        <motion.img drag dragConstraints={constraintsRef} src={html}/>
        <motion.img drag dragConstraints={constraintsRef} src={css}/>
        <motion.img drag dragConstraints={constraintsRef} src={git}/>
        <motion.img drag dragConstraints={constraintsRef} src={github}/>
      </motion.div>
      <span className={styles.note}>*Mueve los iconos.</span>
    </div>
  )
}

export default Skills