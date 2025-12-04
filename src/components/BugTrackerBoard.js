// BugTrackerBoard.js - FINAL UPDATED VERSION

import React, { useState } from 'react';
import StatusColumn from './StatusColumn'; 
import styles from './Board.module.css'; 
import TaskForm from './TaskForm';
import AppHeader from './AppHeader'; // New Header component

// 1. Initial Data Structure (Ensuring description is present for search logic)
const initialTasks = [
    { id: 'BUG-001', title: 'Authentication Flow Error', description: 'API returns 401 on login. Check JWT validation.', status: 'to-do', priority: 'High', assignedTo: 'Jane', createdAt: Date.now() },
    { id: 'FEA-002', title: 'Implement Dark Mode Toggle', description: 'Add a switch in the header for theme change.', status: 'in-progress', priority: 'Medium', assignedTo: 'John', createdAt: Date.now() - 3600000 },
    { id: 'OPT-003', title: 'Optimize Image Loading', description: 'Reduce size of JPEG assets in the carousel.', status: 'done', priority: 'Low', assignedTo: 'John', createdAt: Date.now() - 7200000 },
];

const BugTrackerBoard = () => {
    const [tasks, setTasks] = useState(initialTasks);
    // NEW STATE: Manage form visibility (default: false)
    const [showForm, setShowForm] = useState(false); 
    // NEW STATE: Manage search input value
    const [searchTerm, setSearchTerm] = useState(''); 

    // CRUD: Function to UPDATE a task's status
    const updateTaskStatus = (taskId, newStatus) => {
        setTasks(prevTasks =>
            prevTasks.map(task => {
                if (task.id === taskId) {
                    return { ...task, status: newStatus };
                }
                return task;
            })
        );
    };

    // CRUD: Function to DELETE a task
    const deleteTask = (taskId) => {
        setTasks(prevTasks =>
            prevTasks.filter(task => task.id !== taskId) 
        );
    };

    // CRUD: Function to ADD a task
    const onAddTask = (newTaskData) => {
        const newTask = {
            id: `TASK-${Date.now()}`, 
            ...newTaskData, 
            status: 'to-do', 
            createdAt: Date.now(),
        };

        setTasks(prevTasks => [
            newTask, 
            ...prevTasks 
        ]);
        // Hide the form after successfully adding the task
        setShowForm(false); 
    };

    // Toggle function passed to the header button
    const toggleForm = () => {
        setShowForm(prev => !prev);
    };

    const statusList = [
        { key: 'to-do', title: 'TO DO' }, 
        { key: 'in-progress', title: 'IN PROGRESS' }, 
        { key: 'done', title: 'DONE' }
    ];

    // NEW LOGIC: Filter tasks by search term (Title or Description)
    const filteredTasks = tasks.filter(task => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        if (lowerSearchTerm === '') return true; // Show all if search is empty

        // Check if the search term is found in either the title or the description
        const matchesTitle = task.title.toLowerCase().includes(lowerSearchTerm);
        const matchesDesc = task.description.toLowerCase().includes(lowerSearchTerm);

        return matchesTitle || matchesDesc;
    });


    return (
        <div className={styles.boardWrapper}>
            {/* NEW HEADER COMPONENT: Passes state and toggle function */}
            <AppHeader 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                toggleForm={toggleForm} 
                showForm={showForm}
            />

            {/* CONDITIONAL TASK FORM: Only visible when showForm is true */}
            {showForm && <TaskForm onAddTask={onAddTask} />}

            <div className={styles.columnsContainer}>
                {statusList.map(status => (
                    <StatusColumn 
                        key={status.key} 
                        title={status.title}
                        // Pass the search-filtered array to the columns
                        tasks={filteredTasks.filter(task => task.status === status.key)}
                        allStatuses={statusList}
                        onUpdateStatus={updateTaskStatus}
                        onDeleteTask={deleteTask}
                    />
                ))}
            </div>
        </div>
    );
};

export default BugTrackerBoard;