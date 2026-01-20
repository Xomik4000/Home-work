import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function UserCard({name, age}) {
  return <p>Привет, меня зовут {name}, мне {age} лет</p>
}

function App() { 
  return (
    <div>
      <UserCard name='Александр' age={25} />
      <UserCard name='Анна' age={27} />
      <UserCard name='Настя' age={18} />
    </div>
  )
}



export default App
