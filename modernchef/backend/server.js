const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://teste:1234@cluster0.qnbvwjt.mongodb.net/receita2?retryWrites=true&w=majority';

mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('connection error:', err));

// Rotas
const receitaRoutes = require('./routes/receitaRoutes');
app.use('/receitas', receitaRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});