let nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");

export default async function handler(req, res) {
  require("dotenv").config();
  const SENDGRID_API_KEY = process.env.password;
  // const USER = process.env.user;

  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: process.env.SENDGRID_API_KEY,
    })
  );

  transport
    .sendMail({
      from: "adam@skyboxpro.net",
      to: "adamgonlag+portfolio@gmail.com",
      subject: `Message From ${req.body.name}`,
      text: `From: ${req.body.email}, Name: ${req.body.name} Message: ${req.body.message}`,
      html: `
        <div>
          <p>From: ${req.body.email}</p>
          <p>Name: ${req.body.name}</p>
          <p>Message: ${req.body.message}</p>
        </div>
      `,
    })
    .then(([res]) => {
      console.log(
        "Message delivered with code %s %s",
        res.statusCode,
        res.statusMessage
      );
    })
    .catch((err) => {
      console.log("Errors occurred, failed to deliver message");

      if (err.response && err.response.body && err.response.body.errors) {
        err.response.body.errors.forEach((error) =>
          console.log("%s: %s", error.field, error.message)
        );
      } else {
        console.log(err);
      }
    });

  res.status(200).json(req.body);
}
