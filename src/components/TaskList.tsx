import { Dispatch, SetStateAction } from 'react'
import { Task } from '../types/Taks'
import styles from './TaskList.module.css'
import TaskListItem from './TaskListItem'

type TaskListProps = {
  tasks: Task[]
  setTasks: Dispatch<SetStateAction<Task[]>>
}

const TaskList = ({ tasks, setTasks }: TaskListProps) => {
  function removeTask(id: string) {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }

  function changeStatusTask(id: string) {
    const task = tasks.find(task => task.id === id)
    if (!task) return
    const otherTasks = tasks.filter(task => task.id !== id)
    setTasks([...otherTasks, { ...task, isDone: !task.isDone }])
  }

  function sortTasksByIsDone(tasks: Task[]) {
    return tasks.sort((a, b) => (a.isDone ? 1 : 0) - (b.isDone ? 1 : 0))
  }

  return (
    <div className={styles.containerList}>
      <div className={styles.headerList}>
        <h2 className={styles.headerListTextContainer}>
          <span className={`${styles.headerListText} ${styles.createdItems}`}>
            Criadas
          </span>
          <span className={styles.quantityItems}>{tasks.length}</span>
        </h2>
        <h2 className={styles.headerListTextContainer}>
          <span className={`${styles.headerListText} ${styles.finishedItems}`}>
            Concluídas
          </span>
          <span className={styles.quantityItems}>
            {tasks.filter(task => task.isDone).length} de {tasks.length}
          </span>
        </h2>
      </div>
      <div>
        {sortTasksByIsDone(tasks).map(task => (
          <TaskListItem
            key={task.id}
            task={task}
            removeTask={removeTask}
            changeStatusTask={changeStatusTask}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskList
