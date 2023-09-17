import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";


export async function POST(req: NextRequest) { 
    
  const { fullname, email, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ fullname, email, message });

    const response: {
        msg: string[];
        success: boolean;
    } = {
        msg: [],
        success: false
    };

    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList: string[] = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);

      const errorResponse = { msg: errorList };
      return NextResponse.json(errorResponse);
    } else {
      const errorResponse = { msg: ["Unable to send message."] };
      return NextResponse.json(errorResponse);
    }
  }
}
