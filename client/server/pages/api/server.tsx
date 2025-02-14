// pages/api/signUp.ts
import { NextApiRequest, NextApiResponse } from "next";

const signUp = async (email: string, username: string, phoneNumber: string, password: string) => {
  console.log("New user created:", { email, username, phoneNumber, password });

  return { success: true, message: "User signed up successfully" };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, username, phoneNumber, password } = req.body;

    if (!email || !username || !phoneNumber || !password) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    try {
      const result = await signUp(email, username, phoneNumber, password);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ success: false, message: "Sign-up failed" });
    }
  } else {
    // Method Not Allowed
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
