const express = require('express');
const router = express.Router();
const Receita = require('../models/receita');

// Create
router.post('/', async (req, res) => {
    const { nome, ingredientes, modo_preparo, calorias, porcoes, tipo, nutrientes } = req.body;
    if (!nome || !ingredientes || !modo_preparo || !calorias || !porcoes || !tipo || !nutrientes) {
        return res.status(400).send({ error: 'Todos os campos são obrigatórios' });
    }
    const novaReceita = new Receita(req.body);
    try {
        await novaReceita.save();
        res.status(201).send(novaReceita);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read
router.get('/', async (req, res) => {
    try {
        const receitas = await Receita.find();
        res.status(200).send(receitas);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Read by ID
router.get('/:id', async (req, res) => {
    try {
        const receita = await Receita.findById(req.params.id);
        if (!receita) {
            return res.status(404).send();
        }
        res.send(receita);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        const receita = await Receita.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!receita) {
            return res.status(404).send();
        }
        res.send(receita);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const receita = await Receita.findByIdAndDelete(req.params.id);
        if (!receita) {
            return res.status(404).send();
        }
        res.send(receita);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;