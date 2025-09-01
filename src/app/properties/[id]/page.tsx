import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getPropertyById } from "@/lib/properties";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BedDouble, Bath, Square, MapPin, Building, Calendar, LandPlot } from "lucide-react";

export default async function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const propertyId = parseInt(params.id, 10);
  const property = await getPropertyById(propertyId);

  if (!property) {
    notFound();
  }

  const details = [
    { label: "Price", value: `$${Number(property.price).toLocaleString()}`, icon: <Badge className="text-lg font-bold">${Number(property.price).toLocaleString()}</Badge> },
    { label: "Bedrooms", value: `${property.bedrooms} Beds`, icon: <BedDouble size={24} className="text-primary"/> },
    { label: "Bathrooms", value: `${property.bathrooms} Baths`, icon: <Bath size={24} className="text-primary"/> },
    { label: "Area", value: `${property.sqft.toLocaleString()} sqft`, icon: <Square size={24} className="text-primary"/> },
    { label: "Type", value: "Single Family", icon: <Building size={24} className="text-primary"/> },
    { label: "Year Built", value: "2010", icon: <Calendar size={24} className="text-primary"/> },
    { label: "Lot Size", value: "0.25 acres", icon: <LandPlot size={24} className="text-primary"/> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-6 md:px-10 py-12">
        <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden">
                <CardHeader className="p-0">
                     <Image
                        src={property.imageUrl}
                        alt={property.title}
                        data-ai-hint={property.imageHint}
                        width={1200}
                        height={600}
                        className="object-cover w-full h-64 md:h-96"
                    />
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="mb-6">
                        <Badge className="text-lg font-bold">${Number(property.price).toLocaleString()}</Badge>
                    </div>
                    <CardTitle className="text-3xl md:text-4xl font-headline mb-2">{property.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-lg text-muted-foreground mb-8">
                        <MapPin size={18} /> {property.address}
                    </CardDescription>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 mb-8 border-t border-b py-8">
                        {details.slice(1).map(detail => (
                            <div key={detail.label} className="flex flex-col items-center text-center gap-2">
                                {detail.icon}
                                <span className="text-xl font-bold">{detail.value.split(' ')[0]}</span>
                                <span className="text-muted-foreground text-sm">{detail.label}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-2xl font-headline font-bold mb-4">Property Description</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Welcome to this stunning {property.bedrooms}-bedroom, {property.bathrooms}-bathroom home located at {property.address}. Spanning {property.sqft.toLocaleString()} square feet, this property offers a perfect blend of comfort and style. The open-concept living area is ideal for both relaxing and entertaining. The modern kitchen is equipped with high-end appliances and ample storage. The master suite features a luxurious private bathroom and a spacious walk-in closet. Enjoy the beautiful Florida weather in the private backyard. This home is conveniently located near shops, restaurants, and beautiful beaches. Don't miss the opportunity to make this your new dream home!
                    </p>
                </CardContent>
            </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
