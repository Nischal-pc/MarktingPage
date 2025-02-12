import { FormData } from "./schema";
export async function submitForm(data: FormData) {
  console.log(data);
  try {
    const response = await fetch(
      "https://hooks.zapier.com/hooks/catch/7641205/2wyf4cx/",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    console.log(response);
    return;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}
