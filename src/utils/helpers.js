import axios from 'axios'

const h = {
  fetchGames: function() {
    return axios.get('https://api.vgdat.es/month/1')
  }
}

export default h