import fetch from 'node-fetch';


fetch('https://api.github.com/users/Srikanth-gunja/repos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(() => console.log("error"));
