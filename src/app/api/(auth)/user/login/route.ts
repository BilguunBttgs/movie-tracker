import { NextResponse } from "next/server";

import { connectDb } from "@/lib/db";
import User from "@/lib/models/user";
export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { email, password } = body;
    if (!email || !password) {
      return new NextResponse(
        JSON.stringify({ message: "Missing email or password" }),
        { status: 401 }
      );
    }
    await connectDb();
    const user = await User.findOne({ email });
    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 401,
      });
    }
    if (user.password !== password) {
      return new NextResponse(
        JSON.stringify({ message: "Incorrect password" }),
        {
          status: 401,
        }
      );
    }
    return new NextResponse(
      JSON.stringify({ message: "User succesfully logged in", user }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error in login", error }),
      { status: 500 }
    );
  }
};
