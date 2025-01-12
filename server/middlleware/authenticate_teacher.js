const jwt = require("jsonwebtoken");
const Teacher = require("../model/teacherSchema");
const Authenticate_teacher = async (req, res, next) => {
  try {
    //-------------TEACHER SETUP------------------------
    const token_teacher = req.cookies.jwtoken_teacher;
    const verifyToken_teacher = jwt.verify(token_teacher, process.env.SECRET_KEY);
    const rootTeacher = await Teacher.findOne({
      _id: verifyToken_teacher._id,
      "tokens.token": token_teacher,
    });
    if (!rootTeacher) {
      console.log("Teacher  is  not present!!!");
      throw new Error("Teacher Not Found");
    }
    if (rootTeacher) {
      console.log("Teacher  is present ! ");
      req.rootTeacher = rootTeacher;
      req.teacherID = rootTeacher._id;
    }
    next();
  } catch (error) {
    res.status(401).send("Unauthorized:No Token Provided!");
    console.log("401 error aagyaa no token proviede for teacher!");
    console.log(error);
  }
};
module.exports = Authenticate_teacher;
