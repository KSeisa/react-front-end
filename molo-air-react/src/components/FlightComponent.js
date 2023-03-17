import React from 'react';
import SelectFlightService from '../services/FlightService';

class SelectFlightComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
    };
  }

  //Lifecycle Method - called immediately after component is mounted
  componentDidMount() {
    SelectFlightService.getFlights().then(response => {
      this.setState({ flights: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Flights</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Flight Number</td>
              <td>Origin</td>
              <td>Destination</td>
              <td>Departure Time</td>
              <td>Arrival Time</td>
              <td>Seat Cost</td>
            </tr>
          </thead>
          <tbody>
            {this.state.flights.map(flight => (
              <tr key={flight.id}>
                <td> {flight.flightNumber} </td>
                <td> {flight.origin} </td>
                <td> {flight.destination} </td>
                <td> {flight.departureTime} </td>
                <td> {flight.arrivalTime} </td>
                <td> {flight.seatCost} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SelectFlightComponent;
