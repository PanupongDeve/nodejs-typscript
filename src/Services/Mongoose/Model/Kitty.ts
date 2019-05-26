import * as mongoose from 'mongoose';

const  kittySchema = new mongoose.Schema({
    name: String
  });

const Kitty = mongoose.model('Kitty', kittySchema);

export default Kitty;