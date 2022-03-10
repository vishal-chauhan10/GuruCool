const mongoose = require("mongoose");
const validator = require("validator");

const videodataSchema = new mongoose.Schema({
  // data: {
  //   crs: "1",
  //   title: "Photgraphy",
  //   image:
  //     "https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",

  //   category_courses: [
  //     {
  //       ch: "1.01",
  //       title: "Potrait Photography",
  //       mentorName: "Jojo Dojo",
  //       image:
  //         "https://images.pexels.com/photos/4424567/pexels-photo-4424567.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //       duration: "1h 30min",
  //       students: "2.3k",
  //       lessons: [
  //         {
  //           less: "1",
  //           title: "Promo Video",
  //           duration: "2mins",
  //         },
  //         {
  //           less: "2",
  //           title: "Introduction to the course",
  //           duration: "2mins",
  //         },
  //       ],

  //       description: {
  //         course_desc:
  //           "This course will help you to learn the besics of Potrait Photgraphy",
  //         students: "2,300",
  //         language: "English",
  //         lastUpdate: "Nov 10, 2021",
  //         subtitles: "English",
  //       },
  //     },
  //   ],
  // },

  crs: { type: Number, unique: true },
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 16,
    unique: [true, "Course with this title already prsent"],
  },
  image: {
    type: String,
    required: true,
  },
  category_courses: [
    {
      ch: {
        type: Number,
        unique: true,
      },
      title: {
        type: String,
        required: true,
        minlength: 2,
        unique: [true, "Chapter with this title already prsent"],
      },
      image: {
        type: String,
        required: true,
      },
      mentorName: {
        type: String,
        required: true,
      },
      // duration: {
      //   type: String,
      //   required: true,
      // },
      // students: {
      //   type: String,
      //   required: true,
      // },
      lessons: [
        {
          type: Number,
          unique: true,
        },
      ],
      description: [
        {
          course_desc: {
            type: String,
            required: true,
          },
          // students: {
          //   type: String,
          // },
          // language: {
          //   type: String,
          //   required: true,
          // },
          // lastUpdate: {
          //   type: String,
          //   required: true,
          // },
        },
      ],
    },
  ],

  // name: {
  //   type: String,
  //   required: true,
  //   minlength: 2,
  // },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: [true, "Email Id already prsent"],
  //   validate(value) {
  //     if (!validator.isEmail(value)) {
  //       throw new Error("Invalid Email");
  //     }
  //   },
  // },
  // phone: {
  //   type: Number,
  //   minLength: 10,
  //   required: true,
  //   unique: true,
  // },
  // password: {
  //   type: String,
  // },
});

//we will create a new collection
const videodata = new mongoose.model("VideoData", videodataSchema);

module.exports = videodata;
