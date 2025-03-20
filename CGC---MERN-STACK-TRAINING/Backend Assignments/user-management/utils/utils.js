const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bunyan = require("bunyan");


const responseObjGenerator = (success, message, data) => {
  let resObj = {};
  resObj.success = success;
  resObj.message = message || (success ? "Successful!" : "Failed!");
  if (data) {
    resObj.data = data;
  }
  return resObj;
};

const hashPassword = (plainPass) => {
  return bcrypt.hash(plainPass, 10);
};

const comparePassword = (plainPassword, hashedPassword) => {
  return bcrypt.compare(plainPassword, hashedPassword);
};

const generateToken = (data) => {
  return jwt.sign(data, process.env.SECRET_KEY, { expiresIn: "1d" });
};

const applogger = bunyan.createLogger({
  name: "user-management",
  streams: [
    {
      level: "info",
      stream: process.stdout,
    },
    {
      level: "error",
      path: "logs/error.log",
    },
    {
      level: "info",
      path: "logs/info.log"
    }
  ],
});

module.exports = {
  hashPassword,
  generateToken,
  comparePassword,
  responseObjGenerator,
  applogger
};