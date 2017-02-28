var axios = require('axios');

const OPEN_WEATHER_MAP_URL= 'http://api.openweathermap.org/data/2.5/find?units=imperial&appid=83ad3d80fac724b8df0ddd684c8c5e00';

//83ad3d80fac724b8df0ddd684c8c5e00

module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            return res.data.list[0].main.temp;
        }, function(res){
            throw new Error(res.data.message);
        });
    }
}