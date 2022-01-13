const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name:String,
    email: 
    [{
      type: String,
      //unique: true,
      //notNull: true
    }
    ],
    password: [
      {
        type: String,
        //notNull true
      }
    ],
    create_at:
    [
      {
        type: Date,
        default: Date.now
      }
    ],
    update_at:
    [
      {
        type: Date,
        default: Date.now
      }
    ]

  }
);

module.exports = mongoose.model('UserModel', UserSchema);