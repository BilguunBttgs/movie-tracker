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

export const PATCH = async (req: Request) => {
  try {
    const body = await req.json();
    const { userId, password, newPassword } = body;
    if (!userId || !newPassword || !password) {
      return new NextResponse(
        JSON.stringify({
          message: "Missing userId, password or newPassword",
        }),
        { status: 400 }
      );
    }
    const user = await User.findOne({ _id: userId });
    if (password !== user.password) {
      return new NextResponse(
        JSON.stringify({ message: "Incorrect password" }),
        { status: 401 }
      );
    }
    const updateUser = await User.findOneAndUpdate({
      _id: userId,
      password: newPassword,
    });
    return new NextResponse(
      JSON.stringify({ message: "Password change", updateUser }),
      { status: 401 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        message: "Error in change password",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
