"use server";
import { connectDB } from "@/utils/mongoosedb";
import User from "@/lib/models/user";
import { saltAndHashPassword } from "@/utils/password";

export const signUp = async (values: any) => {
  const { email, password, name } = values;
  try {
    await connectDB();
    const userFound = await User.findOne({ email });
    if (userFound) {
      return {
        error: "Email already exists!",
      };
    }
    const hashedPassword = await saltAndHashPassword(password);
    const user = new User({
        name,
        email,
        password: hashedPassword
    });
    const savedUser = await user.save();
  } catch (e) {
    console.log(e);
  }
};
