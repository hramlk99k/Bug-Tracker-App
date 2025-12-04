import styles from './TaskForm.module.css';

import React, { useState } from 'react';
// import styles from './TaskForm.module.css'; // You can add styling here

const TaskForm = ({ onAddTask }) => { 
  // Local state to track all form inputs
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Medium', // Set a default priority
  });

  const handleChange = (e) => {
    // Dynamic handler to update title, description, or priority
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value, 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    // 1. THIS LINE IS UNCOMMENTED AND SENDS DATA UP TO BugTrackerBoard
    onAddTask(formData); 
    
    // 2. Reset the form state after submission
    setFormData({
      title: '',
      description: '',
      priority: 'Medium',
    });
  };

  return (
    // 3. ATTACH THE HANDLER TO THE FORM SUBMISSION EVENT
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Task Title"
        required 
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description (Optional)"
      />
      
      {/* Priority Selector */}
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;