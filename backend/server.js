require("dotenv").config();
const express    = require("express");
const cors       = require("cors");
const nodemailer = require("nodemailer");
<<<<<<< HEAD
=======
const mongoose   = require("mongoose");
>>>>>>> 8a8adb5 (Fix changes)

const app  = express();
const PORT = process.env.PORT || 4000;

<<<<<<< HEAD
=======
// ── MongoDB connection ────────────────────────────────────────────────────────
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/rochan_ideas";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log(`✅ MongoDB connected → ${MONGO_URI}`))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ── Contact Submission Schema ─────────────────────────────────────────────────
const contactSchema = new mongoose.Schema(
  {
    name:      { type: String, required: true, trim: true },
    email:     { type: String, required: true, trim: true, lowercase: true },
    phone:     { type: String, required: true },
    service:   { type: String, default: "Not specified" },
    message:   { type: String, default: "" },
    submittedAt: { type: Date, default: Date.now },
  },
  { collection: "contact_submissions" }
);

const ContactSubmission = mongoose.model("ContactSubmission", contactSchema);

>>>>>>> 8a8adb5 (Fix changes)
// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({
  origin: [
    "http://localhost:8443",
    "http://localhost:3000",
    "http://localhost:5173",
    process.env.FRONTEND_URL,
  ].filter(Boolean),
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json());

// ── Nodemailer transporter ────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,  // your Gmail address
    pass: process.env.EMAIL_PASS,  // your Gmail App Password (NOT your Gmail login password)
  },
});

// ── POST /api/contact ─────────────────────────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  // Basic server-side validation
  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Name, email, and phone are required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.com$/.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }
  if (!/^\d{10}$/.test(phone)) {
    return res.status(400).json({ error: "Phone must be exactly 10 digits." });
  }

  // Build email content
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #f9ad35, #f2761e); padding: 24px 32px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
        <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">Rochan Ideas Pvt. Ltd. — Website</p>
      </div>
      <div style="background: #ffffff; padding: 32px; border: 1px solid #e8e8e8; border-top: none; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; color: #888; font-size: 13px; width: 130px;">Name</td><td style="padding: 10px 0; font-weight: 600; color: #252525;">${name}</td></tr>
          <tr style="background: #fafafa;"><td style="padding: 10px 8px; color: #888; font-size: 13px;">Email</td><td style="padding: 10px 8px; font-weight: 600; color: #f7a92c;">${email}</td></tr>
          <tr><td style="padding: 10px 0; color: #888; font-size: 13px;">Phone</td><td style="padding: 10px 0; font-weight: 600; color: #252525;">+91-${phone}</td></tr>
          <tr style="background: #fafafa;"><td style="padding: 10px 8px; color: #888; font-size: 13px;">Service</td><td style="padding: 10px 8px; color: #1565c0; font-weight: 600;">${service || "Not specified"}</td></tr>
        </table>
        ${message ? `
        <div style="margin-top: 20px; padding: 16px; background: #f8f9fa; border-left: 4px solid #f7a92c; border-radius: 4px;">
          <p style="margin: 0 0 8px; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
          <p style="margin: 0; color: #252525; line-height: 1.6;">${message}</p>
        </div>` : ""}
        <p style="margin-top: 24px; color: #aaa; font-size: 12px; text-align: center;">
          Sent from the Rochan Ideas website contact form · ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
        </p>
      </div>
    </div>
  `;

  try {
<<<<<<< HEAD
=======
    // ── Save to MongoDB ─────────────────────────────────────────────────────
    try {
      await ContactSubmission.create({ name, email, phone, service, message });
      console.log(`💾 Submission saved to MongoDB for ${name} (${email})`);
    } catch (dbErr) {
      // Non-fatal: log DB error but continue with email sending
      console.error("⚠️  MongoDB save error:", dbErr.message);
    }

>>>>>>> 8a8adb5 (Fix changes)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      // Send to Rochan Ideas inbox
      await transporter.sendMail({
        from: `"Rochan Ideas Website" <${process.env.EMAIL_USER}>`,
        to: process.env.NOTIFY_EMAIL || "rochanideas@gmail.com",
        subject: `New Enquiry from ${name} — ${service || "General"}`,
        html,
        replyTo: email,
      });

      // Auto-reply to the user
      await transporter.sendMail({
        from: `"Rochan Ideas Pvt. Ltd." <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "We received your message — Rochan Ideas",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 32px;">
            <h2 style="color: #f7a92c;">Thank you, ${name.split(" ")[0]}!</h2>
            <p style="color: #454545; line-height: 1.6;">
              We have received your enquiry and our team will get back to you within 24 hours.
            </p>
            <p style="color: #454545; line-height: 1.6;">
              In the meantime, feel free to reach us directly:<br>
              📞 <strong>+91-6303074930</strong><br>
              📧 <strong>rochanideas@gmail.com</strong>
            </p>
            <hr style="border: none; border-top: 1px solid #e8e8e8; margin: 24px 0;">
            <p style="color: #aaa; font-size: 12px;">— Rochan Ideas Pvt. Ltd., Nellore, Andhra Pradesh</p>
          </div>
        `,
      });

      console.log(`✅ Email sent for enquiry from ${name} (${email})`);
    } else {
      // Emails not configured — just log to console
      console.log("⚠️  Email not configured. Logging submission:");
      console.log({ name, email, phone, service, message });
      console.log("ℹ️  To enable emails, copy backend/.env.example to backend/.env and fill in your credentials.");
    }

    return res.status(200).json({ success: true, message: "Message received successfully." });
  } catch (err) {
<<<<<<< HEAD
    console.error("❌ Email error:", err);
    return res.status(500).json({ error: "Failed to send email. Please try again later." });
=======
    console.error("❌ Error:", err);
    return res.status(500).json({ error: "Failed to process your request. Please try again later." });
>>>>>>> 8a8adb5 (Fix changes)
  }
});

// ── Health check ──────────────────────────────────────────────────────────────
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// ── Start server ──────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Rochan Ideas API running on http://localhost:${PORT}`);
<<<<<<< HEAD
  console.log(`   Health check: http://localhost:${PORT}/api/health\n`);
=======
  console.log(`   Health check: http://localhost:${PORT}/api/health`);
  console.log(`   MongoDB URI:   ${MONGO_URI}\n`);
>>>>>>> 8a8adb5 (Fix changes)
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("⚠️  Email not configured. Copy backend/.env.example → backend/.env");
    console.log("   Contact form submissions will be logged to console only.\n");
  }
});
