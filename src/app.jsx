import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Main from './main';

function App() {
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   const requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow',
  //   };

  //   fetch(
  //     'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAqd0d5GmSCnsV7hVVRMKmvUWyCj8nZYiQ',
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => setVideos(result.items))
  //     .catch((error) => console.log('error', error));
  // }, []);

  return (
    <div className={styles.app}>
      <Main />
    </div>
  );
}

export default App;
