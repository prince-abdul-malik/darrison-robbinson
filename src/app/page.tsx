import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PropertyCard } from "@/components/property-card";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getProperties, Property } from "@/lib/properties";
import { ArrowRight, Star, Home, Heart, BookOpen, Search } from "lucide-react";

const testimonials = [
    {
        quote: "Samantha made our first home buying experience so easy and stress-free! As a former teacher, she was amazing at explaining everything and helping us find a home in a great school district.",
        name: "The Garcia Family",
        rating: 5,
    },
    {
        quote: "We couldn't have asked for a better realtor. Samantha was patient, knowledgeable, and genuinely cared about finding the right fit for our family. Highly recommend!",
        name: "David & Emily Chen",
        rating: 5,
    },
    {
        quote: "From our initial meeting to closing day, Samantha was a true professional. Her expertise on Austin neighborhoods and the market was invaluable. Thank you for everything!",
        name: "Michael Johnson",
        rating: 5,
    }
];

export default async function HomePage() {
  const featuredProperties = await getProperties();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Samantha Reyes",
    "url": "https://yourwebsite.com", // Replace with actual domain
    "logo": "https://yourwebsite.com/kw-logo.png", // Replace with actual domain
    "image": "https://picsum.photos/seed/realtor/600/700",
    "description": "A former elementary school teacher helping first-time homebuyers and young families find their perfect starter home in Austin, TX.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "telephone": "+1-512-555-0152",
    "email": "samantha.reyes@kw.com",
    "knowsAbout": ["Real Estate", "First-Time Home Buyers", "Family Homes"],
    "areaServed": {
      "@type": "City",
      "name": "Austin"
    },
    "makesOffer": {
        "@type": "Offer",
        "itemOffered": {
            "@type": "Service",
            "name": "Real Estate Services for Buyers and Sellers"
        }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      <Header />
      <main className="flex-grow">
        
        <section id="home" className="relative h-[85vh] -mt-20 flex items-center justify-center text-white"> 
            <Image 
                src="https://picsum.photos/seed/familyhome/1800/1200"
                alt="Happy family celebrating in front of their new Austin starter home"
                data-ai-hint="happy family new home"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="relative z-20 container mx-auto px-6 md:px-10 text-center flex flex-col items-center"> 
                <h1 className="text-4xl md:text-6xl font-headline font-black text-white shadow-lg leading-tight mb-4">Samantha Reyes</h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
                    Your friendly guide to finding a home in Austin.
                </p>
                <Button asChild size="lg">
                    <Link href="/#contact">Let's Find Your Home</Link>
                </Button>
            </div>
        </section>

        <section id="listings" className="py-20 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-6 md:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Featured Starter Homes</h2>
              <p className="text-lg text-muted-foreground">
                  A few hand-picked homes perfect for first-time buyers and growing families in Austin.
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
                    <p>New listings coming soon. Check back shortly!</p>
                </div>
            )}
             <div className="text-center mt-16">
                <Button asChild size="lg" variant="outline">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                        View All My Listings
                        <ArrowRight className="ml-2"/>
                    </Link>
                </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-24">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="flex justify-center">
                    <Image
                        src="https://picsum.photos/seed/realtor/600/700"
                        alt="Samantha Reyes, a friendly Austin Realtor specializing in helping young families."
                        data-ai-hint="friendly female realtor"
                        width={500}
                        height={650}
                        className="rounded-lg shadow-xl object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Hi, I'm Samantha!</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                     As a former elementary school teacher, I bring patience, dedication, and a love for education to my real estate career. My passion is helping first-time homebuyers and young families navigate the exciting journey of finding their perfect starter home in Austin.
                    </p>
                    <p className="mb-8 text-muted-foreground leading-relaxed">
                     I believe a home is more than just a place to live—it's where your family's story begins. I'm here to listen to your needs, answer every question, and guide you with care and expertise. Let's make your homeownership dreams a reality!
                    </p>
                    <Button asChild size="lg">
                        <Link href="#contact">
                           Work With Me
                        </Link>
                    </Button>
                </div>
            </div>
          </div>
        </section>

        <section id="resources" className="py-20 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-6 md:px-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Resources for Your Journey</h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to get started, whether you're buying or selling.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    <Card className="p-8 text-center shadow-lg border-none">
                        <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                        <CardHeader>
                            <CardTitle className="text-2xl font-headline font-bold">For First-Time Buyers</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-6">
                                Feeling overwhelmed? My step-by-step guide breaks down the entire process, from getting pre-approved to finding a home in the perfect school district.
                            </p>
                            <Button variant="link" className="p-0 h-auto text-base">
                                Download My Buyer's Guide <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="p-8 text-center shadow-lg border-none">
                        <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                         <CardHeader>
                            <CardTitle className="text-2xl font-headline font-bold">Austin School Guides</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-6">
                                As a former teacher, I know how important schools are. Explore my detailed guides on Austin's top-rated school districts to find the right community for your family.
                            </p>
                             <Button variant="link" className="p-0 h-auto text-base">
                                Explore School Districts <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section id="testimonials" className="py-20 md:py-24">
            <div className="container mx-auto px-6 md:px-10">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-16">What My Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-secondary/30 flex flex-col border-none shadow-lg">
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
        
        <section id="contact" className="py-20 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-6 md:px-10">
             <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Ready to Start Your Search?</h2>
                <p className="text-lg text-muted-foreground mb-12">
                  I'd love to hear about your homeownership goals. Send me a message to schedule a free, no-pressure chat!
                </p>
             </div>
            <div className="max-w-xl mx-auto">
              <Card className="p-8 sm:p-12 shadow-2xl bg-card border-none">
                <ContactForm />
              </Card>
            </div>
             <div className="text-center mt-16 text-muted-foreground">
                  <p className="mb-2"><strong>Email:</strong> samantha.reyes@kw.com</p>
                  <p><strong>Phone:</strong> (512) 555-0152</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
