import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'yusif.200251370481@gmail.com',
        pass: 'bomqoeidvcseyrqs'
  },
});

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  // Server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  try {
    // Send email
    await transporter.sendMail({
      from: "your-email@gmail.com",
      to: "your-email@gmail.com",
      subject: "New message from contact form",
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred while sending the email" });
  }
}