import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    return(
      <tr key={name}>
        <td>{name}</td>
      </tr>
    )
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// es6 refactor of state
function mapStateToProps({ weather }) {
  // identical to const weather = state.weather
  return { weather }; // === { weather: weather}
}

export default connect(mapStateToProps)(WeatherList);

// npm i --save react-sparklines@1.6.0