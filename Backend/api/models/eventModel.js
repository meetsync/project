const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    eventName: String,
    eventStartTime: String,
    eventEndTime: String,
    eventDate: String,
})

module.exports = mongoose.model('Event', eventSchema)