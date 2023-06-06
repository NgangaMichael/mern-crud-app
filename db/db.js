const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost/mern-crud-app', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });
}