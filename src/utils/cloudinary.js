import { v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;//file upload failed
        const responce = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto",
        })
        console.log("File uploaded successfully to Cloudinary:", responce.url);
        return responce;
        
    }catch (error) {
        fs.unlinkSync(localFilePath); // delete the file if upload fails
        return null
    }
}

export { uploadOnCloudinary };
