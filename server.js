const querystring = require('querystring');
const { arr } = require('./json');
const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  const { url } = req;
  const parsedUrl = new URL(`http://localhost${url}`);
  const queryString = parsedUrl.search.slice(1);
  const queryParams = querystring.parse(queryString);
  const key = queryParams.key;

  const object = arr.filter((e) => e.key === key);
  const answer = object.map((e) => e.answer).join(' ');

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001'); // Set the allowed origin
  res.setHeader('Access-Control-Allow-Methods', 'GET'); // Set the allowed HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Set the allowed headers

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(answer);
});

app.listen(8050, () => {
  console.log('Server is running on port 8050');
});

















// const urlString = url;
// const parsedUrl = new URL(urlString);
// const queryString = parsedUrl.search.slice(1);
// const queryParams = querystring.parse(queryString);
// const key = queryParams.key;
//  const s= arr.filter((Q)=>{
//  return Q.key==key
// })
// console.log(s.map((q)=>{
//   return q.answer
  
// }).join(" "))
