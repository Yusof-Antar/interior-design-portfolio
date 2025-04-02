// lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

async function getSession() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "youssof.antar@gmail.com",
    password: "xNTx6014732#",
  });

  return data;
}

// Function to upload a file to Supabase Storage
export async function uploadFile(file, bucketName, folder) {
  try {
    const fileName = `${folder}/${Date.now()}-${file.name}`;

   
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file);

    if (error) throw error;

    // Get the public URL of the uploaded file
    const { data: fileData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(fileName);

    return fileData.publicUrl; // Return the public URL
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("Failed to upload file");
  }
}
