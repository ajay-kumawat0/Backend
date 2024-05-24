import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = (localFilePath) => {
  try {
    if(!localFilePath) return null;
    // Upload the file on cloudinary
    const response = cloudinary.uploader.upload(localFilePath,{
        resource_type : "auto"
    })
    // File upload successfully on cloudinary
    console.log("File upload successfully on cloudinary", response.url);
    return response
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved tempory file as the uploaded operation failed 
  }
};

export {uploadOnCloudinary}