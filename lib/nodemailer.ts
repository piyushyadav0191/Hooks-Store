import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: process.env.SERVICE, 
  auth: {
    user: process.env.USER, // generated ethereal user
    pass: process.env.PASS, // generated ethereal password
  },
});

export default transporter;
