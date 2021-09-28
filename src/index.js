import './sass/main.scss'

import app from './Components/App.js'
import banner from './Components/Banner.js'
import header from './Components/Header.js'
import main from './Components/Main.js'
import services from './Components/Services.js'
import about from './Components/About.js'


import cards from './assets/json/cards.json'

localStorage.setItem('cards', JSON.stringify(cards))
