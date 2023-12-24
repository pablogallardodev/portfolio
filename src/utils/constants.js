import react from '../img/icons/react.svg'
import firebase from '../img/icons/firebase.svg'
import next from '../img/icons/next.svg'
import twilio from '../img/icons/twilio.svg'
import js from '../img/icons/js.svg'
import vite from '../img/icons/vite.svg'
import facejoin from '../img/pages/facejoin.svg'
import inventory from '../img/pages/inventory.svg'
import watchingweather from '../img/pages/watchingweather.svg'
import pokedex from '../img/pages/pokedex.svg'
import calculadora from '../img/pages/calculadora.svg'

export const projects = [
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
    name: 'Pokedex',
    description: 'Con fines didacticos se desarrollo este pokédex en donde puedes ver el listado completo de los pokemones existentes, donde estoy utilizando el api oficial de pokemones, además de que puedes seleccionar cualquier pokemon y ver un poco de datos interesantes.',
    deployUrl: 'https://pokedex-lovat-nine.vercel.app/',
    repoUrl: 'https://github.com/pablogallardodev/cursorect/tree/main/02-pokedex',
    img: pokedex,
    made: [vite, js, react]
  },
  {
    id: 3,
    name: 'Calculadora',
    description: 'Esta aplicación tiene la particularidad de ser diseñada para "Mobile Only", tiene un diseño de pantalla de celuar, debido a que por ser una aplicación de pocos componentes se puede adaptar de mejor manera a un espacio más reducido. Cabe destacar que es 100% funcional.',
    deployUrl: 'https://calculadora-peach-kappa.vercel.app/',
    repoUrl: 'https://github.com/pablogallardodev/cursorect/tree/main/03-calculadora',
    img: calculadora,
    made: [vite, js, react]
  },
  {
    id: 4,
    name: 'Inventario',
    description: 'Web app para el control de inventario, en donde puedes logearte con google o github, una vez iniciada la sesión puedes crear, editar o eliminar los productos existentes, así como modificar sus stocks actuales realizando movimientos de entradas o salidas.',
    deployUrl: 'https://inventory-one-liart.vercel.app/',
    repoUrl: 'https://github.com/pablogallardodev/inventory',
    img: inventory,
    made: [js, react, firebase]
  },
  {
    id: 5,
    name: 'Face-join',
    description: 'Google Meet clone, es una aplicacion en la que puedes crear videollamadas y unir a mas personas con tan solo ingresar el nombre de la sala, es un app muy simple de utilizar.',
    deployUrl: 'https://face-join.vercel.app/',
    repoUrl: 'https://github.com/pablogallardodev/face-join',
    img: facejoin,
    made: [js, react, twilio]
  }
]
