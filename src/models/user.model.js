
import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,//it will create an index on the username field for faster queries

    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullName:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar:{
        type: String,
        required: true
    },
    coverImage:{
        type: String,
    },
    watchHistory:[{
        type: Schema.Types.ObjectId,
        ref: "Video"
    }],
    password:{
        type: String,
        required: [true, "Password is required"],
        
    },
    refreshToken:{
        type: String,
        
    },
},{timestamps: true});


userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();

        this.password = await bcrypt.hash(this.password, 10);
        next();
    

        userSchema.methods.comparePassword = async function (password) {
            return await bcrypt.compare(password, this.password);
        }
        userSchema.methods.generateAccessToken = function () {
            jwt.sign({
                _id : this._id,
                email: this.email,
                username: this.username,
                fullName: this.fullName,
            },
            process.env.JWT_ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN
            }
        )
        }
        userSchema.models.generateRefreshToken = function () {
            jwt.sign({
                _id : this._id,
                email: this.email,
                username: this.username,
                fullName: this.fullName,
            },
            process.env.JWT_REFRESH_TOKEN_SECRET,
            {
                expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN
            })
        }
})
export const User = mongoose.model("User", userSchema);  