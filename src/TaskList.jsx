import { TaskCard } from "./TaskCard"
import { useContext } from "react"
import { TaskContext } from "./context/TaskContext"

export const TaskList = () => {

    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1 className="text-white text-4xl font-bold text-center">No hay tareas</h1>
    }
    
    return (
        <div className="grid grid-cols-3 gap-4 m-5">
           {tasks.map((task) => (
                <TaskCard key={task.id} task={task}/>
           ))}
        </div>
    )
}

