//  This file will import all of the API routes to prefix their endpoint names and package them up

const router = require('express').Router();

const pizzaRoutes = require('./pizza-routes'); // the name of he api/pizza-routes file
const commentRoutes = require('./comment-routes');


// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);
router.use('/comments', commentRoutes);





module.exports = router;

