import { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

function App() {
    const [index, setIndex] = useState(0);
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({ id: 0 });

    useEffect(() => {
        tasks.length <= 0
            ? setIndex(1)
            : setIndex(
                  Math.max.apply(
                      Math,
                      tasks.map((item) => item.id)
                  ) + 1
              );
    }, [tasks]);

    function addTask(cTask) {
        setTasks([...tasks, { ...cTask, id: index }]);
    }

    function cancelTask() {
        setTask({ id: 0 });
    }

    function updateTask(cTask) {
        setTasks(
            tasks.map((item) => (item.id === cTask.id ? cTask : item))
        );
        setTask({ id: 0 });
    }

    function deleteTask(id) {
        const filteredTasks = tasks.filter((cTask) => cTask.id !== id);
        setTasks([...filteredTasks]);
    }

    function getTask(id) {
        const cTask = tasks.filter((task) => task.id === id);
        setTask(cTask[0]);
    }

    return (
        <>
            <TaskForm
                addTask={addTask}
                cancelTask={cancelTask}
                updateTask={updateTask}
                selectedTask={task}
                tasks={tasks}
            />
            <Tasks
                tasks={tasks}
                deleteTask={deleteTask}
                getTask={getTask}
            />
        </>
    );
}

export default App;