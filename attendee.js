const mongoose = require('mongoose');
const {Schema} = mongoose;

const attendeeSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    reference: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Attendee', attendeeSchema);
