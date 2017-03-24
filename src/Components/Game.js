import React from 'react'
import './Game.css'

const Game = (props) => {
    return (
        <div className="column is-narrow is-mobile">
            <div className="notification is-dark" style={{ backgroundImage: 'url(' + props.image + ')' }}>
                <h5 className="title is-5">{props.title}</h5>
                <h6 className="subtitle is-6">{props.releaseDate}</h6>
                <div className="platforms has-text-centered">
                    <span className="tag">PS4</span>
                    <span className="tag">Xbox One</span>
                </div>
            </div>
        </div>
    )
}

export default Game