import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import github from '../img/icons/github.svg'
import chrome from '../img/icons/googlechrome.svg'
import xmark from '../img/icons/xmark.svg'
import styles from '../styles/Project.module.css'
import { projects } from '../utils/constants'

const Projects = () => {
  const [selectProject, setSelectProject] = useState(null)

  return (
    <div className='containerSection app-center' id='projects'>
      <h1 className='titleSection'>Proyectos</h1>
      <div className={styles.projects}>
        {
          projects.map(project => (
            <motion.div whileHover={{ scale: 1.05 }} key={project.id} layoutId={project.id} className={styles.project}>
              <img className={styles.imgProject} src={project.img} alt='project img' onClick={() => setSelectProject(project)} />
              <h2 className={styles.title}>{project.name}</h2>
              <div className={styles.links}>
                <motion.a whileHover={{ scale: 1.05 }} href={project.repoUrl} target='_blank' rel='noopener noreferrer' title='Codigo'><img src={github} alt={project.name} width={20} />Código</motion.a>
                <motion.a whileHover={{ scale: 1.05 }} href={project.deployUrl} target='_blank' rel='noopener noreferrer' title='Visitar'><img src={chrome} alt={project.name} width={20} />Visitar</motion.a>
              </div>
            </motion.div>
          ))
        }
      </div>

      <AnimatePresence>
        {selectProject && (
          <motion.div animate={{ opacity: [0, 1] }} layoutId={selectProject.id} className={styles.viewProject}>
            <motion.div>
              <div className={styles.head}>
                <h2>{selectProject.name}</h2>
                <motion.button whileTap={{ scale: 0.9 }} onClick={() => setSelectProject(null)}><img src={xmark} alt='Close modal' /></motion.button>
              </div>
              <p className={styles.description}>{selectProject.description}</p>
              <section className={styles.made}>
                <h3>Realizado con:</h3>
                {selectProject.made.map((icon, index) => <img src={icon} alt={`${icon}`} width={20} key={index} />)}
              </section>
              <img className={styles.imgProject} src={selectProject.img} alt='project img' />
              <div className={styles.links}>
                <motion.a whileTap={{ scale: 0.9 }} href={selectProject.repoUrl} target='_blank' rel='noopener noreferrer' title='Codigo'><img src={github} alt={selectProject.name} width={20} />Clonar repositorio</motion.a>
                <motion.a whileTap={{ scale: 0.9 }} href={selectProject.deployUrl} target='_blank' rel='noopener noreferrer' title='Visitar'><img src={chrome} alt={selectProject.name} width={20} />Visitar página</motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
