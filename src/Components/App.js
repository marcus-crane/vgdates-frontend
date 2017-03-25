import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
    componentWillMount() {
        return axios.get('http://api.vgdat.es/month/1')
        .then((res) => {
            this.setState({
                info: res.data
            })
        })
    }
    render() {
        return (
            <div>
                <h1>hi</h1>
            </div>
        );
    }
}

export default App;
