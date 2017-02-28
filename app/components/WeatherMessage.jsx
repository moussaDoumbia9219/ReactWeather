var React = require('react');

var WeatherMessage = React.createClass({
    render:  function(){
        var {temp, location}= this.props;
        return(

                <h3>Its a {temp} In {location}</h3>
        );
    }
});

module.exports = WeatherMessage;