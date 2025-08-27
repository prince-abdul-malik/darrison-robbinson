
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { handleGenerateDescription } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Wand2, Clipboard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const descriptionSchema = z.object({
  propertyDetails: z.string().min(50, { message: "Please provide at least 50 characters of details." }),
  tone: z.enum(["professional", "friendly", "luxurious"], {
    required_error: "You need to select a tone.",
  }),
});

type DescriptionFormValues = z.infer<typeof descriptionSchema>;

const toneOptions = [
  { value: "professional", label: "Professional" },
  { value: "friendly", label: "Friendly & Welcoming" },
  { value: "luxurious", label: "Luxurious & Elegant" },
];

export function DescriptionGeneratorForm() {
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<DescriptionFormValues>({
    resolver: zodResolver(descriptionSchema),
    defaultValues: {
      propertyDetails: "",
      tone: "professional",
    },
  });

  const onSubmit = async (data: DescriptionFormValues) => {
    setIsLoading(true);
    setGeneratedDescription(null);
    
    const result = await handleGenerateDescription(data);

    if (result.success) {
      setGeneratedDescription(result.description ?? "");
    } else {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: result.error,
      });
    }

    setIsLoading(false);
  };
  
  const copyToClipboard = () => {
    if (generatedDescription) {
      navigator.clipboard.writeText(generatedDescription);
      toast({
        title: "Copied to Clipboard!",
        description: "The property description has been copied.",
      });
    }
  };

  return (
    <div className="grid gap-12 md:grid-cols-2">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Property Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="propertyDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Key Features & Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 4 bedrooms, 3 bathrooms, 2400 sqft, open concept kitchen with granite countertops, large fenced backyard, located in a quiet cul-de-sac..."
                        rows={8}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tone"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Choose a Tone</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        {toneOptions.map((option) => (
                           <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                           <FormControl>
                             <RadioGroupItem value={option.value} />
                           </FormControl>
                           <FormLabel className="font-normal">{option.label}</FormLabel>
                         </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Generate Description
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Generated Description</CardTitle>
          {generatedDescription && (
            <Button variant="ghost" size="icon" onClick={copyToClipboard}>
              <Clipboard className="h-5 w-5"/>
              <span className="sr-only">Copy to clipboard</span>
            </Button>
          )}
        </CardHeader>
        <CardContent className="min-h-[300px] relative">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/50 rounded-md">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="mt-4 text-muted-foreground">Generating...</p>
            </div>
          )}
          {generatedDescription ? (
            <div className="text-sm whitespace-pre-wrap leading-relaxed">{generatedDescription}</div>
          ) : (
            !isLoading && (
              <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                <Wand2 className="h-12 w-12 mb-4" />
                <p>Your AI-generated property description will appear here.</p>
              </div>
            )
          )}
        </CardContent>
      </Card>
    </div>
  );
}
