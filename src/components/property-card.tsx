import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BedDouble, Bath, Square } from "lucide-react";
import { Property } from "@/lib/properties";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.id}`} className="group block h-full">
        <Card className="w-full h-full flex flex-col overflow-hidden shadow-lg bg-card border border-border/20 rounded-none transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2">
            <CardHeader className="p-0 relative overflow-hidden">
                <Badge className={cn("absolute top-3 right-3 z-10 rounded-sm", property.status === "Sold" ? "bg-destructive" : "bg-primary")}>
                    {property.status}
                </Badge>
                <Image
                    src={property.imageUrl}
                    alt={property.title}
                    data-ai-hint={property.imageHint}
                    width={600}
                    height={400}
                    className="object-cover w-full h-56 transition-transform duration-300 group-hover:scale-105"
                />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
                <p className="text-lg font-bold text-primary mb-2">
                    {property.status === "Sold" ? "Sold for " : ""}${Number(property.price).toLocaleString()}
                </p>
                <CardTitle className="text-xl font-headline font-bold mb-2">{property.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{property.address}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0 mt-auto bg-transparent border-t border-border/20">
                <div className="flex items-center text-sm text-muted-foreground space-x-4 w-full">
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
            </CardFooter>
        </Card>
    </Link>
  );
}
