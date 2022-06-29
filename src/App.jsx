
import Profile from './picture/profile.png'
import github from './picture/github.png'
import instagram from './picture/instagram.png'
import twitch from './picture/twitch.png'
import youtube from './picture/youtube.png'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
  <div className='container'>
    <Navbar />

    <div className='header'>
      <div>
        <h1>Hola!!! <span className='hand'>👋</span>, yo soy</h1>
        <h1 className='name'>Pablo Gallardo</h1>
        <h2 className='title'>Front-end Developer</h2>
        <button className='cv'>Donwload CV</button>
        <div className='redes'>
          <a href="https://github.com/pablogallardodev" target="blank"><img src={github} alt="Pablo Gallardo" /></a>
          <a href="https://www.youtube.com/channel/UCS-YoU7f8PztGHBd4OD9RSw" target="blank"><img src={youtube} alt="Pablo Gallardo" /></a>
          <a href="https://www.instagram.com/pablogallardo.dev" target="blank"><img src={instagram} alt="Pablo Gallardo" /></a>
          <a href="https://www.twitch.tv/pablogallardodev" target="blank"><img src={twitch} alt="Pablo Gallardo" /></a>
        </div>
      </div>
      <div>
        <img src={Profile} alt="Pablo Gallardo" />
      </div>
    </div>
    
    <div className='about-me'>
      <h1>About me</h1>
      <p>Ingeniero en Sistemas Computacionales 👨‍🎓, apasionado por ser desarrollador, aprender y aplicar nuevas tecnologías. Actualmente soy desarrollador Front-End 💻 🖱 para una consultora. Un hobby es poder compartir mis conocimientos 📹 📺, para que los demás puedan aprender más. Por último, pero no menos importante soy de México. 🌮 🌮</p>
    </div>

    <Footer />
  </div>
  )
}