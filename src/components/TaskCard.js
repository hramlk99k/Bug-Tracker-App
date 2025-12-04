// TaskCard.js - FINAL CODE
import React from 'react';
import styles from './TaskCard.module.css';

const TaskCard = ({ task, onDeleteTask, onUpdateStatus, allStatuses }) => { 
    // Destructure all needed props and task details
    const { id, title, priority, status } = task;

    // 1. DYNAMIC STATUS CALCULATION
    // Find the current status object's index in the full status array
    const currentStatusIndex = allStatuses.findIndex(
        s => s.key === status
    );

    // Calculate the keys for the next and previous status in the flow
    const nextStatusKey = allStatuses[currentStatusIndex + 1]?.key;
    const prevStatusKey = allStatuses[currentStatusIndex - 1]?.key;

    // 2. HANDLERS
    const handleDelete = () => {
        onDeleteTask(id); 
    };

    const handleMoveForward = () => {
        if (nextStatusKey) {
            onUpdateStatus(id, nextStatusKey);
        }
    };

    const handleMoveBackward = () => {
        if (prevStatusKey) {
            onUpdateStatus(id, prevStatusKey);
        }
    };

    // Helper to get the title for the button text
    const getStatusTitle = (key) => allStatuses.find(s => s.key === key)?.title || '';

    return (
        <div className={styles.cardContainer}>
            <div className={styles.header}>
                <h3 className={styles.taskId}>{id}</h3>
                <span className={`${styles.priorityTag} ${styles[priority.toLowerCase()]}`}>{priority}</span>
            </div>
            <p className={styles.taskTitle}>{title}</p>
            
            <div className={styles.buttonGroup}>
                {/* 3. MOVE BACKWARD BUTTON (Visible unless status is 'to-do') */}
                {prevStatusKey && (
                    <button onClick={handleMoveBackward} className={styles.moveButton}>
                        &larr; {getStatusTitle(prevStatusKey)}
                    </button>
                )}
                
                {/* 4. MOVE FORWARD BUTTON (Visible unless status is 'done') */}
                {nextStatusKey && (
                    <button onClick={handleMoveForward} className={styles.moveButton}>
                        {getStatusTitle(nextStatusKey)} &rarr;
                    </button>
                )}
                
                <button onClick={handleDelete} className={styles.deleteButton}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskCard;