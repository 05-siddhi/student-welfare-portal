const jwt = require("jsonwebtoken");
// const Teacher = require("../model/teacherSchema");
const Student = require("../model/userSchema");
const Authenticate = async (req, res, next) => {
  try {
    //-------------STUDENT SETUP------------------------
    const token = req.cookies.jwtoken_student;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log(verifyToken);
    const rootUser = await Student.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      console.log("student  is  not present!!!");
      throw new Error("User Not Found");
    }
    if (rootUser) {
      console.warn(rootUser);
      console.log("Student  is present ! ");
      req.rootUser = rootUser;
      req.userID = rootUser._id;
    }
    next();
  } catch (error) {
    res.status(401).send("Unauthorized:No Token Provided!");
    console.log("401 error aagyaa no token proviede!");
    console.log(error);
  }
};
module.exports = Authenticate;
//----------------------------------------------------------------------------------------

// const token_teacher = req.cookies.jwtoken_teacher;
// // const verifyToken_teacher = jwt.verify(token_teacher, process.env.SECRET_KEY);
// console.log(token_teacher);

// const rootTeacher = await Teacher.findOne({
//   _id: verifyToken_teacher._id,
//   "tokens.token": token_teacher,
// });

// if(!rootUser && !rootTeacher)
// {
//   console.log("no one  present!!!");
//   throw new Error("NONE Not Found");
// }

// if (rootUser) {
//   console.warn(rootUser);
//   console.log("Student  is present ! ");
//   req.rootUser = rootUser;
//   req.userID = rootUser._id;
//   // echo('Student is present');
//   return rootUser;

//   //agar yaha next() daale to?
// }

//  if (rootTeacher) {
//   console.warn(rootTeacher);
//   console.log("Teacher  is present ! ");
//   req.rootTeacher = rootTeacher;
//   req.teacherID = rootTeacher._id;
//   // echo('teacher is present');
//   return rootTeacher;
//   //----iss line ke baad ye baki condtion check na kare
//   //direct next() chal jaaey
// }

// if (!rootTeacher) {
//   console.log("Teacher  is  not present!!!");
//   // throw new Error("Teacher Not Found");
// }

// if (rootTeacher) {
//   console.log("Teacher  is present ! ");
//   req.rootTeacher = rootTeacher;
//   req.teacherID = rootTeacher._id;
// }
//-------------TEACHER SETUP------------------------
// const token_teacher = req.cookies.jwtoken_teacher;
// const verifyToken_teacher = jwt.verify(token_teacher, process.env.SECRET_KEY);
// const rootTeacher = await Teacher.findOne({
//   _id: verifyToken_teacher._id,
//   "tokens.token": token_teacher,
// });
// if (!rootTeacher) {
//   console.log("Teacher  is  not present!!!");
//   throw new Error("Teacher Not Found");
// }
//   if (rootTeacher) {
//     console.log("Teacher  is present ! ");
//     req.rootTeacher = rootTeacher;
//     req.teacherID = rootTeacher._id;
//   }
//   next();
// } catch (error) {
//   res.status(401).send("Unauthorized:No Token Provided!");
//   console.log("401 error aagyaa no token proviede for teacher!");
//   console.log(error);
// }
//------------------------------------------------
