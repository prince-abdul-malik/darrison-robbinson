"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { handleAddProperty } from "../actions";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const propertyFormSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  address: z.string().min(10, { message: "Address must be at least 10 characters." }),
  price: z.coerce.number().min(1, { message: "Price is required." }),
  bedrooms: z.coerce.number().min(1, { message: "Bedrooms are required." }),
  bathrooms: z.coerce.number().min(1, { message: "Bathrooms are required." }),
  sqft: z.coerce.number().min(100, { message: "Sqft must be at least 100." }),
  imageUrl: z.string().url({ message: "Please enter a valid URL." }).default("https://placehold.co/600x400.png"),
  imageHint: z.string().min(2, { message: "Image hint must be at least 2 characters." }),
});

type PropertyFormValues = z.infer<typeof propertyFormSchema>;

export function AddPropertyForm() {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<PropertyFormValues>({
    resolver: zodResolver(propertyFormSchema),
    defaultValues: {
      title: "",
      address: "",
      price: 0,
      bedrooms: 1,
      bathrooms: 1,
      sqft: 1000,
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "house exterior",
    },
  });

  async function onSubmit(values: PropertyFormValues) {
    setIsLoading(true);
    const result = await handleAddProperty({
        ...values,
        price: String(values.price)
    });

    if (result.success) {
      toast({
        title: "Property Added!",
        description: "The new property has been successfully added.",
      });
      router.push("/admin/properties");
    } else {
        toast({
            variant: "destructive",
            title: "Error",
            description: result.error,
        });
        setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Charming Suburban Home" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 123 Main St, Lexington, SC" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Price ($)</FormLabel>
                <FormControl>
                    <Input type="number" placeholder="e.g., 350000" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="sqft"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Square Feet</FormLabel>
                <FormControl>
                    <Input type="number" placeholder="e.g., 2400" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
            control={form.control}
            name="bedrooms"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Bedrooms</FormLabel>
                <FormControl>
                    <Input type="number" placeholder="e.g., 4" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="bathrooms"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Bathrooms</FormLabel>
                <FormControl>
                    <Input type="number" placeholder="e.g., 3" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input placeholder="https://placehold.co/600x400.png" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageHint"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image AI Hint</FormLabel>
              <FormControl>
                <Input placeholder="e.g., modern house" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Add Property
        </Button>
      </form>
    </Form>
  );
}
