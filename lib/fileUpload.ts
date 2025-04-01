// lib/fileUpload.ts
import { writeFile } from "fs/promises";
import { join } from "path";
import fs from "fs";

/**
 * Uploads a file to a dynamically specified folder.
 *
 * @param file - The file object to upload.
 * @param uploadBaseDir - The base directory where files are uploaded (e.g., 'public/uploads').
 * @param folderName - The name of the subfolder to save the file in.
 * @param options - Optional configurations.
 * @returns The relative path of the uploaded file.
 * @throws An error if the file cannot be saved.
 */
export async function uploadFile(
  file: File,
  uploadBaseDir: string,
  folderName: string,
  options: {
    generateFileName?: (file: File) => string;
  } = {}
): Promise<string> {
  try {
    // Define the full upload directory (base + folderName)
    const uploadDir = join(uploadBaseDir, folderName);

    // Ensure the upload directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true }); // Create the directory if it doesn't exist
    }

    // Generate a unique filename if no custom generator is provided
    const generateFileName =
      options.generateFileName ||
      ((file: File) =>
        `${Date.now()}-${Math.random().toString(36).substring(7)}-${
          file.name
        }`);

    const fileName = generateFileName(file);
    const filePath = join(uploadDir, fileName);

    // Convert the file to a Buffer and save it
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(filePath, buffer);

    return `/uploads/${folderName}/${fileName}`; // Return the public URL path
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("Failed to upload file");
  }
}
