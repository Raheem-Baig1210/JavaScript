const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'supersecret'; // Like a magic word to sign our ticket

app.use(bodyParser.json());

// Imagine we have a list of users
const users = [
  {
    username: 'superkid',
    password: bcrypt.hashSync('mypassword', 8) // Hide the real password
  }
];

// LOGIN PAGE
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);

  // Check if username is correct
  if (!user) {
    return res.status(400).json({ message: 'Wrong username!' });
  }

  // Check if password matches the hidden password
  const passwordIsValid = bcrypt.compareSync(password, user.password);

  if (!passwordIsValid) {
    return res.status(400).json({ message: 'Wrong password!' });
  }

  // If everything is good, give a golden ticket (token)
  const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });

  res.json({ message: 'Yay! You are logged in!', token });
});

// Protected page (only kids with a golden ticket can enter)
app.get('/secret', (req, res) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'You need a golden ticket!' });
  }

  const token = authHeader.split(' ')[1];
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Golden ticket is not valid!' });
    }

    res.json({ message: `Welcome to the secret clubhouse, ${decoded.username}! 🎉` });
  });
});

// Middleware to check token
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'You need to log in...!' });
  }

  const token = authHeader.split(' ')[1];
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'tokens are not valid!' });
    }

    req.user = decoded; // save decoded info for use if needed
    next();
  });
}

// ADD USER (only if logged in)
app.post('/add-user', verifyToken, (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required!' });
  }

  // Check if user already exists
  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists!' });
  }

  // Add new user
  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashedPassword });

  res.json({ message: `User ${username} added successfully! 🎉` });
});

app.get('/users', verifyToken, (req, res) => {
  res.json({ users: users.map(u => ({ username: u.username })) });
});


// Start the magic server
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
