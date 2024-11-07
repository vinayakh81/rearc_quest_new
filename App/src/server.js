// index.js
const express = require('express');
const app = express();

// Get the SECRET_WORD from the environment variable
const secretWord = process.env.SECRET_WORD || 'No secret provided';

// Root route
app.get('/', (req, res) => {
  res.send(`<h1>Welcome!</h1><p>Secret Word: ${secretWord}</p>`);
});

// Secret word route for Docker check
app.get('/secret_word', (req, res) => {
    res.json({ secretWord: secretWord });
  });

// Docker check route
app.get('/docker', (req, res) => {
  res.json({ status: 'Container is running', secretWord: secretWord });
});

// Start the server
app.listen(3000, () => {
  console.log(`App running on port 3000.`);
});

// Load Balancer health check
app.get('/loadbalanced', (req, res) => {
  res.status(200).send('Load balancer is working!');
});

// TLS checks
app.get('/tls', (req, res) => {
  res.send('TLS endpoint is active!');
});

