$(document).ready(function(){
    navigator.geolocation.getCurrentPosition(function(position) {
        var query = 'extreme';
        x = position.coords.latitude;
        y = position.coords.longitude;
        $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(' + x + ' , ' + y + ')")&format=json', function (data) {
            $('.jumbotron').html('<h2>' + data.query.results.channel.item.title + '</h2>' + '<p> Temperature: ' + data.query.results.channel.item.condition.temp + '</p>' +
                    '<p> Condition: ' + data.query.results.channel.item.condition.text + '</p>')
            $('.container').show();
            var code = data.query.results.channel.item.condition.code;
            if(code <= 4){
            	query = 'extreme';
            //EXTREME with METAL: spotify:user:spotify:playlist:37i9dQZF1DWXIcbzpLauPS
            } else if((code >=5 && code <= 12) || (code == 35) || (code>=37 && code <=40) || (code == 45) || (code == 47)) {
            	query = 'rain';
            //French cafe lounge: spotify:user:kamdiba:playlist:3x6xRt9FnSbfPbgiO6incZ 
            } else if ((code >= 13 && code <=18) || (code >=41 && code <= 46)) {
            	query = 'snowy';
            // Snow day: spotify:user:daniellitton:playlist:7pe5wA5AeCOOZmbPBQg0zj
            } else if ((code >=19 && code <= 30) || (code == 44)) {
            	query = 'cloudy';
            // Cloudy + traveling in space: spotify:user:diego.delao.granados:playlist:4OacDwTyD9dhRLxYRDD5vx
            } else if ((code >=31 && code <= 34) || (code == 36)) {
            	query = 'sunny';
            // Surf rock sunny: spotify:user:spotify:playlist:37i9dQZF1DWYzpSJHStHHx
            }
            getMood(query);
        });
        
    });
});

function getMood(query) {
    toSend = "mood=" + query;
    xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://clapclap-database.herokuapp.com/moods", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            moodJSON = xhttp.responseText;
            moodData = JSON.parse(moodJSON);
            var link = moodData.uri;
            toPut = '<p><br><iframe src="https://open.spotify.com/embed?uri=' + link + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>';
            $('#t22').html(toPut);
        }
    };
    xhttp.send(toSend);
}








