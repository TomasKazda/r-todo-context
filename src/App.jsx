import { useState } from 'react'
import './App.css'
import AddTodo from './components/addtodo'

const initData = {
  deadline: "2023-11-09T13:15",
  priority: 5,
  partlist: ["clutch", "cam"]
}

function App() {
  const [tododata, setTododata] = useState([initData])

  return (
    <>
      <h1>ToDo no. 326.5</h1>
      <AddTodo />
    </>
  )
}

export default App
