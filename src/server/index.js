const express = require('express');
const app = express();

// the path provided to static is relative to the directory the node process' location
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('art approaches!');
});

app.listen(3000, () => console.log('art app listening on port 3000!'));