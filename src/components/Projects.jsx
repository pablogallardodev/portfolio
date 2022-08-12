import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/Project.module.css'

const Projects = () => {

  const projects = [
    {
      id: 1,
      name: 'Watching-weather',
      description: 'Aplicacion mobile onli, en la cuál podemos tener información sobre el clima de una locación en base a nuestra ubicación o podemos buscar cualquiera, para tener acceso a la misma hay que primero iniciar sesión con una cuenta de Github.',
      deployUrl: 'https://watching-weather.vercel.app/',
      repoUrl: 'https://github.com/pablogallardodev/watching-weather'
    },
    {
      id: 2,
      name: 'Inventory',
      description: 'Web app para el control de inventario, en donde puedes logearte con google o github, una vez iniciada la sesión puedes crear, editar o eliminar los productos existentes, así como modificar sus stocks actuales realizando movimientos de entradas o salidas.',
      deployUrl: 'https://inventory-one-liart.vercel.app/',
      repoUrl: 'https://github.com/pablogallardodev/inventory'
    },
    {
      id: 3,
      name: 'Face-join',
      description: 'Google Meet clone, es una aplicacion en la que puedes crear videollamadas y unir a mas personas con el simple nombre de la sala, es un app muy simple de utilizar.',
      deployUrl: 'https://face-join.vercel.app/',
      repoUrl: 'https://github.com/pablogallardodev/face-join'
    }
  ]
  const [selectProject, setSelectProject] = useState(null)

  return (
    <div className='containerSection app-center' id='projects'>
      <h1 className='titleSection'>Projects</h1>
      <div className={styles.projects}>
        {
          projects.map(project => (
            <motion.div whileHover={{scale: 1.05}} key={project.id} layoutId={project.id} className={styles.project} onClick={() => setSelectProject(project)}>
              <h2>{project.name}</h2>
              <img src="https://via.placeholder.com/350x150" alt="project img" />
              <div className={styles.links}>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">CODIGO</a>
                <a href={project.deployUrl} target="_blank" rel="noopener noreferrer">VISITAR</a>
              </div>
            </motion.div>
          ))
        }
      </div>

      <AnimatePresence>
        {selectProject && (
          <motion.div animate={{ opacity: [0,1] }} layoutId={selectProject.id} className={styles.viewProject}>
            <motion.div>
              <h2>{selectProject.name}</h2>
              <p>{selectProject.description}</p>
              <motion.button onClick={() => setSelectProject(null)} style={{ width: 50, height: 25 }}/>
              <div className={styles.links}>
                <a href={selectProject.repoUrl} target="_blank" rel="noopener noreferrer">CODIGO</a>
                <a href={selectProject.deployUrl} target="_blank" rel="noopener noreferrer">VISITAR</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects