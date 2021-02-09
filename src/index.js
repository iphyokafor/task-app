const express = require("express");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
require("./db/mongoose");

const app = express();
const port = process.env.PORT || 3001;

// const multer = require("multer");
// const upload = multer({
//     dest: "avatars",
//     limits: {
//         fileSize: 1000000,
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//             return cb(new Error("Please upload only jpg, jpeg or png"));
//         }

//         cb(undefined, true);
//     },
// });

// app.post(
//     "/upload",
//     upload.single("upload"),
//     (req, res) => {
//         res.send();
//     },
//     (error, req, res, next) => {
//         res.status(400).send({ error: error.message });
//     }
// );

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log("Server is up on port " + port);
});