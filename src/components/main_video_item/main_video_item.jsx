import React from 'react';
import styles from './main_video_item.module.css';

const MainVideoItem = ({ video }) => <h1>{video.snippet.title}</h1>;

export default MainVideoItem;
