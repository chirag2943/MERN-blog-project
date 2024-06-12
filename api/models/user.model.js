import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture: {
        type:String,
        default: "https://imgs.search.brave.com/xRLAOStYtw4m5_8Pov_PBYMh7lmcrkLzavkwcT3lVHU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzUy/LzM2MF9GXzY0Njc1/MjA5Xzd2ZTJYUUFO/dXp1SGpNWlhQM2FJ/WUlwc0RLRWJGNWRE/LmpwZw",
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},{timestamps: true}
);

const User = mongoose.model('User',userSchema);

export default User;