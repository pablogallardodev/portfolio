import React from 'react'
import Profile from './picture/profile.png'
import github from './picture/github.png'
import instagram from './picture/instagram.png'
import twitch from './picture/twitch.png'
import youtube from './picture/youtube.png'

export default function App() {
  return <>
    <div className='container'>
      <div>
        <h1>Hola!!! 👋, yo soy</h1>
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
  </>
}