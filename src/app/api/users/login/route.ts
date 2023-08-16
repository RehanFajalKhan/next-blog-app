import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return NextResponse.json(
        {
          error: "user does not exist!",
        },
        { status: 401 }
      );
    }
    const validPassword = await bcryptjs.compare(password, user.password);
    console.log(validPassword);

    if (!validPassword) {
      return NextResponse.json({ error: "invalid password!" }, { status: 403 });
    }
    //payload
    const tokenData = {
      id: user._id,
      name: user.username,
      email: user._email,
    };
    //generate token
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });
    const response = NextResponse.json({
      message: "login successsfully",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
