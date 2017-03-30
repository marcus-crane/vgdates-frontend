import React from 'react';
import Layout from './Layout'
import Body from './Body'

const games = [{ title: 'Gravity Rush', releaseDate: 'January 18', image: 'https://imgkk.com/i/plx5.jpg', platforms: ['PS4'] }, {title: 'Yakuza 0', releaseDate: 'January 24', image: 'https://imgkk.com/i/ge5e.jpg', platforms: ['PS4'] }]

const App = () => {
  return (
    <Layout>
      <Body games={games} />
    </Layout>
  );
}

export default App;
