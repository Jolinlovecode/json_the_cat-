const request = require('request');
const urlName =  "https://api.thecatapi.com/v1/breeds/search?q=sib";

request(urlName, (error,response, body)=> {
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
  console.log(data[0].description);
});


