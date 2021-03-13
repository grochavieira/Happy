import cloudinary from "../utils/cloudinary";

const cloudinaryUpload = async (imageData: string) => {
  try {
    const uploadedResponse = await cloudinary.uploader.upload(imageData, {
      upload_preset: "happy",
      timeout: 1200000,
    });
    console.log({ uploadedResponse });
    return {
      public_id: uploadedResponse.public_id,
      url: uploadedResponse.secure_url,
    };
  } catch (error) {
    console.log(error);
  }
};

export default cloudinaryUpload;
