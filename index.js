const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const {MONGO_USER, MONGO_PASSWORD, MONGO_PORT,MONGO_IP}=require('./config/config');

const postRouter = require('./routes/postRouter');

const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
// Connect to MongoDB
mongoose.connect(mongoUrl)
 .then(() => console.log('Connected to MongoDB'))
 .catch(error => console.error('Error connecting to MongoDB', error));


// Define a simple model for a blog post
app.use(express.json())

// Define a route handler for GET /
app.get('/', (req, res) => {
    const headers = req.headers
  res.status(200).send("hello world");
});

app.use("/posts",postRouter)

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});