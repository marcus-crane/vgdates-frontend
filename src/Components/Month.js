import React from 'react'

const Month = (props) => {
  return (
    <div>
      <h1 className="title">{props.month}</h1>
      <hr />
      <div className="columns is-desktop is-multiline">
        {props.children}
      </div>
    </div>
  )
}

export default Month