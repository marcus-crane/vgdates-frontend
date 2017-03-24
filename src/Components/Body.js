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
                    <Game title="Dragon Quest VIII: Journey of the Cursed King" releaseDate="January 21" image="https://imgkk.com/i/plx5.jpg" />
                    <Game title="Kingdom Hearts HD 2.8 Final Chapter Prologue" releaseDate="January 24" />
                    <Game title="Resident Evil 7: Biohazard" releaseDate="January 24" />
                    <Game title="Yakuza 0" releaseDate="January 24" />
                    <Game title="Digimon World: Next Order" releaseDate="January 27" />
                    <Game title="Tales of Berseria" releaseDate="January 27" />
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