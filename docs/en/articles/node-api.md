# Node.js API Development

Building RESTful APIs with Node.js and Express.

## Setup

```bash
npm install express
```

## Basic Server

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

## Routes

```javascript
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});
```

## Middleware

Middleware functions have access to the request and response objects.

```javascript
app.use(express.json());
```
