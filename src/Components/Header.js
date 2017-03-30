import React from 'react'

const Header = () => {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item is-brand">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Placeholder" />
          </a>
        </div>

        <div className="nav-right nav-menu">
          <a className="nav-item">
            Home
          </a>
          <a className="nav-item">
            API
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Header