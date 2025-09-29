import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getPropertyById } from "@/lib/properties";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BedDouble, Bath, Square, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { type Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const propertyId = parseInt(params.id, 10);
  const property = await getPropertyById(propertyId);

  if (!property) {
    return {
      title: "Property Not Found",
      description: "The property you are looking for does not exist.",
    };
  }

  return {
    title: `${property.title} | Darrion Robinson`,
    description: `View details for ${property.title}. ${property.bedrooms} beds, ${property.bathrooms} baths. Contact Darrion Robinson for a showing.`,
    openGraph: {
      images: [property.imageUrl],
    },
  };
}

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
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">{property.title}</h1>
            <p className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
                <MapPin size={18} /> {property.address}
            </p>
          </div>
            
          <div className="relative w-full h-[65vh] rounded-lg overflow-hidden shadow-2xl mb-12">
            <Badge className={cn("absolute top-4 right-4 z-10 text-lg rounded-sm", property.status === "Sold" ? "bg-destructive" : "bg-primary")}>
                {property.status}
            </Badge>
            <Image
                src={property.imageUrl}
                alt={`Exterior view of ${property.title}`}
                data-ai-hint={property.imageHint}
                fill
                className="object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <h2 className="text-3xl font-headline font-bold mb-4">About This Home</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                    {property.description}
                </p>
                 <div className="bg-secondary/30 rounded-lg p-6">
                    <h3 className="text-2xl font-headline font-bold mb-4">Key Details</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
                        {details.map(detail => (
                            <div key={detail.label} className="flex items-center gap-3">
                                {detail.icon}
                                <div>
                                    <span className="text-lg font-bold">{detail.value}</span>
                                    <p className="text-muted-foreground text-sm">{detail.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
              <Card className="shadow-lg border-none bg-card p-6 sticky top-28">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-headline">Interested in this property?</CardTitle>
                   <CardDescription>Send me a message for more information or to schedule a showing.</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                    <ContactForm />
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
