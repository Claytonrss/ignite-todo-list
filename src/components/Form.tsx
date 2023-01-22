import { Dispatch, KeyboardEvent, SetStateAction, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Task } from '../types/Taks'
import { ReactComponent as PlusIcon } from './../assets/plus-icon.svg'
import styles from './Form.module.css'

type FormProps = {
  setTasks: Dispatch<SetStateAction<Task[]>>
}

const Form = ({ setTasks }: FormProps) => {
  const [newTask, setNewTask] = useState('')

  function handleAddTask() {
    if (newTask.trim() === '') return
    setTasks(tasks => {
      return [
        ...tasks,
        {
          id: uuidv4(),
          description: newTask,
          isDone: false,
        },
      ]
    })
    setNewTask('')
  }

  function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleAddTask()
    }
  }

  return (
    <div className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={event => setNewTask(event.currentTarget.value)}
        onKeyUp={handleKeyPress}
      />
      <button onClick={handleAddTask}>
        <span>Criar</span> <PlusIcon />{' '}
      </button>
    </div>
  )
}

export default Form
