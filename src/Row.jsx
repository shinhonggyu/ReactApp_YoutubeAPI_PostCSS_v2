import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import RowPoster from './components/row_poster/RowPoster';
import styles from './Row.module.css';

const Row = ({ title }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState('');

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

  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (video) => {
    if (selectedVideo) {
      setSelectedVideo('');
    } else {
      setSelectedVideo(video.id);
    }
  };

  return (
    <div className={styles.row}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.row__posters}>
        {videos.map((video) => (
          <RowPoster video={video} key={video.id} handleClick={handleClick} />
        ))}
      </ul>
      {selectedVideo && <YouTube videoId={selectedVideo} opts={opts} />}
    </div>
  );
};

export default Row;
