const mongoose = require("mongoose");
const validator = require("validator");

const courseDetailSchema = new mongoose.Schema({
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
      //   duration: {
      //     type: String,
      //     required: true,
      //   },
      //   students: {
      //     type: String,
      //     required: true,
      //   },
      lessons: [
        {
          lessNum: {
            type: Number,
            unique: true,
          },
          lessTitle: {
            type: String,
            required: true,
          },
          lessDuration: {
            type: String,
            required: true,
          },
          lessAcces: {
            type: String,
            required: true,
          },
        },
      ],
      description: {
        course_desc: {
          type: String,
          required: true,
        },
      },
    },
  ],
});

const courseDetail = new mongoose.model("courseDetail", courseDetailSchema);

module.exports = courseDetail;

// {
//   "crs": 1,
//   "title": "Photography",
//   "image": "https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//   "category_courses": [{
//       "ch": 1,
//       "title": "Potrait Photography",
//       "image": "link",
//       "mentorName": "Jojo Dojo",
//       "lessons": [{
//           "lessNum": 1,
//           "lessTitle": "Promo Video",
//           "lessDuration": "2 mins",
//           "lecture-link": "video-link",
//           "lessAccess": "free"
//       }, {
//           "lessNum": 2,
//           "lessTitle": "Introduction",
//           "lessDuration": "5 mins",
//           "lecture-link": "video-link",
//           "lessAccess": "paid"
//       }, {
//           "lessNum": 3,
//           "lessTitle": "To get Started",
//           "lessDuration": "3 mins",
//           "lecture-link": "video-link",
//           "lessAccess": "paid"
//       }, {
//           "lessNum": 4,
//           "lessTitle": "Basics",
//           "lessDuration": "5 mins",
//           "lecture-link": "video-link",
//           "lessAccess": "paid"
//       }],
//       "description": {
//           "course_desc": "Here You will basically learn about the fundamentals of Potrait Photography"
//       }
//   }, {
//       "ch": 2,
//       "title": "Street Photography",
//       "image": "link",
//       "mentorName": "Jojo Dojo",
//       "lessons": [{
//           "lessNum": 1,
//           "lessTitle": "Promo Video",
//           "lessDuration": "2 mins",
//           "lecture-link": "video-link",
//           "lessAccess": "free"
//       }, {
//           "lessNum": 2,
//           "lessTitle": "Introduction",
//           "lessDuration": "5 mins",
//           "lecture-link": "video-link",
//           "lessAccess": "paid"
//       }, {
//           "lessNum": 3,
//           "lessTitle": "To get Started",
//           "lessDuration": "3 mins",
//           "lecture-link": "video-link",
//           "lessAccess": "paid"
//       }, {
//           "lessNum": 4,
//           "lessTitle": "Basics",
//           "lessDuration": "5 mins",
//           "lecture-link": "video-link",
//           "lessAccess": "paid"
//       }],
//       "description": {
//           "course_desc": "Here You will basically learn about the fundamentals of Potrait Photography"
//       }
//   }, {
//       "ch": 3,
//       "title": "Mobile Photography",
//       "image": "link",
//       "mentorName": "Jojo Dojo",
//       "lessons": [{
//           "lessNum": 1,
//           "lessTitle": "Promo Video",
//           "lessDuration": "2 mins",
//           "lecture-link": "video-link",
//           "lessAccess": "free"
//       }, {
//           "lessNum": 2,
//           "lessTitle": "Introduction",
//           "lessDuration": "5 mins",
//           "lecture-link": "video-link",
//           "lessAccess": "paid"
//       }, {
//           "lessNum": 3,
//           "lessTitle": "To get Started",
//           "lessDuration": "3 mins",
//           "lecture-link": "video-link",
//           "lessAccess": "paid"
//       }, {
//           "lessNum": 4,
//           "lessTitle": "Basics",
//           "lessDuration": "5 mins",
//           "lecture-link": "video-link",
//           "lessAccess": "paid"
//       }],
//       "description": {
//           "course_desc": "Here You will basically learn about the fundamentals of Potrait Photography"
//       }
//   }, {
//       "ch": 4,
//       "title": "Marriage Photography",
//       "image": "link",
//       "mentorName": "Jojo Dojo",
//       "lessons": [{
//           "lessNum": 1,
//           "lessTitle": "Promo Video",
//           "lessDuration": "2 mins",
//           "lecture-link": "video-link",
//           "lessAccess": "free"
//       }, {
//           "lessNum": 2,
//           "lessTitle": "Introduction",
//           "lessDuration": "5 mins",
//           "lecture-link": "video-link",
//           "lessAccess": "paid"
//       }, {
//           "lessNum": 3,
//           "lessTitle": "To get Started",
//           "lessDuration": "3 mins",
//           "lecture-link": "video-link",
//           "lessAccess": "paid"
//       }, {
//           "lessNum": 4,
//           "lessTitle": "Basics",
//           "lessDuration": "5 mins",
//           "lecture-link": "video-link",
//           "lessAccess": "paid"
//       }],
//       "description": {
//           "course_desc": "Here You will basically learn about the fundamentals of Potrait Photography"
//       }
//   }]
// }
