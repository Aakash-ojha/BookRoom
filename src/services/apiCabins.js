import supabase from "./supabase";

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
  const { data, error } = await supabase
    .from("cabin")
    .insert([newCabin])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be Created");
  }
  return data;
}
