import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getPropertyById } from "@/lib/properties";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BedDouble, Bath, Square, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const propertyId = parseInt(params.id, 10);
  const property = await getPropertyById(propertyId);

  if (!property) {
    notFound();
  }

  const details = [
    { label: "Bedrooms", value: `${property.bedrooms}`, icon: <BedDouble size={24} className="text-primary"/> },
    { label: "Bathrooms", value: `${property.bathrooms}`, icon: <Bath size={24} className="text-primary"/> },
    { label: "Area", value: `${property.sqft.toLocaleString()} sqft`, icon: <Square size={24} className="text-primary"/> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-6 md:px-10 py-12 pt-32">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-2">{property.title}</h1>
            <p className="flex items-center gap-2 text-lg text-muted-foreground">
                <MapPin size={18} /> {property.address}
            </p>
          </div>
            
          <div className="relative w-full h-[60vh] rounded-lg overflow-hidden shadow-2xl mb-12">
            <Image
                src={property.imageUrl}
                alt={property.title}
                data-ai-hint={property.imageHint}
                fill
                className="object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
                <h2 className="text-3xl font-headline font-bold mb-4">Property Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                    Welcome to this stunning {property.bedrooms}-bedroom, {property.bathrooms}-bathroom residence. Spanning {property.sqft.toLocaleString()} square feet, this property offers a perfect blend of comfort and style. The open-concept living area is ideal for both relaxing and entertaining. The modern kitchen is equipped with high-end appliances and ample storage. The master suite features a luxurious private bathroom and a spacious walk-in closet. Enjoy the beautiful weather in your private oasis. This home is conveniently located near fine dining, luxury shopping, and cultural landmarks. Don't miss the opportunity to make this your new dream home!
                </p>
            </div>
            <div>
              <Card className="shadow-lg border-none bg-secondary/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline">Key Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex justify-between items-center text-2xl font-bold text-primary">
                        <span>Price</span>
                        <span>${Number(property.price).toLocaleString()}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center border-t pt-6">
                        {details.map(detail => (
                            <div key={detail.label} className="flex flex-col items-center gap-1">
                                {detail.icon}
                                <span className="text-lg font-bold">{detail.value}</span>
                                <span className="text-muted-foreground text-xs">{detail.label}</span>
                            </div>
                        ))}
                    </div>
                    <Button asChild size="lg" className="w-full">
                        <Link href="#" target="_blank" rel="noopener noreferrer">View on Zillow</Link>
                    </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
