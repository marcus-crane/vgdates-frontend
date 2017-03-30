import React, { Component } from 'react'
import Month from './Month'
import Game from './Game'

class Body extends Component {
  render() {
    const games = [{ title: 'Gravity Rush', releaseDate: 'January 18', image: 'https://imgkk.com/i/plx5.jpg', platforms: ['PS4'] }, {title: 'Yakuza 0', releaseDate: 'January 24', image: 'https://imgkk.com/i/ge5e.jpg', platforms: ['PS4'] }]
    return (
      <Month month="January">
        {games.map((game, index) => <Game key={index} title={game.title} releaseDate={game.releaseDate} image={game.image} platforms={game.platforms} /> )}
      </Month>
    )
  }
}

export default Body