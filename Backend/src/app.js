const express = require("express");
const cors = require("cors");
require("./db/conn");
const Student = require("./models/students");
const videodata = require("./models/data");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

// app.get("/", (req, res) => {
//   res.send("Hello from the Home side");
// });

// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   //Promise
//   user
//     .save()
//     .then(() => {
//       res.send(user);
//     })
//     .catch((e) => {
//       res.send(e);
//     });

//   // res.send("Hello from the other side");
// });

/////USING ASYNC AWAIT////////////////

app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();

    const email = req.body.email;

    const useremail = await Student.findOne({ email });

    if (useremail != null) {
      res.send(useremail).status(200);
    } else {
      res.status(400).send("User does not exist");
    }

    // res.send(createUser);
  } catch (e) {
    console.error(e);
    res.send("Error while creating the user").status(400);
  }
});

app.post("/studentLogin", async (req, res) => {
  try {
    // const _id = req.params.id;
    const email = req.body.email;
    const password = req.body.password;

    console.log(`${email} and ${password} `);

    const useremail = await Student.findOne({ email });
    // res.send(useremail);

    if (useremail != null) {
      try {
        if (password === useremail.password) {
          res.status(200).send(useremail);
        } else {
          res.status(400).send("Invalid password");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      res.status(400).send("User does not exist");
    }

    console.log(useremail);
  } catch (error) {
    res.status(400).send("Invalid Code");
  }
});

// app.post("/videodatas", async (req, res) => {
//   try {
//     const user = new Student(req.body);
//     const createUser = await user.save();
//     res.send(createUser);
//   } catch (e) {
//     res.send(e);
//   }
// });

// app.get("/videodatas", async (req, res) => {
//   try {
//     const studentsData = await Student.find();
//     res.send(studentsData);
//   } catch (e) {
//     res.send(e);
//   }
// });

//read the data of registered students

// app.get("/students", async (req, res) => {
//   try {
//     const studentsData = await Student.find();
//     res.send(studentsData);
//   } catch (e) {
//     res.send(e);
//   }
// });

//get the individual data using id
// app.get("/students/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const studentData = await Student.findById(_id);
//     res.send(studentData);
//   } catch (e) {
//     res.send(e);
//   }
// });

//get the individual data using name
///////getting error

// app.get("/students/name", async (req, res) => {
//   try {
//     const name = req.params.name;
//     const studentDataName = await Student.find(name);
//     res.send(studentDataName);
//   } catch (e) {
//     res.send(e);
//   }
// });

///DELETE DAta by Id
app.delete("/students/:id", async (req, res) => {
  try {
    const deleteStudent = await Student.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.send(deleteStudent);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Update Student

app.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateStudents);
  } catch (e) {
    res.status(404).send(e);
  }
});

app.listen(port, () => {
  console.log(`connection is setup at port ${port}`);
});
