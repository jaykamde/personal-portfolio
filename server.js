const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5001; // Changed to 5001

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "********@gmail.com", // Replace with your email
    pass: "********", // Replace with your app password
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Email service error:", error);
  } else {
    console.log("Ready to Send Emails");
  }
});

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`;
  
  const mail = {
    from: name,
    to: "********@gmail.com", // Replace with your email
    subject: "Contact Form Submission - Portfolio",
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Email sending error:", error);
      res.status(500).json({ success: false, message: "Failed to send message" });
    } else {
      res.status(200).json({ success: true, message: "Message sent successfully" });
    }
  });
});
