const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('MONGO_URI= mongodb://localhost:27017/task-app', {
	useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const User = mongoose.model('User', {
	name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if(!validator.isEmail(value)){
        throw new Error('Email is invalid')
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if(value.toLowerCase().includes('password')){
        throw new Error('Password cannot contain "password"')
      }
    }
  },
	age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
	},
});


const Task = mongoose.model('Task',{
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
} );

const task = new Task ({
  description: 'learn to code',
  // completed: false
})

task.save().then(() => {
  console.log(task)
}).catch((error) => {
  console.log('Error!', error);
})

// const me = new User({
//   name: '  Drake  ',
//   email: 'myemail@gmail.com',
//   password: 'phone123'
  
// })

// me.save().then(() => {
// console.log(me);
// }).catch((error) => {
//   console.log('Error!', error);
// })
