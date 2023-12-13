const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Event = require('../models/eventModel')

// router.post('/', (req, res, next) => {
//     const event = new Event({
//         _id: new mongoose.Types.ObjectId(),
//         eventName: req.body.eventName,
//         eventStartTime: req.body.eventStartTime,
//         eventEndTime: req.body.eventEndTime,
//         eventDate: req.body.eventDate
//     });
//     event.save()
//     .then(result => {
//         console.log(result);
//         res.status(201).json(results);
//     })
//     .catch(err => {
//         res.status(500).json({
//             message: "Event was not created due to an error",
//             error: err
//         })
//     })
// })

router.post('/', (req, res, next) => {
    const event = {
        name: req.body.name,
        date: req.body.date
    }
    event.save()
})


module.exports = router;


