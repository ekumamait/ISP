import mongoose from 'mongoose';
import validator from 'validator';
// import { defaultCipherList } from 'constants';

const Schema = mongoose.Schema;

const providerSchema = new Schema({
      name:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
      },
      lowest_price: {
        type: Number,
      },
      rating: {
        type: Number,
      },
      max_speed: {
          type: String,
          lowercase: true
      },
      description:{
        type: String,
        required: true
      },
      contact_no: {
        type: Number,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email Address')
            }
        }
      },
      image:{
        type: String,
      },
      url:{
        type: String,
      }
});

const Provider = mongoose.model('provider', providerSchema);

export default Provider;
