import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import TaskList from './components/TaskList'
import { Task } from './types/Taks'
import { tasksData } from './data/tasks'

function App() {
  const [tasks, setTasks] = useState<Task[]>(tasksData)

  return (
    <>
      <Header />
      <div className="app">
        <Form setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  )
}

export default App
