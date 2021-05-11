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
  const PAGE_SIZE = 6;
  let page = !req.query.page || isNaN(parseInt(req.query.page)) ? 0 : parseInt(req.query.page),
      start = PAGE_SIZE * page;

  resp.json({
    posts: posts.slice(Math.min(start, posts.length), Math.min(start + PAGE_SIZE, posts.length)),
    total: posts.length,
    pageSize: PAGE_SIZE,
    page,
  });
})

app.get('/post/:id', (req, resp) => {
  if (isNaN(req.params.id) || req.params.id > posts.length) {
    resp.status(400).json('Invalid id!');
  }

  resp.json(posts[req.params.id]);
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


