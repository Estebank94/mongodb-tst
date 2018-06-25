var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});


// var newTodo = new Todo({
// 	text: 'Run',
// 	completed: true,
// 	completedAt: 10
// });

// newTodo.save().then((doc) => {
// 	console.log('Save todo', doc);
// }, (e) => {
// 	console.log('Unable to save todo');
// });

module.exports = {Todo};