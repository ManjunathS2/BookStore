import { User } from '../model/user.model.js';
import bcrypt from 'bcryptjs';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name:name,
      email: email,
      password: hashpassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user:{
      _id:newUser._id,
      name:newUser.name,
      email:newUser.email
    } });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({message:"Internal server error"});
  }
};

export const loginUser = async (req, res) => {
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        const isMatch=await bcrypt.compare(password,user.password);
        if(!user||!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }else{
            res.status(200).json({
              message: "Login successful",
              user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
                password: user.password
              }
            });
       }
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({message:"Internal server error"});
        
    }

}