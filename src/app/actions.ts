
"use server";

import { generatePropertyDescription, GeneratePropertyDescriptionInput } from "@/ai/flows/generate-property-description";

export async function handleGenerateDescription(input: GeneratePropertyDescriptionInput) {
  try {
    const output = await generatePropertyDescription(input);
    return { success: true, description: output.description };
  } catch (error) {
    console.error("Error generating description:", error);
    return { success: false, error: "Failed to generate description. Please try again." };
  }
}
