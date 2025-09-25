
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { getProperties } from "@/lib/properties";
import { PropertyCard } from "@/components/property-card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HomeIcon, MessageSquare, Star } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Samantha Reyes - Austin Realtor for First-Time Homebuyers',
  description: 'As a former teacher, Samantha Reyes specializes in helping first-time homebuyers and young families find their perfect starter home in Austin, TX. Your friendly guide to Austin real estate.',
};


export default async function Home() {
  const properties = await getProperties();

  const resources = [
    {
      icon: <HomeIcon className="h-10 w-10 text-primary" />,
      title: "First-Time Home Buyer's Guide",
      description: "Everything you need to know, from getting pre-approved to closing day.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Understanding Austin's School Districts",
      description: "As a former teacher, I can help you find a great home in a top-rated school zone.",
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Navigating the Loan Process",
      description: "Learn about different loan types and find the best financing options for your family.",
    },
  ];

  const faqs = [
    {
      question: "How much do I need for a down payment?",
      answer: "Many first-time buyers are surprised to learn they don't need 20%! There are programs that allow for as little as 3-5% down. We can explore the best options for your budget."
    },
    {
      question: "How long does it take to buy a home?",
      answer: "On average, it can take anywhere from 30 to 60 days from the time you make an offer to the day you get the keys. This can vary based on financing and negotiations."
    },
    {
        question: "What are the most important things to look for in a starter home?",
        answer: "For a starter home, I recommend focusing on location, a solid structure, and potential for equity growth. Things like updated kitchens are wonderful, but the 'bones' of the house and the neighborhood are most important for your family's future."
    },
    {
        question: "How does your background as a teacher help me?",
        answer: "My teaching experience taught me patience, clear communication, and how to break down complex processes into simple steps. I excel at educating my clients, especially first-time buyers, so you feel confident and informed throughout the entire journey. I'm also very familiar with Austin's school districts!"
    }
  ]

    const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Samantha Reyes",
    "url": "https://yourwebsite.com", // Replace with actual domain
    "logo": "https://yourwebsite.com/logo.png", // Replace with actual logo URL
    "telephone": "+1-512-555-1234", // Replace with actual phone
    "description": "Friendly Austin, TX realtor specializing in helping first-time homebuyers and young families find their perfect starter home.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St", // Replace with brokerage address
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "postalCode": "78701",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Austin, TX"
    },
    "makesOffer": {
        "@type": "Offer",
        "itemOffered": {
            "@type": "Service",
            "name": "Real Estate Agent Services for First-Time Homebuyers"
        }
    }
  };


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white px-4 -mt-20">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image 
            src="/people-5.jpg"
            alt="Happy family holding keys in front of their new Austin starter home"
            data-ai-hint="happy family new home"
            fill
            className="object-cover"
            priority
        />
        <div className="relative z-20 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight mb-4">
                Your Journey to a First Home Starts Here.
            </h1>
            <p className="max-w-2xl text-lg md:text-xl mb-8">
            I'm Samantha Reyes, an Austin realtor and former teacher dedicated to guiding young families and first-time buyers to their perfect starter home.
            </p>
            <Button asChild size="lg">
            <Link href="#contact">Get Started Today <ArrowRight className="ml-2" /></Link>
            </Button>
        </div>
      </section>

      <main className="flex-grow">
        {/* About Section */}
        <section id="about" className="bg-secondary/20">
            <div className="container mx-auto px-6 md:px-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
                        <Image 
                            src="/samantha.jpg" 
                            alt="Portrait of Samantha Reyes, friendly Austin realtor"
                            data-ai-hint="friendly woman portrait"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Hi, I'm Samantha!</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Making the leap into homeownership is a huge step, and it can feel overwhelming. Before I was a realtor, I was an elementary school teacher. I learned that the best way to tackle big, new things is with a clear plan, a lot of patience, and a friendly guide you can trust.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            That’s the approach I bring to real estate. I specialize in helping first-time homebuyers and young families in the Austin area turn their dreams of a starter home into a reality. I'm here to educate you, support you, and celebrate with you on closing day.
                        </p>
                        <Button asChild variant="outline">
                            <Link href="#contact">Let's Chat!</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {/* Featured Listings Section */}
        <section id="listings" className="bg-background">
          <div className="container mx-auto px-6 md:px-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Featured Starter Homes</h2>
              <p className="text-muted-foreground">
                Get a feel for the types of wonderful and affordable homes available right now in the Austin area.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="bg-secondary/20">
            <div className="container mx-auto px-6 md:px-10">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Resources for Your Journey</h2>
                    <p className="text-muted-foreground">
                        Knowledge is power! Here are a few guides to help you get started on your homebuying adventure.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {resources.map((resource) => (
                        <div key={resource.title} className="bg-card p-8 rounded-lg shadow-sm flex flex-col items-center">
                            {resource.icon}
                            <h3 className="text-xl font-bold font-headline mt-4 mb-2">{resource.title}</h3>
                            <p className="text-muted-foreground text-sm">{resource.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-background">
             <div className="container mx-auto px-6 md:px-10">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="md:sticky top-28">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Your Questions, Answered</h2>
                        <p className="text-muted-foreground mb-6">
                            Here are some of the most common questions I get from first-time homebuyers.
                        </p>
                        <Button asChild>
                            <Link href="#contact">Have Another Question?</Link>
                        </Button>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger className="text-left font-bold hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
             </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="bg-primary/5">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Let's Find Your First Home</h2>
              <p className="text-muted-foreground">
                Ready to take the next step? Fill out the form below, and I'll be in touch to schedule a free, no-obligation consultation to chat about your goals.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="bg-card p-8 rounded-xl shadow-lg">
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
