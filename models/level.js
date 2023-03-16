const mongoose = require('mongoose');

const LevelSchema = new mongoose.Schema({
    levelNumber: {
        type: Number,
        required: true,
        unique: true
    },
    videos: [{
        videoNumber: {
            type: Number,
            required: true
        },
        videoTitle: {
            type: String,
            required: true
        },
        videoUrl: {
            type: String,
            required: true
        },
        isCompleted: {
            type: Boolean,
            default: false
        }
    }],
    games: [{
        gameNumber: {
            type: Number,
            required: true
        },
        gameTitle: {
            type: String,
            required: true
        },
        isCompleted: {
            type: Boolean,
            default: false
        }
    }]
});

module.exports = mongoose.model('Level', LevelSchema);