import mongoose from 'mongoose';

let infoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: { 
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
},{
    versionKey: false
});

let Info = mongoose.model('Info', infoSchema, 'mydata');

export default Info;