"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Home, DollarSign, Bed, Bath, Search } from 'lucide-react';
import { useState } from "react";

const searchSchema = z.object({
  location: z.string().optional(),
  propertyType: z.string().optional(),
  priceRange: z.array(z.number()).default([50000, 1000000]).optional(),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
});

export function PropertySearchForm() {
  const { toast } = useToast();
  const [priceRange, setPriceRange] = useState([100000, 750000]);

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      location: "",
      propertyType: "any",
      priceRange: [100000, 750000],
      bedrooms: "any",
      bathrooms: "any",
    },
  });

  function onSubmit(values: z.infer<typeof searchSchema>) {
    console.log(values);
    toast({
      title: "Search Submitted!",
      description: "We are looking for properties that match your criteria.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          <div className="lg:col-span-2">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 font-semibold"><MapPin size={16}/> Location</FormLabel>
                  <FormControl>
                    <Input placeholder="City, State, or Zip Code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 font-semibold"><Home size={16}/> Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="bedrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 font-semibold"><Bed size={16}/> Beds</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                      <SelectItem value="5">5+</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bathrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 font-semibold"><Bath size={16}/> Baths</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <Button type="submit" className="w-full h-10 font-bold">
            <Search size={18} className="mr-2"/>
            Search
          </Button>
        </div>
        
        <FormField
          control={form.control}
          name="priceRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 font-semibold"><DollarSign size={16}/> Price Range</FormLabel>
              <div className="text-sm font-bold text-center text-foreground">
                ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}{priceRange[1] === 1000000 ? '+' : ''}
              </div>
              <FormControl>
                <Slider
                  min={50000}
                  max={1000000}
                  step={10000}
                  value={priceRange}
                  onValueChange={(value) => {
                      setPriceRange(value);
                      field.onChange(value);
                  }}
                  className="py-2"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
