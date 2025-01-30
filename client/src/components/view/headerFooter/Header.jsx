import React from 'react';
import styles from './style/Header.module.css'; 

const Header = () => {
  return (
    <>
      <header className={styles.headerTopStrip}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <p className={styles.headerText}>Free Usage</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
