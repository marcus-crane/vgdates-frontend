import React, { Component } from 'react';
import Body from './Body'
import Header from './Header'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
}

export default App;
