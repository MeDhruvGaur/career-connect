import supabaseClient from "@/utils/supabase";

export async function getCompanies(token) {
  const supabase = await supabaseClient(token);
  let { data, error } = await supabase.from("companies").select("*");

  if (error) {
    console.error("Error Deleting Companies:", error);
    return null;
  }
  return data;
}
