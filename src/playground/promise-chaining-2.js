require('../db/mongoose');
const Task = require('../models/task');

// Task.findByIdAndDelete('5f0bd3210588de369ccfacc0')
// 	.then((task) => {
// 		console.log(task);
// 		return Task.countDocuments({ completed: false });
// 	})
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const deleteTaskAndCount = async (id) => {
	const task = await Task.findByIdAndDelete(id);
	const count = await Task.countDocuments({ completed: false });
	return count;
};

deleteTaskAndCount('5f0bd2ff0588de369ccfacbf')
	.then((count) => {
		console.log(count);
	})
	.catch((e) => {
		console.log(e);
	});
