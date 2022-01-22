const request = require('request');
const urlName =  "https://api.thecatapi.com/v1/breeds/search?q=";

request(urlName, (error,response, body)=> {
  const data = JSON.parse(body);
  console.log(data.description);
  console.log(typeof data);
  
});


