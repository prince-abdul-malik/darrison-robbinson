import fs from 'node:fs/promises';
import path from 'node:path';
import { z } from 'zod';

const propertySchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.string(),
  address: z.string(),
  bedrooms: z.number(),
  bathrooms: z.number(),
  sqft: z.number(),
  imageUrl: z.string(),
  imageHint: z.string(),
});

export type Property = z.infer<typeof propertySchema>;

const propertiesSchema = z.array(propertySchema);

// In a real app, this would be a database. For this demo, we'll use a JSON file.
const PROPERTIES_FILE = path.join(process.cwd(), 'data/properties.json');

async function readPropertiesFile(): Promise<Property[]> {
  try {
    const fileContent = await fs.readFile(PROPERTIES_FILE, 'utf-8');
    const data = JSON.parse(fileContent);
    return propertiesSchema.parse(data);
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      // If the file doesn't exist, return an empty array.
      return [];
    }
    console.error("Error reading or parsing properties file:", error);
    throw new Error("Could not load properties.");
  }
}

async function writePropertiesFile(properties: Property[]): Promise<void> {
  try {
    const data = JSON.stringify(properties, null, 2);
    await fs.writeFile(PROPERTIES_FILE, data, 'utf-8');
  } catch (error) {
    console.error("Error writing properties file:", error);
    throw new Error("Could not save properties.");
  }
}

export async function getProperties(): Promise<Property[]> {
  return await readPropertiesFile();
}

export async function getPropertyById(id: number): Promise<Property | undefined> {
    const properties = await readPropertiesFile();
    return properties.find(p => p.id === id);
}

export async function addProperty(propertyData: Omit<Property, 'id'>): Promise<Property> {
  const properties = await readPropertiesFile();
  const newProperty: Property = {
    ...propertyData,
    id: properties.length > 0 ? Math.max(...properties.map(p => p.id)) + 1 : 1,
  };
  
  const updatedProperties = [...properties, newProperty];
  await writePropertiesFile(updatedProperties);
  
  return newProperty;
}
