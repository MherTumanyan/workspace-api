const uploadImageService = async (file: Express.Multer.File) => {
  if (!file) {
    throw new Error('No file uploaded');
  }
  // Return the path where the file is stored
  return `/uploads/${file.filename}`;
};

export { uploadImageService };
