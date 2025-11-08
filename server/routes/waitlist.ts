import { RequestHandler } from "express";
import { WaitlistRequest, WaitlistResponse } from "@shared/api";

// In-memory storage for demo (in production, use a database)
const waitlistEmails = new Set<string>();

export const handleWaitlist: RequestHandler = (req, res) => {
  try {
    const { email } = req.body as WaitlistRequest;

    // Validate email
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      res.status(400).json({
        success: false,
        message: "Invalid email address",
      } as WaitlistResponse);
      return;
    }

    // Check if email already exists
    if (waitlistEmails.has(email.toLowerCase())) {
      res.status(400).json({
        success: false,
        message: "Email already on waitlist",
      } as WaitlistResponse);
      return;
    }

    // Add to waitlist
    waitlistEmails.add(email.toLowerCase());

    res.json({
      success: true,
      message: "Successfully joined the waitlist",
    } as WaitlistResponse);
  } catch (error) {
    console.error("Waitlist error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while joining the waitlist",
    } as WaitlistResponse);
  }
};
