const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order');
const Product = require('../models/product');


router.get('/', (req, res, next) => {
    Order.find()
    .exec()
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            orders: docs
        });
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    })
});

router.post('/', (req, res, next) => {
            
            const event = new Order({
                    _id: new mongoose.Types.ObjectId(),
                    eventName: req.body.eventName,
                    eventStartTime: req.body.eventStartTime,
                    eventEndTime: req.body.eventEndTime,
                    eventDate: req.body.eventDate,
                    eventLink: "",
                    owner: {
                        ownerId: req.body.owner.ownerId,
                        ownerName: req.body.owner.ownerName,
                        ownerEmail: req.body.owner.ownerEmail
                    },
            });
            event.save()
        .then(result => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch(err => {
            res.status(500).json({
                message: "Product ID doesnt exist",
                error: err
            })
        })
    });
    

router.get('/:orderId', (req, res, next) => {
    Order.findById(req.params.orderId)
    .exec()
    .then(order => {
        if (!order) {
            return res.status(404).json({
                message:"Event not found"
            })
        }
        console.log(order)
        res.status(201).json(order)
    })
    .catch(err =>{
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
});

router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    Order.findByIdAndUpdate(id, { $push: {participants:req.body}  }, { new: true})
      .then(result => res.status(200).json(result))
      .catch(err => res.status(500).json({ error: err}))
  })

router.patch('/link/:id', (req, res, next) => {
    const id = req.params.id;
    Order.findByIdAndUpdate(id, { eventLink: req.body.eventLink+"/"+id  }, { new: true})
      .then(result => res.status(200).json(result))
      .catch(err => res.status(500).json({ error: err}))
  })

router.delete('/:orderId', (req, res, next) => {
    Order.findByIdAndDelete({_id: req.params.orderId})
    .exec()
    .then(doc => {
        console.log(doc)
        res.status(201).json(doc)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
});

module.exports = router



// router.post('/', (req, res, next) => {
//     Product.findById(req.body.productId)
//     .then(product => {
//         if (!product) {
//             return res.status(404).json({
//                 message: "Product not found"
//             })
//         }
//         const order = new Order({
//             _id: new mongoose.Types.ObjectId(),
//             quantity: req.body.quantity,
//             product: req.body.productId
//         });
//         return order.save()
//     })
//     .then(result => {
//         console.log(result);
//         res.status(201).json(result);
//     })
//     .catch(err => {
//         res.status(500).json({
//             message: "Product ID doesnt exist",
//             error: err
//         })
//     })
// });