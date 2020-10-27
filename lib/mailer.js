const fs = require("fs");
const mustache = require("mustache");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: process.env.NEXT_PUBLIC_SMTP_SERVER,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_EMAIL,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
});

const send = ({ name, noWa, message }) => {
  const template = fs.readFileSync('./templates/email.html', 'utf8');

  const messageData = {
    from: name,
    to: process.env.NEXT_PUBLIC_SMTP_EMAIL,
    subject: `Permintaan Konsultasi dari ${name}`,
    html: mustache.render(template, { name, noWa, message }),
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(messageData, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

module.exports = send;
