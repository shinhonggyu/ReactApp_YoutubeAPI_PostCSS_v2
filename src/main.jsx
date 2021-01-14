import React from 'react';
import MainSearchBar from './components/main_search_bar/main_search_bar';
import styles from './main.module.css';
import Row from './Row';

const Main = () => {
  return (
    <div className={styles.main}>
      <MainSearchBar />
      <Row title="Youtube Top25" />
    </div>
  );
};

export default Main;
