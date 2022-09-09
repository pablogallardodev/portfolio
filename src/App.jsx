import './app.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Videos from './components/Videos'
import Skills from './components/Skills'

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Videos />
      <Footer />
    </>
  )
}