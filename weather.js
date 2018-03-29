$(document).ready(function(){
    navigator.geolocation.getCurrentPosition(function(position) {
        x = position.coords.latitude;
        y = position.coords.longitude;
        $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(' + x + ' , ' + y + ')")&format=json', function (data) {

        $('.jumbotron').html('<h2>' + data.query.results.channel.item.title + '</h2>' +
                data.query.results.channel.item.description)
        $('.container').show();
        });
    });
});