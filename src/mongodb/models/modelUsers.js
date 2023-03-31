import mongoose from "mongoose";

const collection = 'Users';

const schema = new mongoose.Schema({
    email: {
        type: String,
        require:true,
        unique: true,
    },
    password: {
        type: String,
        require:true
    },
    completeName: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    telphoneNumber: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true,
        default: 'user'
    },
    userImg: {
        type: String,
        require: true,
        default:''
    },
    userCart: {
        type: [{
            product: String,
            description: String,
            code: Number,
            urlImgProduct: String,
            price:Number,
            cant: Number
        }],
        require: false,
    }
}, { versionKey: false });

const userModel = mongoose.model(collection, schema);

export default userModel;