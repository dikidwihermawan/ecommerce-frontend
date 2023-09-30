import React, { useState } from 'react';

function Testing() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [edit, setEdit] = useState(false);
    const [dataEdit, setDataEdit] = useState([]);

    const handleAddTask = () => {
        setTasks((prevTask) => [
            ...prevTask,
            {
                id: Math.floor(Math.random(8) + Date.now()),
                body: task,
                completed: false,
            },
        ]);
        setTask('');
    };
    console.log(tasks);

    const editTask = (task) => {
        setTask(task.body);
        setEdit(true);
        setDataEdit(task);
    };

    const handleCompleteTask = (id) => {
        let updateTask = tasks.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    completed: !task.completed,
                };
            }
            return task;
        });

        setTasks(updateTask);
    };

    const handleEditTask = () => {
        let updateTask = tasks.map((prevTask) => {
            if (dataEdit.id === prevTask.id) {
                return {
                    ...prevTask,
                    body: task,
                };
            }
            return prevTask;
        });

        setTasks(updateTask);
        setTask('');
        setEdit(false);
    };
    const handleDeleteTask = (id) => {
        const removeTask = tasks.filter((task) => task.id !== id);
        setTasks(removeTask);
    };

    return (
        <div className='grid place-content-center min-h-screen'>
            <div className='flex space-x-4'>
                <input
                    onChange={(e) => {
                        setTask(e.target.value);
                    }}
                    value={task}
                    className='px-4 py-2 w-96 rounded border border-blue-600 focus:outline-none focus:ring focus:ring-pink-600'
                />
                {edit ? (
                    <button onClick={handleEditTask} className='px-4 py-2 border-blue-600 bg-black text-white rounded'>
                        Edit Task
                    </button>
                ) : (
                    <button onClick={handleAddTask} className='px-4 py-2 border-blue-600 bg-black text-white rounded'>
                        Add Task
                    </button>
                )}
            </div>

            {tasks.length > 0 ? (
                <ul className='py-4 space-y-2'>
                    {tasks.map((task) => (
                        <li className='flex items-center space-x-24 justify-between' key={task.id}>
                            <span>
                                {task.body} {task.completed ? 'Completed' : 'Incompleted'}
                            </span>
                            <div className='flex items-center space-x-2' justif>
                                <button
                                    onClick={() => {
                                        editTask(task);
                                    }}
                                    className='px-2 py-1 bg-gray-600 text-white rounded text-sm'>
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        handleCompleteTask(task.id);
                                    }}
                                    className='px-2 py-1 bg-gray-600 text-white rounded text-sm'>
                                    Completed
                                </button>
                                <button
                                    onClick={() => {
                                        handleDeleteTask(task.id);
                                    }}
                                    className='px-2 py-1 bg-gray-600 text-white rounded text-sm'>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                ''
            )}
        </div>
    );
}

export default Testing;
