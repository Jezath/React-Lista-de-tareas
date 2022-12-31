import { TaskList } from "./TaskList"
import { TaskForm } from "./TaskForm"

export const App = () => {

  return (
    <main className="bg-zinc-600 min-h-screen">
      <div className="container mx-auto pt-6"> 
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}
