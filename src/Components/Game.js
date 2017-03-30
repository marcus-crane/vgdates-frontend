import React from 'react'
import './Game.css'

const Game = (props) => {
  return (
    <div className="column is-narrow is-mobile" key={props.title}>
      <div className="notification is-dark" style={{ backgroundImage: 'url(' + props.image + ')' }}>
        <h5 className="title is-5">{props.title}</h5>
        <h6 className="subtitle is-6">{props.releaseDate}</h6>
        <div className="platforms has-text-centered">
          {props.platforms.map((platform, index) => <span className="tag" key={platform}>{platform}</span> )}
        </div>
      </div>
    </div>
  )
}

export default Game