import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doc app',
      day: '21.dec2024',
      reminder: true
    },
    {
      id: 2,
      text: 'Car app',
      day: '21.dec2025',
      reminder: true
    },
    {
      id: 3,
      text: 'Job app',
      day: '21.dec2026',
      reminder: false
    }
  ]);

  // Delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  // Toggle reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task => task.id === id ? {...task, reminder: !task.reminder} : task)))
  }

  return (
    <div className="container">
      <Header title="Task tracker" />
     { tasks.length > 0  ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)

     : 'No tasks to Show ' }
    </div>
  );
};

export default App;
