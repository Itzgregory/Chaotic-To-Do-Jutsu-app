import React from 'react';
import styles from './style/Footer.module.css'; 

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">© {new Date().getFullYear()}; powered by CodesCraft's studios</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;