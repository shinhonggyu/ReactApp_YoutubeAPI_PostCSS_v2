import React from 'react';
import MainSearchBar from './components/main_search_bar/main_search_bar';
import MainVideoList from './components/main_video_list/main_video_list';
import styles from './main.module.css';

const Main = ({ videos }) => {
  return (
    <div className={styles.main}>
      <MainSearchBar />
      <MainVideoList videos={videos} />
    </div>
  );
};

export default Main;
