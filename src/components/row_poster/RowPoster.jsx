import React from 'react';
import styles from './RowPoster.module.css';

const RowPoster = ({ video }) => {
  return (
    <li className={styles.video}>
      <figure className={styles.thumbWrap}>
        <img
          className={styles.thumbnail}
          src={video.snippet.thumbnails.standard.url}
          alt=""
        />
      </figure>
      <div className={styles.info}>
        <p className={styles.title}>{video.snippet.title}</p>
        <p className={styles.channel}>{video.snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default RowPoster;
