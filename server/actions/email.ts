"use server"

import getBaseURL from "@/lib/base-url"
import transporter from "@/lib/nodemailer";

const domain = getBaseURL()

export const sendTwoFactorTokenByEmail = async (email: string, token: string) => {
  const mailOptions = {
    from: 'Hooks Store', // your verified sender email
    to: email,
    subject: 'Hooks Store - Your 2 Factor Token',
    html: `<p>Your Confirmation Code: ${token}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/api/auth/new-verification?token=${token}`;

  const mailOptions = {
    from: 'Hooks Stroe', // your verified sender email
    to: email,
    subject: 'Hooks Store - Confirmation Email',
    html: `<p>Click to <a href='${confirmLink}'>confirm your email</a></p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/api/auth/new-password?token=${token}`;

  const mailOptions = {
    from: '"Hooks Store" <onboarding@yourdomain.com>', // your verified sender email
    to: email,
    subject: 'Hooks Store - Password Reset',
    html: `<p>Click here <a href='${confirmLink}'>to reset your password</a></p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.log(error);
    return error;
  }
};