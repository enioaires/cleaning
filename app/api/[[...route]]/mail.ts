import { Hono } from "hono";
import axios from "axios";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const mailSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string(),
  message: z.string().min(2).max(500),
});

const app = new Hono();

app.post("/", zValidator("json", mailSchema), async (c) => {
  const parsedData = c.req.valid("json");

  const templateParams = {
    from_name: `${parsedData.firstName} ${parsedData.lastName}`,
    from_email: parsedData.email,
    phone: parsedData.phone,
    message: parsedData.message,
    to_email: "enioaires12@gmail.com",
  };

  const payload = {
    service_id: process.env.EMAIL_SERVICE_ID!,
    template_id: process.env.EMAIL_TEMPLATE_ID!,
    user_id: process.env.EMAIL_USER_ID!,
    template_params: templateParams,
  };

  try {
    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response from EmailJS API:", response.data);

    if (response.status === 200) {
      return c.json({ success: true });
    } else {
      // console.error("Failed to send email:", response.data);
      return c.json({ success: false }, 500);
    }
  } catch (error) {
    // console.error("Error sending email:", error);
    return c.json({ success: false }, 500);
  }
});

export default app;
