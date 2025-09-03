import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PropertyCard } from "@/components/property-card";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Home, Award, Briefcase, Map, BarChart, PenTool, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProperties, Property } from "@/lib/properties";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const buyerResources = [
  {
    title: "First-Time Buyer Guide",
    description: "Navigate the buying process with our comprehensive step-by-step guide.",
    icon: Home,
  },
  {
    title: "Mortgage Calculator",
    description: "Estimate your monthly payments and find a budget that works for you.",
    icon: BarChart,
  },
  {
    title: "The Closing Process",
    description: "Understand the final steps to getting the keys to your new home.",
    icon: PenTool,
  },
];

const sellerResources = [
  {
    title: "Free Home Valuation",
    description: "Get an accurate, data-driven estimate of your home's current market value.",
    icon: Home,
  },
  {
    title: "Marketing Your Home",
    description: "Learn how we use cutting-edge marketing to sell your home faster.",
    icon: BarChart,
  },
  {
    title: "Staging Tips",
    description: "Maximize your home's appeal to potential buyers with our expert advice.",
    icon: PenTool,
  },
];

const neighborhoods = [
    {
        name: "Downtown FWB",
        description: "Vibrant and historic, with a mix of shops, restaurants, and waterfront parks.",
        imageUrl: "https://picsum.photos/600/400?random=1",
        imageHint: "downtown street"
    },
    {
        name: "Okaloosa Island",
        description: "Famous for its white-sand beaches, beautiful condos, and the Gulfarium.",
        imageUrl: "https://picsum.photos/600/400?random=2",
        imageHint: "beach island"
    },
    {
        name: "Poinciana",
        description: "A quiet, residential area known for its family-friendly atmosphere and good schools.",
        imageUrl: "https://picsum.photos/600/400?random=3",
        imageHint: "suburban neighborhood"
    }
];

const testimonials = [
    {
        quote: "Jane was an absolute pleasure to work with. She was professional, knowledgeable, and went above and beyond to help us find our dream home. We couldn't be happier!",
        name: "The Smith Family",
        rating: 5,
    },
    {
        quote: "As first-time homebuyers, we were nervous about the process, but Jane guided us every step of the way. Her expertise and patience were invaluable. Highly recommended!",
        name: "Michael & Sarah Johnson",
        rating: 5,
    },
    {
        quote: "Selling our home with Jane was a seamless experience. She marketed it beautifully and got us a fantastic price. We are so grateful for her hard work and dedication.",
        name: "David Chen",
        rating: 5,
    }
];

export default async function HomePage() {
  const featuredProperties = await getProperties();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        
        <section id="home" className="relative h-screen flex items-center justify-center text-white"> {/* Changed h-[80vh] to h-screen to extend image to navbar */}
            <Image 
                src="/property-3.jpg"
                alt="Beautiful home exterior"
                data-ai-hint="beautiful house exterior"
                fill
                className="object-cover z-0"
                priority
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative z-20 container mx-auto px-6 md:px-10 text-center flex justify-center items-center"> {/* Added flex justify-center items-center */}
                <div className="flex flex-col justify-center items-center"> {/* Reinforced centering */}
                     <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary shadow-lg mb-4">
                        <AvatarImage src="/agent-photo.jpg" alt="Jane Doe" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <h1 className="text-4xl md:text-6xl font-headline font-bold my-2 leading-tight">Jane Doe</h1>
                    <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                        Your Trusted Fort Walton Beach Realtor
                    </p>
                    <Button asChild size="lg">
                        <Link href="/#contact">Get in Touch</Link>
                    </Button>
                </div>
            </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">About Jane Doe</h2>
                <p className="text-lg text-muted-foreground mb-6 font-semibold">
                  "Guiding You Home with Expertise and Care"
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
               <div className="flex justify-center">
                    <Image
                        src="https://picsum.photos/600/700"
                        alt="Fort Walton Beach scenery"
                        data-ai-hint="florida coast"
                        width={600}
                        height={700}
                        className="rounded-lg shadow-xl object-cover"
                    />
                </div>
            </div>
          </div>
        </section>
        
        <section id="listings" className="container mx-auto px-6 md:px-10 bg-secondary/50 py-16 md:py-24 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-4">My Listings</h2>
           <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
              Here are a few of my featured properties. For a full, up-to-date list of available homes, please visit my Zillow profile.
            </p>
            {featuredProperties.length > 0 ? (
                <Carousel opts={{ loop: featuredProperties.length > 2 }} className="w-full max-w-xs sm:max-w-none mx-auto">
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
             <div className="text-center mt-12">
                <Button asChild size="lg">
                    <Link href="#" target="_blank" rel="noopener noreferrer">View All My Listings on Zillow</Link>
                </Button>
            </div>
        </section>

         <section id="testimonials" className="py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-10">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">What My Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-card flex flex-col">
                            <CardContent className="p-6 flex-grow">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                            </CardContent>
                            <CardFooter className="p-6 pt-0 mt-auto bg-secondary/50">
                                <p className="font-bold text-sm text-foreground">- {testimonial.name}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="neighborhoods" className="bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Neighborhood Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {neighborhoods.map((neighborhood, index) => (
                <Card key={index} className="bg-card overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  <Image src={neighborhood.imageUrl} alt={neighborhood.name} data-ai-hint={neighborhood.imageHint} width={600} height={400} className="object-cover w-full h-40"/>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center gap-2"><Map size={20} className="text-primary"/>{neighborhood.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{neighborhood.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-10">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">For Buyers</h2>
                        <div className="grid grid-cols-1 gap-8">
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
                     <div>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">For Sellers</h2>
                        <div className="grid grid-cols-1 gap-8">
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
                    </div>
                </div>
            </div>
        </section>

        <section id="market-updates" className="bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-10">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Market Updates</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
                Stay informed on the latest trends and insights in the Fort Walton Beach real estate market.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="flex flex-col">
                    <CardHeader>
                        <span className="text-sm text-muted-foreground">May 20, 2024</span>
                        <CardTitle>Spring Selling Season in Full Swing</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">The spring market is active, with increased buyer interest across the coast. Now is a great time to list your property.</p>
                    </CardContent>
                    <CardDescription className="p-6 pt-0">
                        <Button variant="link" className="p-0 h-auto">Read More</Button>
                    </CardDescription>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader>
                        <span className="text-sm text-muted-foreground">April 15, 2024</span>
                        <CardTitle>Interest Rate Outlook for Buyers</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">We're seeing some stabilization in mortgage rates, offering a window of opportunity for prospective buyers.</p>
                    </CardContent>
                    <CardDescription className="p-6 pt-0">
                        <Button variant="link" className="p-0 h-auto">Read More</Button>
                    </CardDescription>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader>
                        <span className="text-sm text-muted-foreground">March 28, 2024</span>
                        <CardTitle>New Developments on the Rise</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">Several new condo and single-family home developments are breaking ground, bringing exciting new inventory to the area.</p>
                    </CardContent>
                    <CardDescription className="p-6 pt-0">
                        <Button variant="link" className="p-0 h-auto">Read More</Button>
                    </CardDescription>
                </Card>
            </div>
          </div>
        </section>
        
        <section id="contact" className="py-16 md:py-24">
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