var axios = require("axios");

const OPEN_WEATHER_MAP_URL = 'api.openweathermap.org/data/2.5/weather?appid=515d734e2ab67583f8ae1f138f7984ca&units=imperial';

// 515d734e2ab67583f8ae1f138f7984ca

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
};