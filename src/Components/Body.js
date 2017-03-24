import React from 'react'
import Game from './Game.js'

const Body = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">January</h1>
                <hr />
                <div className="columns is-desktop is-multiline">
                    <Game title="Gravity Rush" releaseDate="January 18" />
                    <Game title="Yakuza 0" releaseDate="January 24" />
                </div>
                <h1 className="title">February</h1>
                <hr />
                <div className="columns is-desktop is-multiline">
                    <Game title="Gravity Rush" releaseDate="January 18" />
                    <Game title="Yakuza 0" releaseDate="January 24" />
                </div>
            </div>
        </section>
    )
}

export default Body