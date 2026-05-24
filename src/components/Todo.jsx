import { Trash } from 'lucide-react'
import React, { useState } from 'react'

function Todo() {
    // const [todos, setTodos] = useState([])
    const todos = [
        { "id": 1, "task": "Buy groceries", "completed": false, "priority": "High", "deleteIcon": <Trash /> },
        { "id": 2, "task": "Finish report", "completed": true, "priority": "Medium", "deleteIcon": <Trash /> },
        { "id": 3, "task": "Call Mom", "completed": true, "priority": "High", "deleteIcon": <Trash /> },
        { "id": 4, "task": "Water plants", "completed": false, "priority": "Medium", "deleteIcon": <Trash /> },
        { "id": 5, "task": "Schedule dentist", "completed": false, "priority": "Medium", "deleteIcon": <Trash /> },
        { "id": 6, "task": "Read 20 pages", "completed": false, "priority": "Low", "deleteIcon": <Trash /> },
        { "id": 7, "task": "Workout", "completed": true, "priority": "Low", "deleteIcon": <Trash /> },
        { "id": 8, "task": "Clean kitchen", "completed": true, "priority": "Low", "deleteIcon": <Trash /> },
        { "id": 9, "task": "Pay electric bill", "completed": true, "priority": "Low", "deleteIcon": <Trash /> },
        { "id": 10, "task": "Update resume", "completed": false, "priority": "High", "deleteIcon": <Trash /> },
        { "id": 11, "task": "Email team", "completed": true, "priority": "Medium", "deleteIcon": <Trash /> },
        { "id": 12, "task": "Walk the dog", "completed": false, "priority": "High", "deleteIcon": <Trash /> },
        { "id": 13, "task": "Prep lunch", "completed": false, "priority": "Medium", "deleteIcon": <Trash /> },
        { "id": 14, "task": "Research API", "completed": true, "priority": "High", "deleteIcon": <Trash /> },
        { "id": 15, "task": "Fix CSS bug", "completed": true, "priority": "Medium", "deleteIcon": <Trash /> },
        { "id": 16, "task": "Journaling", "completed": false, "priority": "High", "deleteIcon": <Trash /> },
        { "id": 17, "task": "Listen to podcast", "completed": false, "priority": "High", "deleteIcon": <Trash /> },
        { "id": 18, "task": "Organize desk", "completed": false, "priority": "Low", "deleteIcon": <Trash /> },
        { "id": 19, "task": "Check mail", "completed": true, "priority": "High", "deleteIcon": <Trash /> },
        { "id": 20, "task": "Meditation", "completed": false, "priority": "Medium", "deleteIcon": <Trash /> },
        { "id": 20, "task": "Meditation", "completed": false, "priority": "Medium", "deleteIcon": <Trash /> },
        { "id": 20, "task": "Meditation", "completed": false, "priority": "Medium", "deleteIcon": <Trash /> },
        { "id": 20, "task": "Meditation", "completed": false, "priority": "Medium", "deleteIcon": <Trash /> },
    ]

    return (
        <div className='relative z-10 h-150 w-85 mt-20 p-5 flex flex-col gap-2 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border-2 border-neutral-100 dark:border-neutral-800'>
            <input type="text" placeholder='Enter todo' className='border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-black dark:text-white rounded-lg p-2' />
            <div className='h-full w-full rounded-lg border border-neutral-300 dark:border-neutral-800 overflow-scroll sm:no-scrollbar'>
                {todos.map((item, idx) => {
                    return (
                        <div className='flex justify-between items-center p-2 bg-neutral-100 dark:bg-black'>
                            <li className='dark:text-white' key={idx}>{item.task}</li>
                            <button className='bg-red-500 p-1 rounded-md text-white' key={idx}>{item.deleteIcon}</button>
                        </div>
                    )
                })}
            </div>
            <button className='text-white dark:text-black bg-black dark:bg-white py-3 rounded-lg font-semibold'>Add Todo</button>
        </div>
    )
}

export default Todo