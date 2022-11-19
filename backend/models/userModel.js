import mongoose from 'mongoose'
const userModel = mongoose.Schema(
  {
    registered_by: {
      type: String,
      //required: true,
     // ref: 'Admin',
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    },
    companyName: {
      type:String,
      required:true,
      default: "Logo Here"
    },
    user_id: {
      type:Number, 
      //required:true
    },    
    role:{
      type: String,
      required: true,
      default:"moderator"
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    isModerator: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('users', userModel)
export default User
