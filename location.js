var request = require('request');
var url = 'http://ipinfo.io';

function getLocation(){
	var data ;
	request({
		url:url,
		json:true
	},function(error, response, body){
		if(error){
			console.log('something terrible happened');
		}else{
			
			console.log('city is ' + body.loc);
			data = body;
		}
	})
	
	return data;
};

module.exports = {
	getLocation:getLocation
}
