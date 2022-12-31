import { useState, useContext } from "react"
import { TaskContext } from "./context/TaskContext"

export const TaskForm = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const {createTask} = useContext(TaskContext)
   

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description)
        createTask({title, description})

        setTitle('')
        setDescription('')
    }

    return  (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
                <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
                <input 
                    placeholder="Escribe tu tarea" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    autoFocus
                    className="bg-slate-300 px-3 w-full mb-2"
                />
                <textarea 
                    placeholder="Escribe la descripcion de la tarea" 
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="bg-slate-300 px-3 w-full mb-2"
                />
                <button className="bg-red-400 text-white px-3 py-2 rounded-md">Guardar</button>
            </form>
        </div>
    )
}