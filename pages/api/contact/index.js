let nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");

export default async function handler(req, response) {
  if (req.method === "POST") {
    require("dotenv").config();

    const transport = nodemailer.createTransport(
      nodemailerSendgrid({
        apiKey: process.env.SENDGRID_API_KEY,
      })
    );

    try {
      const [res] = await transport.sendMail({
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
      });

      console.log(
        "Message delivered with code %s %s",
        res.statusCode,
        res.statusMessage
      );
      response.status(200).json(req.body);
    } catch (error) {
      console.log("Errors occurred, failed to deliver message");

      if (err.response && err.response.body && err.response.body.errors) {
        err.response.body.errors.forEach((error) =>
          console.log("%s: %s", error.field, error.message)
        );
      } else {
        console.log(err);
      }

      res.status(err).json({});
    }
  }
}
