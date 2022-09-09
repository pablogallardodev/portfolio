import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import github from '../img/icons/github.svg'
import chrome from '../img/icons/googlechrome.svg'
import xmark from '../img/icons/xmark.svg'
import react from '../img/icons/react.svg'
import firebase from '../img/icons/firebase.svg'
import next from '../img/icons/next.svg'
import twilio from '../img/icons/twilio.svg'
import js from '../img/icons/js.svg'
import facejoin from '../img/pages/facejoin.svg'
import inventory from '../img/pages/inventory.svg'
import watchingweather from '../img/pages/watchingweather.svg'
import styles from '../styles/Project.module.css'

const Projects = () => {

  const projects = [
    {
      id: 1,
      name: 'Watching-weather',
      description: 'Aplicacion mobile onli, en la cuál podemos tener información sobre el clima de una locación en base a nuestra ubicación o podemos buscar cualquiera, para tener acceso a la misma hay que primero iniciar sesión con una cuenta de Github.',
      deployUrl: 'https://watching-weather.vercel.app/',
      repoUrl: 'https://github.com/pablogallardodev/watching-weather',
      img: watchingweather,
      made: [next, js, react, firebase]
    },
    {
      id: 2,
      name: 'Inventory',
      description: 'Web app para el control de inventario, en donde puedes logearte con google o github, una vez iniciada la sesión puedes crear, editar o eliminar los productos existentes, así como modificar sus stocks actuales realizando movimientos de entradas o salidas.',
      deployUrl: 'https://inventory-one-liart.vercel.app/',
      repoUrl: 'https://github.com/pablogallardodev/inventory',
      img: inventory,
      made: [js, react, firebase]
    },
    {
      id: 3,
      name: 'Face-join',
      description: 'Google Meet clone, es una aplicacion en la que puedes crear videollamadas y unir a mas personas con tan solo ingresar el nombre de la sala, es un app muy simple de utilizar.',
      deployUrl: 'https://face-join.vercel.app/',
      repoUrl: 'https://github.com/pablogallardodev/face-join',
      img: facejoin,
      made: [js, react, twilio]
    }
  ]
  const [selectProject, setSelectProject] = useState(null)

  return (
    <div className='containerSection app-center' id='projects'>
      <h1 className='titleSection'>Proyectos</h1>
      <div className={styles.projects}>
        {
          projects.map(project => (
            <motion.div whileHover={{ scale: 1.05 }} key={project.id} layoutId={project.id} className={styles.project}>
              <img className={styles.imgProject} src={project.img} alt="project img" onClick={() => setSelectProject(project)}/>
              <h2>{project.name}</h2>
              <div className={styles.links}>
                <motion.a whileHover={{ scale: 1.1 }} href={project.repoUrl} target="_blank" rel="noopener noreferrer" title='Codigo'><img src={github} alt={project.name} width={25}/></motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href={project.deployUrl} target="_blank" rel="noopener noreferrer" title='Visitar'><img src={chrome} alt={project.name} width={25}/></motion.a>
              </div>              
            </motion.div>
          ))
        }
      </div>

      <AnimatePresence>
        {selectProject && (
          <motion.div animate={{ opacity: [0,1] }} layoutId={selectProject.id} className={styles.viewProject}>
            <motion.div>
              <div className={styles.head}>
                <h2>{selectProject.name}</h2>
                <motion.button whileTap={{ scale: 0.9 }} onClick={() => setSelectProject(null)}><img src={xmark} alt="Close modal"/></motion.button>
              </div>
              <p className={styles.description}>{selectProject.description}</p>
              <section className={styles.made}>
                <h3>Realizado con:</h3>
                { selectProject.made.map((icon, index) => <img src={icon} alt={`${icon}`} width={30} key={index}/>) }
              </section>
              <img className={styles.imgProject} src={selectProject.img} alt="project img"/>
              <div className={styles.links}>
                <motion.a whileTap={{ scale: 0.9 }} href={selectProject.repoUrl} target="_blank" rel="noopener noreferrer" title='Codigo'><img src={github} alt={selectProject.name} width={25}/></motion.a>
                <motion.a whileTap={{ scale: 0.9 }} href={selectProject.deployUrl} target="_blank" rel="noopener noreferrer" title='Visitar'><img src={chrome} alt={selectProject.name} width={25}/></motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects