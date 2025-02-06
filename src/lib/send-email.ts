"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  projectType: z.string(),
  message: z.string().min(10),
});

export async function sendEmail(formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    projectType: formData.get("projectType"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return { error: "Invalid form data" };
  }

  // Here you would typically send the email using your preferred email service
  // For demonstration, we'll just return a success message
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate sending

  return { success: true };
}
