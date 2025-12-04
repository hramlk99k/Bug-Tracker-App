// AppHeader.js - NEW COMPONENT

import React from 'react';
import styles from './AppHeader.module.css'; 

const AppHeader = ({ searchTerm, setSearchTerm, toggleForm, showForm }) => {
    return (
        <header className={styles.header}>
            <div className={styles.branding}>
                {/* Placeholder for an icon/logo */}
                <span role="img" aria-label="bug" className={styles.logoIcon}>
                    🐛
                </span>
                <h1 className={styles.appTitle}>BugTrackerApp</h1>
            </div>

            <div className={styles.controls}>
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search by Title or Description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchBar}
                />

                {/* Add New Task Button */}
                <button 
                    onClick={toggleForm} 
                    className={styles.addTaskButton}
                >
                    {showForm ? 'Close Form' : '+ Add New Task'}
                </button>
            </div>
        </header>
    );
};

export default AppHeader;