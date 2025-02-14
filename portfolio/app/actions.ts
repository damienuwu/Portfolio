"use server";

export async function submitContactForm(formData: FormData) {
  const nodemailer = await import("nodemailer");

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { message: "All fields are required!" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Must be your Gmail
      to: process.env.RECEIVER_EMAIL, // The email where you want to receive messages
      replyTo: email, // This makes "Reply" go to the sender
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    return { message: "Your message has been sent successfully!" };
  } catch (error) {
    console.error("Email error:", error);
    return { message: "Failed to send message. Please try again." };
  }
}
