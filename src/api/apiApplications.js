import supabaseClient from "@/utils/supabase";

export async function applyToJobs(token, _, jobData) {
  const supabase = await supabaseClient(token);

  const random = Math.florr(Math.random() * 90000);
  const fileName = `resume-${random}-${jobData.candidate_id}`;

  const { error: storageError } = await supabase.storage.from(
    "resumes".upload(fileName, jobData.resume)
  );

  if (storageError) {
    console.error("Error Uploading Resume:", error);
    return null;
  }

  const resume = `${supabaseUrl}/storage/v1/object/public/resumes/${fileName}`;

  const { data, error } = await supabase
    .from("applications")
    .insert([
      {
        ...jobData,
        resume,
      },
    ])
    .select();

  if (error) {
    console.error("Error Submitting Applications:", error);
    return null;
  }
  return data;
}
