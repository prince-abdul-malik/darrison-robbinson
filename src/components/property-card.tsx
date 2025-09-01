import Image from "next/image";
import Link from "next/link";
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
    <Card className="w-full h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
        <CardHeader className="p-0 relative">
          <Image
            src={property.imageUrl}
            alt={property.title}
            data-ai-hint={property.imageHint}
            width={600}
            height={400}
            className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-3 right-3 text-sm font-bold">${Number(property.price).toLocaleString()}</Badge>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="text-xl font-headline mb-1 truncate">{property.title}</CardTitle>
          <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground mb-4 truncate">
              <MapPin size={14} /> {property.address}
          </CardDescription>
          <div className="flex justify-around items-center text-sm text-muted-foreground border-t border-b py-3 my-3">
              <div className="flex items-center gap-2 font-medium">
                  <BedDouble size={18} className="text-primary"/>
                  <span>{property.bedrooms} Beds</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                  <Bath size={18} className="text-primary"/>
                  <span>{property.bathrooms} Baths</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                  <Square size={18} className="text-primary"/>
                  <span>{property.sqft.toLocaleString()} sqft</span>
              </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 mt-auto">
          <Button asChild className="w-full font-bold">
            <Link href="#" target="_blank" rel="noopener noreferrer">View on Zillow</Link>
          </Button>
        </CardFooter>
    </Card>
  );
}

    