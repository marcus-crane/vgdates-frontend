import React, { Component } from 'react'
import Game from './Game.js'

class Body extends Component {
    render() {
        const games = [{ title: 'Gravity Rush', releaseDate: 'January 18', image: 'https://imgkk.com/i/plx5.jpg', platforms: ['PS4'] }, {title: 'Yakuza 0', releaseDate: 'January 24', image: 'https://imgkk.com/i/ge5e.jpg', platforms: ['PS4'] }]
        return (
            <section className="section">
                <div className="container">
                    <h1 className="title">January</h1>
                    <hr />
                    <div className="columns is-desktop is-multiline">
                        {games.map((game, index) => <Game key={index} title={game.title} releaseDate={game.releaseDate} image={game.image} platforms={game.platforms} /> )}
                    </div>
                </div>
            </section>
        )
    }
}

export default Body