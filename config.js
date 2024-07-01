const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ifctdesapliweb:HoHPYfkH53wzPJtP@devcamp.o8zodno.mongodb.net/?retryWrites=true&w=majority&appName=devcamp'  
).then(() => {
	console.log('Connected to MongoDB');
}).catch((err) => {
	console.error('Error connecting to MongoDB:',err);
});

module.exports = mongoose;