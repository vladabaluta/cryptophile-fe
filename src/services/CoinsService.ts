import axios from 'axios';
const API_URL = 'http://localhost:8000';

class CoinsService {
  getAllCoins() {
    return axios.get(`${API_URL}/api/get-all-coins`);
  }
}

export default new CoinsService();
