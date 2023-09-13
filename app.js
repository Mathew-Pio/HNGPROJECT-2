const express = require('express');
const port = process.env.PORT;
const mongoose = require('mongoose');
const detailsRoutes = require('./routes/details');



const app = express();

app.use(express.json());

app.use(detailsRoutes);

mongoose
  .connect(
    process.env.MONGODB_URI
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
