import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data: cabin, error } = await supabase.from("cabin").select("*");

  if (error) {
    console.log(error);
    throw new Error("cabins could not be loaded");
  }
  return cabin;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabin").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }
  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  // const imagePath = `${supabaseUrl}/storage/v1/object/sign/CabinImage/${imageName}`;

  const imagePath = `${supabaseUrl}/storage/v1/object/public/CabinImage/${imageName}`;
  // const imagePath = `CabinImage/${imageName}`;

  const { data, error } = await supabase
    .from("cabin")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be Created");
  }

  // upload image
  const { error: StorageError } = await supabase.storage
    .from("CabinImage")
    .upload(imageName, newCabin.image);

  //Delete the cabin if an error occur while uploading the image
  if (StorageError) {
    await supabase.from("cabin").delete().eq("id", data.id);
    console.log(StorageError);
    throw new Error("Failed to upload cabin image. Cabin creation aborted.");
  }

  return data;
}
