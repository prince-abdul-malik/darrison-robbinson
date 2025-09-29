
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { getProperties } from "@/lib/properties";
import { PropertyCard } from "@/components/property-card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { type Metadata } from 'next';
import { Card, CardContent } from "@/components/ui/card";
import placeholderImages from '@/lib/placeholder-images.json';

export const metadata: Metadata = {
  title: 'Darrion Robinson - Your California Real Estate Expert',
  description: 'Ready to dive into the dynamic world of California real estate? Darrion Robinson is here to make your real estate journey an exciting and seamless experience!',
};


export default async function Home() {
  const properties = await getProperties();

  const services = [
    {
      title: "Buyer Representation",
      description: "Finding your dream home in a competitive market like Los Angeles or Malibu requires expertise. I'll guide you through every step, from search to closing, ensuring a seamless and successful purchase.",
    },
    {
      title: "Seller Representation",
      description: "Selling your Calabasas home for top dollar requires strategic marketing and negotiation. My proven sales background ensures your property stands out and attracts the right buyers.",
    },
    {
      title: "Investment Properties",
      description: "California real estate is a powerful investment. I'll help you identify and acquire properties with the highest potential for appreciation and return on investment across Southern California.",
    },
  ];

  const faqs = [
    {
      question: "What makes the California real estate market unique?",
      answer: "California's market, especially in areas like Calabasas and Malibu, is incredibly diverse and competitive. My deep local knowledge is your advantage in navigating this complexity and finding the right opportunities."
    },
    {
      question: "How do you help buyers win in a competitive situation?",
      answer: "My sales experience is key. I craft compelling offers, build strong relationships with listing agents, and utilize negotiation strategies to position my clients for success, even in multiple-offer scenarios in the Los Angeles market."
    },
    {
        question: "What's your strategy for marketing a luxury property?",
        answer: "Luxury properties require a bespoke marketing plan. This includes professional photography and videography, targeted digital advertising to high-net-worth individuals, and leveraging my network to reach qualified buyers discreetly."
    },
    {
        question: "Why is Los Angeles a good place to invest in real estate?",
        answer: "Los Angeles is a world-class city with a robust economy, diverse culture, and a consistently strong demand for housing. This makes it a resilient market with excellent long-term appreciation potential for savvy investors."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-center text-white px-4">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/dr_bg_video.mp4"
        />
        <div className="relative z-20 flex flex-col items-center">
            <h1 className="text-4xl md:text-7xl font-headline tracking-tight mb-4 leading-tight">
              California Real Estate, Redefined.
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-white/80 mb-8">
              One call away from your dream home in Los Angeles, Calabasas, or Malibu.
            </p>
        </div>
      </section>

      <main className="flex-grow">
        {/* About Section */}
        <section id="about" className="bg-secondary/30">
            <div className="container mx-auto px-6 md:px-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative w-full min-h-[550px] md:min-h-[700px]">
                        <Image 
                            src="/Darrion.jpeg"
                            alt={placeholderImages.agentPortrait.alt}
                            data-ai-hint={placeholderImages.agentPortrait.hint}
                            fill
                            className="object-cover rounded-sm"
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
        <section id="listings" className="bg-background">
          <div className="container mx-auto px-6 md:px-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-5xl font-headline mb-4">Featured California Properties</h2>
              <p className="text-muted-foreground">
                A curated selection of premier listings from Calabasas, Malibu, and beyond.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
        <section id="services" className="bg-secondary/30">
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
        
        {/* Dubai Section */}
        <section id="dubai" className="relative bg-white text-foreground py-24">
             <div className="absolute inset-0">
                <Image 
                    src="/dubai-1.jpg"
                    alt={placeholderImages.dubai.alt}
                    data-ai-hint={placeholderImages.dubai.hint}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-black/60" />
            <div className="container mx-auto px-6 md:px-10 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="max-w-xl">
                    <h2 className="text-3xl md:text-5xl font-headline mb-4 text-white">Invest in Dubai Real Estate</h2>
                    <p className="text-lg text-white/90 font-bold mb-6">
                       In partnership with Nobel Casa Dubai
                    </p>
                    <p className="text-white/80 leading-relaxed mb-8">
                        Dubai’s real estate market isn’t just booming—it’s evolving. As your dedicated property investment consultant, I help you navigate this dynamic landscape with clarity, strategy, and confidence. Whether you’re looking for high-yield rental properties, off-plan opportunities, or long-term capital growth, I offer expert insights backed by market data, developer connections, and a deep understanding of Dubai’s regulatory environment.
                    </p>
                     <Button asChild size="lg" variant="outline" className="rounded-none border-white text-white hover:bg-white hover:text-foreground">
                        <Link href="#contact">Invest Smarter in Dubai</Link>
                    </Button>
                </div>
                 <div>
                    {/* Intentionally left blank for visual balance */}
                </div>
            </div>
        </section>

        {/* Music Section */}
        <section id="music" className="bg-secondary/30">
            <div className="container mx-auto px-6 md:px-10">
                 <div className="grid md:grid-cols-2 gap-16 items-center">
                     <div className="max-w-lg">
                        <h2 className="text-3xl md:text-5xl font-headline mb-6">More Than an Agent</h2>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                           Outside of real estate, Darrion is a passionate DJ and music producer. This creative outlet sharpens his attention to detail and ability to curate unique experiences—skills he brings to every client relationship. Whether orchestrating a deal or a DJ set, the goal is always a flawless execution and an unforgettable result.
                        </p>
                        <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            <Link href="#contact">Let’s Create Something Great</Link>
                        </Button>
                    </div>
                    <div className="relative w-full min-h-[500px]">
                        <Image 
                            src={placeholderImages.dj.src}
                            alt={placeholderImages.dj.alt}
                            data-ai-hint={placeholderImages.dj.hint}
                            fill
                            className="object-cover rounded-sm"
                        />
                    </div>
                </div>
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
        <section id="contact" className="bg-secondary/30">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-headline mb-4">Get In Touch</h2>
              <p className="text-muted-foreground">
                Ready to take the next step in your California or Dubai real estate journey? Fill out the form below or call me directly.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="bg-background p-8 rounded-sm">
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
