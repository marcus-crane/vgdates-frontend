import React, { Component } from 'react'
import Game from './Game.js'

class Body extends Component {
    render() {
        const games = [{ title: 'Gravity Rush', releaseDate: 'January 18', platforms: ['PS4'] }, {title: 'Yakuza 0', releaseDate: 'January 24', platforms: ['PS4', 'Switch'] }]
        return (
            <section className="section">
                <div className="container">
                    <h1 className="title">January</h1>
                    <hr />
                    <div className="columns is-desktop is-multiline">
                        {games.map((game) => <Game title={game.title} releaseDate={game.releaseDate} platforms={game.platforms} /> )}
                    </div>
                </div>
            </section>
        )
    }
}

export default Body