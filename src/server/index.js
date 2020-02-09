const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('art approaches!');
});

app.listen(3000, () => console.log('art app listening on port 3000!'));