const request = require('request');
const catname = process.argv[2];
console.log(process.argv[2]); //output sib if node breedFetcher.js sib
const urlName =  `https://api.thecatapi.com/v1/breeds/search?q=${catname}`; //https://api.thecatapi.com/v1/breeds/search?q=$sib

request(urlName, (error,response, body)=> {
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
  console.log(data[0].description);
  console.error('error:',error); 
});


