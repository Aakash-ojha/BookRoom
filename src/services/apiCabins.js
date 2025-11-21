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

// This one is for edit and create cabin

export async function upsertCabin(newCabin, id) {
  console.log(newCabin);
  console.log(newCabin.image);

  // const hasImagePathUrl = newCabin.image?.startsWith?.(supabaseUrl);
  const hasImagePathUrl =
    typeof newCabin.image === "string" &&
    newCabin.image.startsWith(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  let query = supabase.from("cabin");

  const imagePath = hasImagePathUrl
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/CabinImage/${imageName}`;

  // create a cabin (if there is no id)
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // edit a cabin if there is an id
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be Created");
  }

  if (hasImagePathUrl) return data;

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
