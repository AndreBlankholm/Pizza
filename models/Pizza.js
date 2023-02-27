const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

// MAKE a schema for new pizza NOT created

const PizzaSchema = new Schema(
    {
      pizzaName: {
        type: String
      },
      createdBy: {
        type: String
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
      },
      size: {
        type: String,
        default: 'Large'
      },
      toppings: [],
      comments: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment',
        }
      ]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
  );


  
//VIRTUALS;
// Virtuals allow you to add virtual properties to a document that aren't stored in the database. They're normally computed values that get evaluated when you try to access their properties.

// This Virtual gets the total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function() {
  return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
});

// NOW create the Pizza model using the PizzaSchema
const Pizza = model("Pizza", PizzaSchema);

// export the Pizza model
module.exports = Pizza;
