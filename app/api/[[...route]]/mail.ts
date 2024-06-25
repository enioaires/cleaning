import { Hono } from "hono";
import sgMail from "@sendgrid/mail";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const mailSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string(),
  message: z.string().min(2).max(500),
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const app = new Hono().post("/", zValidator("json", mailSchema), async (c) => {
  const parsedData = c.req.valid("json");

  const msg = {
    to: "enioaires12@gmail.com", // Change to your recipient
    from: "your-email@example.com", // Change to your verified sender
    subject: "New Contact Form Submission",
    text: `Name: ${parsedData.firstName} ${parsedData.lastName}\nEmail: ${parsedData.email}\nPhone: ${parsedData.phone}\nMessage: ${parsedData.message}`,
  };

  try {
    await sgMail.send(msg);
    return c.json({ success: true });
  } catch (error) {
    console.error(error);
    return c.json({ success: false }, 500);
  }
});

export default app;
