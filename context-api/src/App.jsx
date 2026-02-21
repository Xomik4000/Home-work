import { useState } from 'react'
import AuthContext from './context/AuthContext'
import AuthButton from './components/AuthButton';
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <AuthButton />
      {isLoggedIn && <h1>Вы авторизованы!</h1>}
    </AuthContext.Provider>
  )
}

export default App
