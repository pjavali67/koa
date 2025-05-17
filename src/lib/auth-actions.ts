"use server"

import { neon } from "@neondatabase/serverless"
import { hash } from "bcrypt"
import { randomBytes } from "crypto";
import { sendEmail } from "./email";
//import jwt from "jsonwebtoken";

// import { prisma } from "../lib/prisma"; // adjust this path to your prisma client

// const JWT_SECRET = process.env.JWT_SECRET!;
// const RESET_TOKEN_EXPIRY = parseInt(
//   process.env.RESET_TOKEN_EXPIRY || "3600000"
// ); // 1 hour in ms

const sql = neon(process.env.DATABASE_URL!);

// const JWT_SECRET = process.env.JWT_SECRET!

// Token expiry duration in milliseconds (1 hour)
// const RESET_TOKEN_EXPIRY = 3600000

interface RegisterUserParams {
  name: string;
  email: string;
  password: string;
}

export async function registerUser({
  name,
  email,
  password,
}: RegisterUserParams) {
  try {
    // Check if user already exists
    const existingUser = await sql`
      SELECT * FROM members WHERE email = ${email}
    `.then((res) => res[0]);

    if (existingUser) {
      return { error: "Member with this email already exists" };
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Create user
    await sql`
      INSERT INTO members (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
    `;

    return { success: true };
  } catch (error) {
    console.error("Error registering member:", error);
    return { error: "Failed to register member" };
  }
}

// starting of reset password

export async function sendPasswordResetEmail(email: string) {
  try {
    // Check if user exists
    const member = await sql`
      SELECT * FROM members WHERE email = ${email}
    `.then((res) => res[0]);
    console.log(member, ">>>>>>>", email);

    if (!member) {
      // We don't want to reveal if a user exists or not for security reasons
      return { success: true };
    }

    // Generate token
    const token = randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + 3600000); // 1 hour from now

    // const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
    // const expires = new Date(Date.now() + RESET_TOKEN_EXPIRY); // 1 hour from now

    const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password/${token}`;

    // Delete any existing tokens for this user
    await sql`
      DELETE FROM password_reset_tokens WHERE email = ${email}
    `;

    // Save token
    // await sql`
    //   INSERT INTO password_reset_tokens (email, token, expires)
    //   VALUES (${email}, ${token}, ${expires})
    // `

    await sql`
      INSERT INTO password_reset_tokens (email, token, expires)
      VALUES (${email}, ${token}, ${expires})`;

    // await sql`
    // INSERT INTO password_reset_tokens (email, token, expires)
    // VALUES (${email}, ${token}, to_timestamp(${
    //   Date.now() + RESET_TOKEN_EXPIRY
    // } / 1000.0))`;

    // Send email
    await sendEmail({
      to: email,
      subject: "Reset your password",
      html: `
        <p>You requested a password reset.</p>
        <p>Click <a href="${resetUrl}">here</a> to reset your password.</p>
        <p>If you didn't request this, please ignore this email.</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending password reset email:", error);
    return { error: "Failed to send password reset email" };
  }
}

// end
// new code***********

// export async function sendPasswordResetEmail(email: string) {
//   try {
//     const user = await prisma.user.findUnique({
//       where: { email },
//     });

//     // Always return success to avoid user enumeration
//     if (!user) {
//       return { success: true };
//     }

//     const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
//     const expiresAt = new Date(Date.now() + RESET_TOKEN_EXPIRY);
//     const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password/${token}`;

//     // Delete old tokens for this user
//     await prisma.passwordResetToken.deleteMany({
//       where: { email },
//     });

//     // Store new token
//     await prisma.passwordResetToken.create({
//       data: {
//         email,
//         token,
//         expires: expiresAt,
//       },
//     });

//     // Send reset email
//     await sendEmail({
//       to: email,
//       subject: "Reset your password",
//       html: `
//         <p>You requested a password reset.</p>
//         <p>Click <a href="${resetUrl}">here</a> to reset your password.</p>
//         <p>If you didn’t request this, you can ignore this email.</p>
//       `,
//     });

//     return { success: true };
//   } catch (error) {
//     console.error("Error sending password reset email:", error);
//     return { error: "Failed to send password reset email" };
//   }
// }

//end new code ******************

export async function validateResetToken(token: string) {
  try {
    const resetToken = await sql`
      SELECT * FROM password_reset_tokens 
      WHERE token = ${token} AND expires > NOW()
    `.then((res) => res[0]);

    return !!resetToken;
  } catch (error) {
    console.error("Error validating reset token:", error);
    return false;
  }
}

interface ResetPasswordParams {
  token: string;
  password: string;
}

export async function resetPassword({ token, password }: ResetPasswordParams) {
  try {
    // Find valid token
    const resetToken = await sql`
      SELECT * FROM password_reset_tokens 
      WHERE token = ${token} AND expires > NOW()
    `.then((res) => res[0]);

    if (!resetToken) {
      return { error: "Invalid or expired token" };
    }

    // Hash new password
    const hashedPassword = await hash(password, 10);

    // Update user password
    await sql`
      UPDATE members SET password = ${hashedPassword}
      WHERE email = ${resetToken.email}
    `;

    // Delete used token
    await sql`
      DELETE FROM password_reset_tokens WHERE token = ${token}
    `;

    return { success: true };
  } catch (error) {
    console.error("Error resetting password:", error);
    return { error: "Failed to reset password" };
  }
}
