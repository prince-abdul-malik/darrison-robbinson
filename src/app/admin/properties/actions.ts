"use server";

import { addProperty } from "@/lib/properties";
import { revalidatePath } from "next/cache";

type AddPropertyData = {
    title: string;
    address: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    imageUrl: string;
    imageHint: string;
}

export async function handleAddProperty(data: AddPropertyData) {
    try {
        await addProperty(data);
        revalidatePath('/');
        revalidatePath('/admin/properties');
        return { success: true };
    } catch (error) {
        console.error("Error adding property:", error);
        return { success: false, error: "Failed to add property. Please try again." };
    }
}
