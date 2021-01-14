import React, { useEffect, useState } from 'react';
import RowPoster from './components/row_poster/RowPoster';
import styles from './Row.module.css';

const Row = ({ title }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAqd0d5GmSCnsV7hVVRMKmvUWyCj8nZYiQ'
      );
      const data = await response.json();
      setVideos(data.items);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.row}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.row__posters}>
        {videos.map((video) => (
          <RowPoster video={video} key={video.id} />
        ))}
      </ul>
    </div>
  );
};

export default Row;
