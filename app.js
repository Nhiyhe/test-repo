var url = 'http://api.openweathermap.org/data/2.5/weather?q=Nigeria,ng';
//var url = 'http://ipinfo.io';
var request = require('request');
var location = require('./location');

request({url:url, json:true},function(error, response, body){
	if(error){
		throw error;
	}else{
		//console.log(JSON.stringify(body, null, 4));
		//console.log(JSON.stringify(body.main.temp, null, 4));
		//console.log(JSON.stringify(body.name, null, 4));
		//console.log('City is ' + body.city);
	}
});
location.getLocation();
 var locate = location.getLocation();
 console.log(locate);
 console.log('Your City is ' + locate.city + ' ' + locate.country);

 

