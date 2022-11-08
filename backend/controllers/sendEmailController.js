const sendEmail = require("../utils/sendEmail");

class sendEmailController {
  async emailSending(req, res) {
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    try {
      setTimeout(async function () {
        await sendEmail(
          `Your message to ${process.env.EMAIL_USER} was sent!`,
          message,
          email
        );
      }, 2000);

      await sendEmail(subject, message, process.env.EMAIL_USER);

      res.status(200).json({ success: true, message: "Email Sent" });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

module.exports = new sendEmailController();
