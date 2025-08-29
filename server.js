const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas Connection
mongoose.connect(
   'mongodb+srv://2312033:234567-20@cluster0.dtsu4pr.mongodb.net/labdb?retryWrites=true&w=majority&appName=Cluster0',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.log("MongoDB connection error:", err));

// Routes
const itemRoutes = require('./routes/ItemRoutes');
app.use('/api/items', itemRoutes);

// Server listening
app.listen(5000, () => console.log("Server running on port 5000"));
