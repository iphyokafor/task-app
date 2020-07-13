require('../db/mongoose');
const Task = require('../models/task');

Task.findByIdAndDelete('5f0bd3210588de369ccfacc0')
	.then((task) => {
		console.log(task);
		return Task.countDocuments({ completed: false });
	})
	.then((result) => {
		console.log(result);
	})
	.catch((e) => {
		console.log(e);
	});
