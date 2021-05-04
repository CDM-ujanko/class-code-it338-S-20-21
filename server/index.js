let express = require('express');
// let cors = require('cors');
let posts = require('./db/posts.json');

const PORT = 8000;
let app = express();

// Start server
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Pass to next layer of middleware
  next();
});

app.use(express.static('assets'));

app.get('/', (req, resp) => {
  resp.json('posts');
})

app.get('/posts', (req, resp) => {
  resp.json(posts);
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


