import React from 'react'
import Month from './Month'
import Game from './Game'

const Body = (props) => {
  return (
    <Month month="January">
      {props.games.map((game, index) => <Game key={index} title={game.title} releaseDate={game.releaseDate} image={game.image} platforms={game.platforms} /> )}
    </Month>
  )
}

export default Body