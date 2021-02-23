const request = require("request");

const forecast = (longitude, latitude, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=4caeae61f84ca623f1ecfe4635980764&query=${longitude},${latitude}&units=m`;

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback("Unable to connect to weather service!", undefined);
		} else if (body.error) {
			callback("Unable to find location. Try another search!", undefined);
		} else {
			callback(undefined, {
				forecast: `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degress out. It feels like ${body.current.feelslike} degress out. Current humidity is ${body.current.humidity}%`,
			});
		}
	});
};

module.exports = forecast;
