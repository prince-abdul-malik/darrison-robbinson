import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PropertySearchForm } from "@/components/property-search-form";
import { PropertyCard } from "@/components/property-card";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { KeyRound, Users, Wallet, Home as HomeIcon, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProperties, Property } from "@/lib/properties";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const buyerResources = [
  {
    title: "Mortgage Calculator",
    description: "Estimate your monthly payments and find a budget that works for you.",
    icon: Wallet,
  },
  {
    title: "First-Time Buyer Guide",
    description: "Navigate the buying process with our comprehensive step-by-step guide.",
    icon: KeyRound,
  },
  {
    title: "Neighborhood Insights",
    description: "Discover the perfect community with our detailed area profiles.",
    icon: Users,
  },
];

const sellerResources = [
  {
    title: "Free Home Valuation",
    description: "Get an accurate, data-driven estimate of your home's current market value.",
    icon: HomeIcon,
  },
  {
    title: "Marketing Strategy",
    description: "Learn how we use cutting-edge marketing to sell your home faster.",
    icon: KeyRound,
  },
  {
    title: "Staging Tips",
    description: "Maximize your home's appeal to potential buyers with our expert advice.",
    icon: Users,
  },
];

export default async function Home() {
  const featuredProperties = await getProperties();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section id="home" className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white -mt-20 pt-20 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-10" />
          <div className="z-20 container mx-auto px-6 md:px-10">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-lg leading-tight">Find Your Dream Home in Fort Walton Beach</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
              Your Trusted Realtor Jane: Guiding you home in the Fort Walton Beach, FL area.
            </p>
          </div>
        </section>

        <div className="bg-background -mt-24 relative z-20 container mx-auto p-6 rounded-lg shadow-2xl border">
          <PropertySearchForm />
        </div>

        <section id="featured" className="container mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Featured Properties</h2>
            {featuredProperties.length > 0 ? (
                <Carousel opts={{ loop: featuredProperties.length > 1 }} className="w-full max-w-xs sm:max-w-none mx-auto">
                    <CarouselContent>
                    {featuredProperties.map((property) => (
                        <CarouselItem key={property.id} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                            <PropertyCard property={property as Property} />
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    {featuredProperties.length > 1 && (
                        <>
                        <CarouselPrevious className="hidden sm:flex" />
                        <CarouselNext className="hidden sm:flex" />
                        </>
                    )}
                </Carousel>
             ) : (
                <div className="text-center text-muted-foreground">
                    <p>Check back soon for new listings!</p>
                </div>
            )}
        </section>

        <section id="about" className="bg-secondary/50">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">About Jane Doe</h2>
                <p className="text-lg text-muted-foreground mb-6 font-semibold">
                  "Your Trusted Real Estate Advisor"
                </p>
                <p className="mb-4 text-muted-foreground">
                  With a passion for service and a deep love for the Fort Walton Beach area, I am dedicated to helping my clients find their perfect home. My background in business and marketing gives me a unique edge in negotiating the best deals and marketing properties effectively.
                </p>
                <p className="mb-6 text-muted-foreground">
                  I believe that buying or selling a home is more than just a transaction; it's a life-changing experience. That's why I am dedicated to providing exceptional, personalized service for all of my clients with Coldwell Banker Realty.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div className="flex items-center gap-3">
                        <Award className="w-7 h-7 text-primary"/>
                        <div>
                            <h3 className="font-bold">Top Producer Award</h3>
                            <p className="text-muted-foreground">2023 Coldwell Banker</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Briefcase className="w-7 h-7 text-primary"/>
                        <div>
                            <h3 className="font-bold">10+ Years Experience</h3>
                            <p className="text-muted-foreground">Marketing & Negotiation</p>
                        </div>
                    </div>
                </div>
              </div>
               <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative">
                        <Avatar className="w-60 h-60 md:w-80 md:h-80 border-4 border-primary shadow-lg">
                            <AvatarImage src="https://placehold.co/400x400.png" alt="Jane Doe" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
          </div>
        </section>

        <section id="buyers" className="bg-background">
          <div className="container mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Resources for Buyers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {buyerResources.map((resource, index) => (
                <Card key={index} className="bg-card/80 border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <resource.icon className="w-8 h-8 text-primary" />
                    <CardTitle className="text-xl font-bold">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{resource.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="sellers" className="container mx-auto px-6 md:px-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Thinking of Selling?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              We provide the expertise and tools to get the best value for your property. Let's start the conversation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {sellerResources.map((resource, index) => (
                <Card key={index} className="bg-card/80 border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    <CardHeader className="flex flex-row items-center gap-4">
                    <resource.icon className="w-8 h-8 text-primary" />
                    <CardTitle className="text-xl font-bold">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="text-muted-foreground">{resource.description}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
            <Button size="lg" className="font-bold">Get a Free Home Valuation</Button>
          </div>
        </section>
        
        <section id="contact" className="bg-secondary/50">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Get In Touch</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Ready to start your real estate journey in Fort Walton Beach? Send me a message, and I'll get back to you promptly.
                </p>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Email:</strong> jane.doe@cbrealty.com</p>
                  <p><strong>Phone:</strong> (850) 555-0102</p>
                  <p><strong>Office:</strong> 123 Miracle Strip Pkwy SE, Fort Walton Beach, FL 32548</p>
                </div>
              </div>
              <Card className="p-8 shadow-2xl bg-card">
                <ContactForm />
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
