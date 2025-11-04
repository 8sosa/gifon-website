// src/lib/nodemailer.ts
import nodemailer from 'nodemailer';

const { 
  EMAIL_SERVER_HOST,
  EMAIL_SERVER_PORT,
  EMAIL_SERVER_USER,
  EMAIL_SERVER_PASSWORD 
} = process.env;

if (!EMAIL_SERVER_HOST || !EMAIL_SERVER_PORT || !EMAIL_SERVER_USER || !EMAIL_SERVER_PASSWORD) {
  console.warn(
    'Email server environment variables not set. Emails will not be sent.'
  );
}

export const transporter = nodemailer.createTransport({
  host: EMAIL_SERVER_HOST,
  port: parseInt(EMAIL_SERVER_PORT || '587', 10), // 465 is for secure (SSL)
  secure: parseInt(EMAIL_SERVER_PORT || '587', 10) === 465, // true for 465, false for others
  auth: {
    user: EMAIL_SERVER_USER,
    pass: EMAIL_SERVER_PASSWORD,
  },
});

export const emailFrom = process.env.EMAIL_FROM || 'noreply@gifon.org.ng';