const mongoose = require('mongoose');

// const orderSchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     product: {type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true, unique: true,
//                 match: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i},
//     quantity: {type: Number, default: 1}
// });

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    eventName: String,
    eventStartTime: String,
    eventEndTime: String,
    eventDate: String,
    eventLink: String,
    owner: {
        ownerId: mongoose.Schema.Types.ObjectId,
        ownerName: String,
        ownerEmail: String
    },
    participants: []

})
    

module.exports = mongoose.model('Order', eventSchema)

