const nodemailer = require("nodemailer");

class EmailContoller {
  async sendMail(req, res) {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>',
      to: "bartoszpieczek@gmail.com",
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    return res.status(200).json(info);
  }
}

module.exports = new EmailContoller();
