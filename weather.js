$(document).ready(function(){
    navigator.geolocation.getCurrentPosition(function(position) {
        x = position.coords.latitude;
        y = position.coords.longitude;
        $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(' + x + ' , ' + y + ')")&format=json', function (data) {
        $('.jumbotron').html('<h2>' + data.query.results.channel.item.title + '</h2>' + '<p> Temperature: ' + data.query.results.channel.item.condition.temp + '</p>' +
                '<p> Condition: ' + data.query.results.channel.item.condition.text + '</p>')
        $('.container').show();
        console.log(data);
        var code = data.query.results.channel.item.condition.code;
        var query;
        if(code <= 4 || code){
        	query = 'extreme';
        } else if(code <= 13) {
        	query = 'rain';
        } else if (code <= 17) {
        	query = 'christmas';
        } else if (code <= 22 || code == 35 || code == 36) {
        	query = 'global warming';
        } else if (code <= 24) {
        	query = 'cold';
        } else if (code <= 30) {
        	query = 'chill';
        } else if (code <= 34) {
        	query = 'sunny';
        } else if (code <= 39) {
        	query = 'thunderstorm';
        }

        //https://developer.yahoo.com/weather/documentation.html#item
        });
    });
});