import React from 'react'
import Header from './Header.js'

const Layout = (props) => {
  return (
    <div>
      <Header />
      <section className="section">
        <div className="container">
          {props.children}
        </div>
      </section>
    </div>
  )
}

export default Layout