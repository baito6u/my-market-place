import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/" className={styles.homeLink}>
        Go to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
