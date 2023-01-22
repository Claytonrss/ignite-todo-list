import { Task } from '../types/Taks'
import { v4 as uuidv4 } from 'uuid'

export const tasksData: Task[] = [
  {
    id: uuidv4(),
    description: 'Comprar leite',
    isDone: false,
  },
  {
    id: uuidv4(),
    description: 'Lavar roupa',
    isDone: true,
  },
  {
    id: uuidv4(),
    description: 'Pagar contas',
    isDone: false,
  },
  {
    id: uuidv4(),
    description: 'Ir ao supermercado',
    isDone: false,
  },
  {
    id: uuidv4(),
    description: 'Fazer exercício',
    isDone: true,
  },
]
