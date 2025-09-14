import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BedDouble, Bath, Square, ArrowRight } from "lucide-react";
import { Property } from "@/lib/properties";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.id}`} className="group block">
        <Card className="w-full h-full flex flex-col overflow-hidden shadow-none border-none bg-transparent rounded-none transition-shadow duration-300">
            <CardHeader className="p-0 relative overflow-hidden">
            <Image
                src={property.imageUrl}
                alt={property.title}
                data-ai-hint={property.imageHint}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
            />
            </CardHeader>
            <CardContent className="p-0 pt-4 flex-grow">
            <CardTitle className="text-xl font-headline mb-2">{property.title}</CardTitle>
            <div className="flex items-center text-sm text-muted-foreground space-x-4">
                <div className="flex items-center gap-1.5 font-medium">
                    <BedDouble size={16} />
                    <span>{property.bedrooms} Beds</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                    <Bath size={16} />
                    <span>{property.bathrooms} Baths</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                    <Square size={16} />
                    <span>{property.sqft.toLocaleString()} sqft</span>
                </div>
            </div>
            
            </CardContent>
            <CardFooter className="p-0 pt-4 mt-auto">
                <div className="flex justify-between items-center w-full">
                    <p className="text-lg font-bold text-foreground">${Number(property.price).toLocaleString()}</p>
                    <Button variant="ghost" size="icon" asChild>
                        <span className="h-auto p-0">
                            View Property <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    </Link>
  );
}
