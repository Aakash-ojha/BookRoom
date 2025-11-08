import supabase from "./supabase";

export async function getCabins() {
  const { data: cabin, error } = await supabase.from("cabin").select("*");

  if (error) {
    console.log(error);
    throw new Error("cabins could not be loaded");
  }
  return cabin;
}
