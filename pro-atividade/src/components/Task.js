import React from 'react';

export default function Task(props) {
    function priorityLabel(param) {
        switch (param) {
            case '1':
                return 'Low';
            case '2':
                return 'Normal';
            case '3':
                return 'High';
            default:
                return 'ND';
        }
    }

    function priorityStyle(param, icon) {
        switch (param) {
            case '1':
                return icon ? 'smile' : 'success';
            case '2':
                return icon ? 'meh' : 'dark';
            case '3':
                return icon ? 'frown' : 'warning';
            default:
                return 'ND';
        }
    }

    return (
        <div
            className={
                'card mb-2 shadow-sm border-' + priorityStyle(props.cTask.priority)
            }
        >
            <div className='card-body'>
                <div className='d-flex justify-content-between'>
                    <h5 className='card-title'>
                        <span className='badge bg-secondary me-1'>
                            {props.cTask.id}
                        </span>
                        - {props.cTask.title}
                    </h5>
                    <h6>
                        priority:
                        <span
                            className={
                                'ms-1 text-' + priorityStyle(props.cTask.priority)
                            }
                        >
                            <i
                                className={
                                    'me-1 far fa-' +
                                    priorityStyle(props.cTask.priority, true)
                                }
                            ></i>
                            {priorityLabel(props.cTask.priority)}
                        </span>
                    </h6>
                </div>
                <p className='card-text'>{props.cTask.description}</p>
                <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                    <button 
                        className='btn btn-sm btn-outline-primary me-2'
                        onClick={() => props.getTask(props.cTask.id)}
                    >
                        <i className='fas fa-pen me-2'></i>
                        Edit
                    </button>
                    <button
                        className='btn btn-sm btn-outline-danger'
                        onClick={() => props.deleteTask(props.cTask.id)}
                    >
                        <i className='fas fa-trash me-2'></i>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}