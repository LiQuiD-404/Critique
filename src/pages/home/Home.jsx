import React from 'react'
import './style.scss';
import Hero from './Hero/Hero';
import Trending from './Trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';

const Home = () => {
  return (
    <div>
      <Hero />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home
