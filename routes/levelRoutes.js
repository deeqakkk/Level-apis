const express = require('express');
const router = express.Router();
const LevelItem = require('../models/level');

// Create a new level item
router.post('/', async(req, res) => {
    try {
        const levelItem = new LevelItem(req.body);
        await levelItem.save();
        res.status(201).send(levelItem);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all level items
router.get('/', async(req, res) => {
    try {
        const levelItems = await LevelItem.find({});
        res.send(levelItems);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a level item by id
router.get('/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const levelItem = await LevelItem.findById(_id);
        if (!levelItem) {
            return res.status(404).send();
        }
        res.send(levelItem);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a level item
router.patch('/:id', async(req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'description', 'status'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const levelItem = await LevelItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!levelItem) {
            return res.status(404).send();
        }
        res.send(levelItem);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a level item
router.delete('/:id', async(req, res) => {
    try {
        const levelItem = await LevelItem.findByIdAndDelete(req.params.id);
        if (!levelItem) {
            return res.status(404).send();
        }
        res.send(levelItem);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;