import React from 'react';
import './Home.styles.css';
import mockedData from './youtube-videos-mock.json';
import VideoList from '../../components/VideoList';

const {items} = mockedData;

function HomePage() {
  return <VideoList items={items}/>;
}

export default HomePage;
