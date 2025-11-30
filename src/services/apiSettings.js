import supabase from "./supabase";

export async function getSetting() {
  let { data: settings, error } = await supabase
    .from("settings")
    .select("*")
    .single();

  if (error) {
    console.log(error);
    throw new Error("Settings could not be loaded");
  }

  return settings;
}

export async function updateSetting(newSettings) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSettings)
    .eq("id", 1)
    .select();

  if (error) {
    console.log(error);
    throw new Error("Settings could not be update");
  }

  return data;
}
