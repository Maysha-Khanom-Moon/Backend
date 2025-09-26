import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: 6
    },
    isActive: Boolean    
  },
  { 
    timestamps: true 
  }
);

export const User = mongoose.model("User", userSchema);


// in code: model always in singular form (User) --> programming convention

// in database: model always in plural form and small letters (users)
// whatever you write User, Users, user or users, mongoose will create a collection named users