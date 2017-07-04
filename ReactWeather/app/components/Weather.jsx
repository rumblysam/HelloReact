var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            location: "Miami",
            temp: 88
        }
    },
    handleSearch: function (location) {
        alert(location);
        var that = this;

        openWeatherMap.getTemp(location).then(function (temp) {
            this.setState({
                location: location,
                temp: temp
            });
        }, function (errorMessage) {
            alert(errorMessage);
        });
    },
    render: function() {
        var {temp, location} = this.state;
        return (
            <div>
                <h3>Get Weather</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage location={location} temp={temp} />
            </div>
        );
    }
});
module.exports = Weather;