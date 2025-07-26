const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // XAMPP default
  database: 'digifalx',
});

// DB connection check
db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('✅ Connected to MySQL');
  }
});

// Admin login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM admins WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0 || results[0].password !== password) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: results[0].id }, 'digifalx_secret_key', { expiresIn: '1d' });
    res.json({ token });
  });
});

// Protected route (optional test)
app.get('/api/protected', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ msg: 'Unauthorized' });

  jwt.verify(token, 'digifalx_secret_key', (err, user) => {
    if (err) return res.status(403).json({ msg: 'Invalid token' });
    res.json({ msg: 'Access granted to protected route' });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
