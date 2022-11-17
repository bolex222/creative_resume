import React from 'react'
// import './App.scss'
import HomePage from './pages/home/HomePage'
import '@/styles/locomotive-scroll.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function App() {
  gsap.registerPlugin(ScrollTrigger)

  return <HomePage />
}

export default App
