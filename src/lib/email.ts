// "use server"

// import nodemailer from "nodemailer"

// interface SendEmailParams {
//   to: string
//   subject: string
//   html: string
// }

// export async function sendEmail({ to, subject, html }: SendEmailParams) {
//   const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, EMAIL_FROM } = process.env
// console.log(process.env);
//   // For development, you can use a test account from Ethereal
//   let testAccount
//   let transporter

//   if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
//     // Create a test account for development
//     testAccount = await nodemailer.createTestAccount()

//     transporter = nodemailer.createTransport({
//       host: "smtp.ethereal.email",
//       port: 587,
//       secure: false,
//       auth: {
//         user: testAccount.user,
//         pass: testAccount.pass,
//       },
//     })
//   } else {
//     // Use configured SMTP server
//     transporter = nodemailer.createTransport({
//       host: SMTP_HOST,
//       port: Number(SMTP_PORT),
//       secure: Number(SMTP_PORT) === 465,
//       auth: {
//         user: SMTP_USER,
//         pass: SMTP_PASSWORD,
//       },
//     })
//   }

//   const info = await transporter.sendMail({
//     from: EMAIL_FROM || `"Next.js Auth" <${testAccount?.user || SMTP_USER}>`,
//     to,
//     subject,
//     html,
//   })

//   if (testAccount) {
//     // Log Ethereal URL for preview in development
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
//   }

//   return info
// }

"use server";

import nodemailer from "nodemailer";

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailParams) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, EMAIL_FROM } =
    process.env;

  let transporter;

  // If environment variables are missing, use Ethereal for dev/testing
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    const testAccount = await nodemailer.createTestAccount();

    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const info = await transporter.sendMail({
      from: `"Dev Mailer" <${testAccount.user}>`,
      to,
      subject,
      html,
    });

    console.log("✅ Email sent (dev):", nodemailer.getTestMessageUrl(info));
    return info;
  }

  // Use real SMTP configuration
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: false, // true for 465, false for 587
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: EMAIL_FROM || `"Next.js Auth" <${SMTP_USER}>`,
    to,
    subject,
    html,
  });

  console.log("✅ Email sent");
  return info;
}
