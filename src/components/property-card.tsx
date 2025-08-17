import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BedDouble, Bath, Square, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Property } from "@/lib/properties";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="w-full h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-accent group">
      <CardHeader className="p-0 relative">
        <Image
          src={property.imageUrl}
          alt={property.title}
          data-ai-hint={property.imageHint}
          width={600}
          height={400}
          className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">${Number(property.price).toLocaleString()}</Badge>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl font-headline mb-1 truncate">{property.title}</CardTitle>
        <CardDescription className="flex items-center gap-1 text-sm text-muted-foreground mb-3 truncate">
            <MapPin size={14} /> {property.address}
        </CardDescription>
        <div className="flex justify-around items-center text-sm text-muted-foreground border-t border-b py-3">
            <div className="flex items-center gap-2">
                <BedDouble size={18} className="text-accent"/>
                <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-2">
                <Bath size={18} className="text-accent"/>
                <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-2">
                <Square size={18} className="text-accent"/>
                <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">View Details</Button>
      </CardFooter>
    </Card>
  );
}
