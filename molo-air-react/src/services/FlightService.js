import axios from 'axios';

const flightsApiUrl = 'http://localhost:8202/flights';

class SelectFlightService {
  getFlights() {
    axios.get(flightsApiUrl);
  }
}

export default new SelectFlightService();
