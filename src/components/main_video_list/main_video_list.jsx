import React from 'react';
import MainVideoItem from '../main_video_item/main_video_item';
import styles from './main_video_list.module.css';

const MainVideoList = ({ videos }) => {
  console.log(videos);
  return (
    <ul className={styles.videolist}>
      {videos.map((video) => (
        <MainVideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
};

export default MainVideoList;
