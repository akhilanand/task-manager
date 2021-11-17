import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { AddTask } from "./AddTask";
import moment from "moment";
import { useState } from "react"

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id : 1,
        name : 'Add Products',
        day : 'Feb 5 2021'
    },
    {
        id : 2,
        name : 'Edit Products',
        day : 'Apr 5 2021'
    },
    {
        id : 3,
        name : 'Delete Category',
        day : 'Mar 5 2021'
    }]
  )


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const addTask = (task) => {
    task.day = moment().format("MMM DD YYYY")
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id,...task}
    setTasks([...tasks, newTask])

  }

  return (
    <div className="container">
      <Header title='Task Manager' />
      <AddTask onAdd={addTask}/>
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No task added!'}
    </div>
  );
}

export default App;
