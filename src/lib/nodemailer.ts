// src/lib/nodemailer.ts
import nodemailer from 'nodemailer';

const { 
  EMAIL_SERVER_HOST,
  EMAIL_SERVER_PORT,
  EMAIL_SERVER_USER,
  EMAIL_SERVER_PASSWORD 
} = process.env;

export const transporter = nodemailer.createTransport({
  host: EMAIL_SERVER_HOST || 'smtp.gmail.com',
  port: 465, // Force 465 for Gmail SSL
  secure: true, // true for 465, false for other ports
  auth: {
    user: EMAIL_SERVER_USER,
    pass: EMAIL_SERVER_PASSWORD?.replace(/\s+/g, ''), // AUTOMATIC FIX: Removes spaces if you accidentally left them
  },
});

export const emailFrom = process.env.EMAIL_FROM || '"GIFON Admin" <noreply@gifon.org.ng>';