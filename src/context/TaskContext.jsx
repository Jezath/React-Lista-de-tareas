import { createContext, useState, useEffect } from "react"
import { tareas } from "../tareas"

export const TaskContext =  createContext()

export const TaskContextProvider = (props) => {

    const [tasks, setTasks] = useState([]);

    function createTask (task) {
        setTasks([...tasks, {
          id: tasks.length,
          title: task.title,
          description: task.description
        }])
    }

    function deleteTask (taskId) {
        console.log(tasks)
        console.log(taskId)
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    useEffect(() => {
      setTasks(tareas)
    }, [])


    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}>  
            {props.children}
        </TaskContext.Provider>
    )
}