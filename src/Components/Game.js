import React from 'react'

const Game = (props) => {
    return (
        <div className="column is-narrow">
            <div className="notification is-dark">
                <h5 className="title is-5">{props.title}</h5>
                <h6 className="subtitle is-6">{props.releaseDate}</h6>
                <span className="tag">PS4</span>
                <span className="tag">Xbox One</span>
            </div>
        </div>
    )
}

export default Game