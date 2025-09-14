import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PropertyCard } from "@/components/property-card";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getProperties, Property } from "@/lib/properties";
import { ArrowRight, Star, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
    {
        quote: "Eleanor's expertise in the luxury market is unmatched. She found us our dream home and navigated the complex negotiation process with incredible skill and grace. We are forever grateful.",
        name: "The Vanderbilt Family",
        rating: 5,
    },
    {
        quote: "Working with Eleanor was an absolute pleasure. Her professionalism, attention to detail, and deep understanding of our needs made the selling process seamless and highly profitable.",
        name: "Alexandra Sterling",
        rating: 5,
    },
    {
        quote: "As international buyers, we needed an agent we could trust implicitly. Eleanor exceeded all our expectations, providing unparalleled service and guidance. She is simply the best.",
        name: "Mr. & Mrs. Dubois",
        rating: 5,
    }
];

export default async function HomePage() {
  const featuredProperties = await getProperties();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        
        <section id="home" className="relative h-screen -mt-20 flex items-center justify-center text-white"> 
            <Image 
                src="/property-3.png"
                alt="Luxurious modern home"
                data-ai-hint="luxury modern home"
                fill
                className="object-cover z-0"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
            <div className="relative z-20 container mx-auto px-6 md:px-10 text-center flex flex-col items-center"> 
                <h1 className="text-4xl md:text-7xl font-headline font-bold text-white shadow-lg leading-tight mb-4">Eleanor Vance</h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
                    Your Trusted Partner in Luxury Real Estate
                </p>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                    <Link href="/#contact">Schedule a Consultation</Link>
                </Button>
            </div>
        </section>

        <section id="listings" className="py-20 md:py-32 bg-secondary/50">
          <div className="container mx-auto px-6 md:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Featured Listings</h2>
              <p className="text-lg text-muted-foreground">
                  A curated selection of premier properties. Explore more of my exclusive listings on Zillow.
              </p>
            </div>
            {featuredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProperties.map((property) => (
                       <PropertyCard key={property.id} property={property as Property} />
                    ))}
                </div>
             ) : (
                <div className="text-center text-muted-foreground">
                    <p>New exclusive listings coming soon.</p>
                </div>
            )}
             <div className="text-center mt-16">
                <Button asChild size="lg" variant="outline">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                        View All Listings on Zillow
                        <ArrowRight className="ml-2"/>
                    </Link>
                </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-32">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="flex justify-center">
                    <Image
                        src="/agent-full-photo.jpg"
                        alt="Eleanor Vance"
                        data-ai-hint="professional realtor portrait"
                        width={500}
                        height={650}
                        className="rounded-sm shadow-2xl object-cover"
                    />
                </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Eleanor Vance</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  With over a decade of experience in the high-end real estate market, Eleanor Vance has built a reputation for her unwavering commitment to her clients' success. Her deep market knowledge and sharp negotiation skills are matched only by her dedication to providing a seamless, white-glove service experience.
                </p>
                <p className="mb-8 text-muted-foreground leading-relaxed">
                  Eleanor believes that luxury is not just a price point, but an experience. She specializes in connecting discerning buyers with exceptional properties that reflect their lifestyle and aspirations.
                </p>
                <Button asChild size="lg" variant="default">
                    <Link href="#contact">
                       Get In Touch
                    </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

         <section id="testimonials" className="py-20 md:py-32 bg-secondary/50">
            <div className="container mx-auto px-6 md:px-10">
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-16">Client Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-card flex flex-col border-none shadow-xl">
                            <CardContent className="p-8 flex-grow">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground italic text-base">"{testimonial.quote}"</p>
                            </CardContent>
                             <CardHeader className="p-8 pt-4 mt-auto">
                                <p className="font-bold text-sm text-foreground">- {testimonial.name}</p>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
        <section id="contact" className="py-20 md:py-32">
          <div className="container mx-auto px-6 md:px-10">
             <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Begin Your Journey</h2>
                <p className="text-lg text-muted-foreground mb-12">
                  Whether you are buying or selling a premier property, contact Eleanor to schedule a private consultation.
                </p>
             </div>
            <div className="max-w-xl mx-auto">
              <Card className="p-8 sm:p-12 shadow-2xl bg-card border-none">
                <ContactForm />
              </Card>
            </div>
             <div className="text-center mt-16 text-muted-foreground">
                  <p className="mb-2"><strong>Email:</strong> eleanor.vance@luxerealty.com</p>
                  <p><strong>Phone:</strong> (310) 555-0102</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
