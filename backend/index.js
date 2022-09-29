import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const PORT = 3000;
const app = express();
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'anfqkddnf1',
  database: 'test',
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('hello this is the backend');
});

app.get('/books', (req, res) => {
  const q = 'SELECT * FROM books';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/books', (req, res) => {
  const q = 'INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)';
  const values = [req.body.title, req.body.desc, req.body.price, req.body.cover];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json('created successfully');
  });
});

app.put('/books/:id', (req, res) => {
  const q = 'UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?';

  const values = [req.body.title, req.body.desc, req.body.price, req.body.cover, req.params.id];

  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json('updated successfully');
  });
});

app.delete('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const q = 'DELETE FROM books WHERE id = ?';

  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json('deleted successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
