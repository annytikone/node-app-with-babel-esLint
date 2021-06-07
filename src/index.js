import express from 'express';
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log(' app on 3000!,changed node --v to 9 from 12');
});

const say_hello = 'something';
console.log(say_hello);
