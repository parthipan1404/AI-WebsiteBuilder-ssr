const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// App configuration
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoDB'));

// Schema and Model
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});
const Form = mongoose.model('books', formSchema);

// Routes
app.post('/api/submit', async (req, res) => {
    try {
        const formData = new Form(req.body);
        await formData.save();
        res.status(201).send('Data saved successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});
app.get('/data', async (req, res) => {
    try {
        const formData = await Form.find();
        res.status(200).json(formData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));