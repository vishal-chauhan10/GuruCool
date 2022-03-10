const express = require("express");
const courseDetail = require("./models/courseDetails");
require("./db/conn");
const videodata = require("./models/data");

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());

// app.post("/videodatas", async (req, res) => {
//   try {
//     const user = new videodata(req.body);
//     const createUser = await user.save();
//     res.send(createUser);
//   } catch (e) {
//     res.send(e);
//   }
// });

// app.post("/signupUsers", async (req, res) => {
//   try {
//     const user = new signupUser(req.body);
//     const creatUser = await user.save();
//     res.send(creatUser);
//   } catch (e) {
//     res.send(e);
//   }
// });

// app.get("/videodatas", async (req, res) => {
//   try {
//     const studentsData = await videodata.find();
//     res.send(studentsData);
//   } catch (e) {
//     res.send(e);
//   }
// });

app.post("/courseDetails", async (req, res) => {
  try {
    const data = new courseDetail(req.body);
    const createData = await data.save();
    res.send(createData);
  } catch (e) {
    res.send(e);
  }
});

app.get("/courseDetails", async (req, res) => {
  try {
    const courseData = await courseDetail.find();
    res.send(courseData);
  } catch (e) {
    res.send(e);
  }
});

app.listen(port, () => {
  console.log(`connection is setup at port ${port}`);
});
