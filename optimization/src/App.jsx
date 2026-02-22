import { useState, memo} from 'react'
import UserList from './components/UserList'
import ExpensiveCalculation from './components/ExpensiveCalculation'
import TodoList from './components/task3'
import './App.css'



function App() {
  return (
    <>
      <UserList /> 
      <ExpensiveCalculation />
      <TodoList />
    </>
  )
}


export default App
