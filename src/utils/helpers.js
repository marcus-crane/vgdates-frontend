import axios from 'axios'

const h = {
  fetchGames: function() {
    return axios.get('http://localhost:3456/api')
  }
}

export default h