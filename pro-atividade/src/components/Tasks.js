import React from 'react';
import Task from './Task';

export default function Tasks(props) {
    return (
        <div className='mt-3'>
            {props.tasks.map((cTask) => (
                <Task
                    key={cTask.id}
                    cTask={cTask}
                    deleteTask={props.deleteTask}
                    getTask={props.getTask}
                />
            ))}
        </div>
    );
}