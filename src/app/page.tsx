
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { getProperties } from "@/lib/properties";
import { PropertyCard } from "@/components/property-card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { type Metadata } from 'next';
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: 'Darrion Robinson - Your California Real Estate Expert',
  description: 'Ready to dive into the dynamic world of California real estate? Darrion Robinson is here to make your real estate journey an exciting and seamless experience!',
};


export default async function Home() {
  const properties = await getProperties();

  const services = [
    {
      title: "Buyer Representation",
      description: "Finding your dream home in a competitive market requires expertise. I'll guide you through every step, from search to closing, ensuring a seamless and successful purchase.",
    },
    {
      title: "Seller Representation",
      description: "Selling your home for top dollar requires strategic marketing and negotiation. My proven sales background ensures your property stands out and attracts the right buyers.",
    },
    {
      title: "Investment Properties",
      description: "California real estate is a powerful investment. I'll help you identify and acquire properties with the highest potential for appreciation and return on investment.",
    },
  ];

  const faqs = [
    {
      question: "What makes the California real estate market unique?",
      answer: "California's market is incredibly diverse, with a wide range of property types and micro-markets. It's also highly competitive. My deep local knowledge is your advantage in navigating this complexity and finding the right opportunities."
    },
    {
      question: "How do you help buyers win in a competitive situation?",
      answer: "My sales experience is key. I craft compelling offers, build strong relationships with listing agents, and utilize negotiation strategies to position my clients for success, even in multiple-offer scenarios."
    },
    {
        question: "What's your strategy for marketing a luxury property?",
        answer: "Luxury properties require a bespoke marketing plan. This includes professional photography and videography, targeted digital advertising to high-net-worth individuals, and leveraging my network to reach qualified buyers discreetly."
    },
    {
        question: "Why is Los Angeles a good place to invest in real estate?",
        answer: "Los Angeles is a world-class city with a robust economy, diverse culture, and a consistently strong demand for housing. This makes it a resilient market with excellent long-term appreciation potential for savvy investors."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-center text-white px-4">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent z-10" />
        <Image 
            src="/property-2.jpg"
            alt="Luxurious modern villa overlooking the ocean in California"
            data-ai-hint="luxury villa ocean"
            fill
            className="object-cover"
            priority
        />
        <div className="relative z-20 flex flex-col items-center">
            <h1 className="text-4xl md:text-7xl font-headline tracking-tight mb-4 leading-tight">
              California Real Estate, Redefined.
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-white/80 mb-8">
              One call away from your dream home.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none">
                <Link href="#contact">Book a Consultation <ArrowRight className="ml-2" /></Link>
            </Button>
        </div>
      </section>

      <main className="flex-grow">
        {/* About Section */}
        <section id="about" className="bg-background">
            <div className="container mx-auto px-6 md:px-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative w-full h-[600px]">
                        <Image 
                            src="/darrion-robinson.jpg"
                            alt="Portrait of Darrion Robinson, California real estate expert"
                            data-ai-hint="professional man portrait"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="max-w-lg">
                        <h2 className="text-3xl md:text-5xl font-headline mb-6">Darrion Robinson</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                           Ready to dive into the dynamic world of California real estate? With years of sales experience and a passion for this city, I’m here to make your real estate journey an exciting and seamless experience! Whether you’re buying your dream home, selling for top dollar, or investing in the perfect property, I’ve got the knowledge and drive to help you win in this competitive market.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                           Los Angeles is an amazing place to call home, and I’m excited to help you find the perfect fit. My proven sales background and deep local knowledge ensure that you’ll have an expert by your side, making every step of the process feel effortless.
                        </p>
                        <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            <Link href="#contact">Let’s Connect</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {/* Featured Listings Section */}
        <section id="listings" className="bg-secondary">
          <div className="container mx-auto px-6 md:px-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-5xl font-headline mb-4">Featured California Properties</h2>
              <p className="text-muted-foreground">
                A curated selection of premier listings from across the Golden State.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline" className="rounded-none">
                    <Link href="#">View All Listings</Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-background">
            <div className="container mx-auto px-6 md:px-10">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-5xl font-headline mb-4">A Bespoke Real Estate Experience</h2>
                    <p className="text-muted-foreground">
                        From initial consultation to final closing, I provide a tailored service for every client.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-px bg-border">
                    {services.map((service) => (
                        <div key={service.title} className="bg-background p-8 text-center flex flex-col items-center">
                            <h3 className="text-2xl font-bold font-headline mt-4 mb-3">{service.title}</h3>
                            <p className="text-muted-foreground text-sm flex-grow">{service.description}</p>
                            <Button asChild variant="link" className="mt-4 text-primary">
                                <Link href="#contact">Learn More <ArrowRight className="ml-2" /></Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="relative bg-secondary py-24">
             <div className="absolute inset-0">
                <Image 
                    src="/place-2.jpg" 
                    alt="Luxury home interior with view of Los Angeles"
                    data-ai-hint="luxury home interior"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>
            <div className="container mx-auto px-6 md:px-10 relative z-10 text-center text-white">
                <h2 className="text-3xl md:text-5xl font-headline mb-4">Let's Turn Your Real Estate Dreams Into Reality</h2>
                <p className="max-w-2xl mx-auto text-lg text-white/80 mb-8">
                    Your journey towards owning or selling the perfect California property starts with a single call.
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none">
                    <a href="tel:8182695059"><Phone className="mr-2" /> (818) 269-5059</a>
                </Button>
            </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-background">
             <div className="container mx-auto px-6 md:px-10 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-headline mb-4">Frequently Asked Questions</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger className="text-left text-lg font-bold hover:no-underline">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pt-2">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
             </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="bg-secondary">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-headline mb-4">Get In Touch</h2>
              <p className="text-muted-foreground">
                Ready to take the next step? Fill out the form below or call me directly. I look forward to connecting with you.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="bg-background p-8">
                    <ContactForm />
                </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
