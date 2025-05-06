import { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

const handler: Handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body || "{}");

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: "Missing fields",
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.CONTACT_EMAIL,
    subject: `New message from ${name}`,
    text: `Email: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: "Email sent successfully!",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Email failed: ${(error as Error).message}`,
    };
  }
};

export { handler };
