const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect(
    'mongodb+srv://hbhojani93:hasnain123@node-rest-shop.uzrvooz.mongodb.net/?retryWrites=true&w=majority');

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const productRoutes = require('./api/route/products');
const orderRoutes = require('./api/route/orders');
const userRoutes = require('./api/route/user');
const eventRoutes = require('./api/route/event');


app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);
app.use('/event', eventRoutes);


app.use((req, res, next) =>{
    const error = new Error('Not Found');
    error.status(404);
    next(error);
})

app.use((error, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })

})

module.exports = app;