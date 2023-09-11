const express = require('express');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const detailsRoutes = require('./routes/details');

const MONGODB_URI = 'mongodb+srv://MathewPio:hngproject@cluster0.dtdulsc.mongodb.net/info?retryWrites=true&w=majority';

const app = express();

app.use(express.json());

app.use(detailsRoutes);

mongoose
  .connect(
    MONGODB_URI
  )
.then(result => {
    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch(err => {
    console.log(err);
})
