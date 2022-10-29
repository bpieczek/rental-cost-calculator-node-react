require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, sendTo, replayTo) => {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: process.env.EMAIL_USER,
    to: sendTo,
    replayTo: replayTo,
    subject: subject, // Subject line
    text: message, // plain text body
  };

  await transporter.sendMail(options, function (err, info) {
    if (!err) {
      return console.log(info);
    }

    return console.log(err);
  });
};

module.exports = sendEmail;
