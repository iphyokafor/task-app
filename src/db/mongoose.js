const mongoose = require("mongoose");

mongoose.connect("MONGO_URI= mongodb://localhost:27017/task-app", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});