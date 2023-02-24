const { Schema, model } = require('mongoose');


// MAKE a schema for new pizza NOT created

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        tpye: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: "Large"
    },
    toppings: []
});


// NOW create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;