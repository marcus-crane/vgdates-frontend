import React, { Component } from 'react'
import Month from './Month'
import Game from './Game'
import Loading from './Loading'
import h from '../utils/helpers'

class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: [],
      isLoading: true
    }
  }

  componentDidMount = () => {
    h.fetchGames()
    .then((res) => {
      this.setState({
        games: res.data,
        isLoading: false
      })
      console.log(this.state)
    })
  }

  render() {
    return this.state.isLoading === true
    ? <Loading />
    : <Month month="January">
        {this.state.games.map((game, index) => <Game key={index} title={game.name} releaseDate={game.date} platforms={['Switch']} /> )}
      </Month>
  }
}

export default Body