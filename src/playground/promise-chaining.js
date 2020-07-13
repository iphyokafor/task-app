require('../db/mongoose');
const User = require('../models/user');

// User.findByIdAndUpdate('5f0bca6cb4215e1a50440bf2', { age: 1 })
// 	.then((user) => {
// 		console.log(user);
// 		return User.countDocuments({ age: 1 });
// 	})
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const updateAgeAndCount = async (id, age) => {
	const user = await User.findByIdAndUpdate(id, { age });
	const count = await User.countDocuments({ age });
	return count;
};

updateAgeAndCount('5f0bca6cb4215e1a50440bf2', 2)
	.then((count) => {
		console.log(count);
	})
	.catch((e) => {
		console.log(e);
	});
