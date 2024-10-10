import { NextResponse } from "next/server";

import { connectDb } from "@/lib/db";
import User from "@/lib/models/user";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    await connectDb();
    const user = new User(body);
    await user.save();
    return new NextResponse(
      JSON.stringify({ message: "User succesfully created", user }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        message: "Error in creating user",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
