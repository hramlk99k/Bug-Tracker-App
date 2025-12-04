// StatusColumn.js
import React from 'react';
import TaskCard from './TaskCard'; // Import the component you just created
import styles from './StatusColumn.module.css'; // For column styling

const StatusColumn = ({ title, tasks, onUpdateStatus, onDeleteTask , allStatuses }) => {
  return (
    // Apply the column styling class
    <div className={styles.column}>
      <h2>{title} ({tasks.length})</h2> 
      
      {/* Use .map() to render a TaskCard for every task in the array */}
      <div className={styles.taskList}>
        {tasks.map(task => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onUpdateStatus={onUpdateStatus}
            onDeleteTask={onDeleteTask} 
            allStatuses={allStatuses}
          />
        ))}
      </div>
    </div>
  );
};

export default StatusColumn;