const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email Id already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },

  password: {
    type: String,
  },
});

//we will create a new collection
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;

///////////////////

// {
//   "crs": "1",
//     "title": "Photgraphy",
//     "image":
//       "https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",,

//     "category_courses": [
//       {
//         "ch": "1.01",
//         "title": "Potrait Photography",
//         "mentorName": "Jojo Dojo",
//         "image":
//           "https://images.pexels.com/photos/4424567/pexels-photo-4424567.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//         "duration": "1h 30min",
//         "students": "2.3k",
//         "lessons": [
//           {
//             "less": "1",
//             "title": "Promo Video",
//             "duration": "2mins",
//           },
//           {
//             "less": "2",
//             "title": "Introduction to the course",
//             "duration": "2mins",
//           },
//         ],

//         "description": {
//           "course_desc":
//             "This course will help you to learn the besics of Potrait Photgraphy",
//           "students": "2,300",
//           "language": "English",
//           "lastUpdate": "Nov 10, 2021",
//           "subtitles": "English",
//         },
//       },
//     ],
// }
