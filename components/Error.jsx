import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.css'; // Import the CSS module

const Error = () => {
    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.errorTitle}>404</h1>
            <p className={styles.errorText}>Oops! The Country you're looking for doesn't exist.</p>
            <img className={styles.errorImage} src="https://via.placeholder.com/200?text=404s" alt="404" /> {/* Placeholder image URL */}
            <Link to="/" className={styles.homeButton}>Go to Homepage</Link>
        </div>
    );
}

export default Error;

