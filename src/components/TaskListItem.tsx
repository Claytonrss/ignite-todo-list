import { Task } from '../types/Taks'
import styles from './TaskListItem.module.css'
import { ReactComponent as TrashIcon } from './../assets/trash-icon.svg'
import { ReactComponent as Check } from './../assets/check-icon.svg'
import { ReactComponent as Uncheck } from './../assets/unCheck-icon.svg'

type TaskListItemProps = {
  task: Task
  removeTask: (id: string) => void
  changeStatusTask: (id: string) => void
}

const TaskListItem = ({
  task,
  removeTask,
  changeStatusTask,
}: TaskListItemProps) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.changeStatusButton}
        onClick={() => changeStatusTask(task.id)}
      >
        {task.isDone ? <Uncheck /> : <Check />}
      </button>

      <p
        onClick={() => changeStatusTask(task.id)}
        className={styles.listItemText}
      >
        <span className={task.isDone ? styles.listItemTextFinished : ''}>
          {task.description}
        </span>
      </p>
      <button
        className={styles.changeStatusButton}
        onClick={() => removeTask(task.id)}
      >
        <TrashIcon />
      </button>
    </div>
  )
}

export default TaskListItem
