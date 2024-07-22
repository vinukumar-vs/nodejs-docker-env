const dotenv = require('dotenv')

console.log("NODE_ENV", process.env.NODE_ENV)
if(process.env.NODE_ENV === 'production') {
  console.log("Running on prodcution mode");
  dotenv.config({ path: '.env.production' });
}
else {
  dotenv.config({ path: '.env.development' })
}
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});