const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth')

const Product = require('../models/product');


router.get('/', (req, res, next) => {
    Product.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
})

router.post('/', checkAuth, (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "Handling POST requests to /products",
            createdProduct: result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
        
    });
    res.status(201).json({
        message: "Handling Post requests to /products",
        createdProduct: product
    });
});

router.get('/:productid', (req, res, next) => {
    const id = req.params.productid;
    Product.findById(id)
    .exec()
    .then(doc => {
        console.log("From Database", doc);
        if (doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({message: "no valid entry found for provided ID"})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error:err})
    });
});

router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    
    Product.findByIdAndUpdate(id, { $set: req.body}, { new: true})
      .then(result => res.status(200).json(result))
      .catch(err => res.status(500).json({ error: err}))
  })


router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Product.findByIdAndDelete({_id: id})
      .then(result => res.status(200).json({
        message: "Product Deleted",
        deletedProductId: result._id
      }))
      .catch(err => res.status(500).json({ error: err}))
  })


mongoose.Promise = global.Promise;
module.exports = router;


