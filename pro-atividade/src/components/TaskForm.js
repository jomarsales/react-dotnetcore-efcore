import { useState, useEffect } from 'react';

const initialTask = {
    id: 0,
    title: '',
    priority: 0,
    description: '',
};

export default function TaskForm(props) {
    const [task, setTask] = useState(currentTask());

    useEffect(() => {
        if (props.selectedTask.id !== 0) setTask(props.selectedTask);
    }, [props.selectedTask]);

    const inputTextHandler = (e) => {
        const { name, value } = e.target;

        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (props.selectedTask.id !== 0) props.updateTask(task);
        else props.addTask(task);

        setTask(initialTask);
    };

    const handleCancelar = (e) => {
        e.preventDefault();

        props.cancelTask();

        setTask(initialTask);
    };

    function currentTask() {
        if (props.selectedTask.id !== 0) {
            return props.selectedTask;
        } else {
            return initialTask;
        }
    }

    return (
        <>
            <h1>Task {task.id !== 0 ? task.id : ''}</h1>
            <form className='row g-3' onSubmit={handleSubmit}>
                <div className='col-md-6'>
                    <label className='form-label'>Title</label>
                    <input
                        name='title'
                        value={task.title}
                        onChange={inputTextHandler}
                        id='title'
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='col-md-6'>
                    <label className='form-label'>Priority</label>
                    <select
                        name='priority'
                        value={task.priority}
                        onChange={inputTextHandler}
                        id='priority'
                        className='form-select'
                    >
                        <option defaultValue='0'>Select...</option>
                        <option value='1'>Low</option>
                        <option value='2'>Normal</option>
                        <option value='3'>High</option>
                    </select>
                </div>
                <div className='col-md-12'>
                    <label className='form-label'>Description</label>
                    <textarea
                        name='description'
                        value={task.description}
                        onChange={inputTextHandler}
                        id='description'
                        type='text'
                        className='form-control'
                    />
                <hr />
                </div>
                <div className='col-12 mt-0'>
                    {task.id === 0 ? (
                        <button
                            className='btn btn-outline-secondary'
                            type='submit'
                        >
                            <i className='fas fa-plus me-2'></i>
                            Task
                        </button>
                    ) : (
                        <>
                            <button
                                className='btn btn-outline-success me-2'
                                type='submit'
                            >
                                <i className='fas fa-plus me-2'></i>
                                Save
                            </button>
                            <button
                                className='btn btn-outline-warning'
                                onClick={handleCancelar}
                            >
                                <i className='fas fa-plus me-2'></i>
                                Cancel
                            </button>
                        </>
                    )}
                </div>
            </form>
        </>
    );
}