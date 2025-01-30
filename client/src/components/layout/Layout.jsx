import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../view/headerFooter/Header';
import Footer from '../view/headerFooter/Footer';
import styles from './style/Layout.module.css'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Header />
      </header>
      
      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;