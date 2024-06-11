import supabase from "./supabase";

export async function getCabins() {
  const { data: Cabins, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be loaded");
  }

  return data;
}
