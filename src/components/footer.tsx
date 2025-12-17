
import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M16.38 3.54c1.1.28 2.09.89 2.87 1.68s1.4 1.76 1.68 2.87c.07.28.11.56.13.85.04.53.04 1.54.04 4.06s0 3.53-.04 4.06c-.02.29-.06.57-.13.85-.28 1.1-.89 2.09-1.68 2.87s-1.76 1.4-2.87 1.68c-.28.07-.56.11-.85.13-.53.04-1.54.04-4.06.04s-3.53 0-4.06-.04c-.29-.02-.57-.06-.85-.13-1.1-.28-2.09-.89-2.87-1.68s-1.4-1.76-1.68-2.87c-.07-.28-.11-.56-.13-.85-.04-.53-.04-1.54-.04-4.06s0-3.53.04-4.06c.02-.29.06-.57.13-.85.28-1.1.89 2.09 1.68-2.87s1.76-1.4 2.87-1.68c.28-.07.56.11.85-.13.53-.04 1.54-.04 4.06-.04s3.53 0 4.06.04c.29.02.57.06.85.13z" />
        <path d="M11.23 8.21v5.66c0 .79-.31 1.54-.87 2.1-.56.56-1.31.87-2.1.87s-1.54-.31-2.1-.87c-.56-.56-.87-1.31-.87-2.1" />
        <path d="M11.23 13.87a4.99 4.99 0 0 0 4.28 4.92 4.8 4.8 0 0 0 5.49-4.81v-1.76a2.2 2.2 0 0 1-2.2-2.2h-2.58" />
      </svg>
    );
  }

export function Footer() {
  const serviceAreas = ["Calabasas", "Malibu", "Beverly Hills", "Santa Monica", "West Hollywood", "Hidden Hills"];
  const agentName = "Darrion Robinson";
  const brokerageName = "Compass";

  return (
    <footer className="bg-secondary border-t border-border/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Column 1: Brand */}
            <div className="flex flex-col items-center md:items-start gap-4">
                <Link href="/" className="font-bold text-2xl font-headline text-foreground">
                Darrion Robinson
                </Link>
                <div className="flex items-center gap-3">
                  <Image src="/frontgate_compass.jpg" alt="Compass Logo" width={160} height={40} />
                </div>
                <p className="text-sm text-muted-foreground">License: 02233342 CA</p>
            </div>

            {/* Column 2: Contact & Service Areas */}
            <div className="text-sm text-muted-foreground flex flex-col gap-y-3 text-center md:text-left">
                <div className="mb-4">
                  <h4 className="font-bold font-headline text-lg text-foreground mb-2">Contact Information</h4>
                  <p>Compass</p>
                  <p>11601 Wilshire Blvd Suite 101, Los Angeles, CA 90025</p>
                  <p>Office: (310) 820-0195</p>
                  <p>Direct: (818) 269-5059</p>
                  <p>Email: darrioncalabasas@gmail.com</p>
                </div>
                <div>
                   <h4 className="font-bold font-headline text-lg text-foreground mb-2">Serving Greater Los Angeles</h4>
                   <p className="flex flex-wrap gap-x-3 gap-y-1 justify-center md:justify-start">
                     {serviceAreas.map(area => (<span key={area}>{area}</span>))}
                   </p>
                </div>
            </div>

            {/* Column 3: Social & Copyright */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right text-sm text-muted-foreground">
                <div className="flex items-center gap-4 mb-4">
                    <Link href="https://www.instagram.com/darrion_calabasas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Instagram className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                    <Link href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <TikTokIcon className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                </div>
                <div className="mt-auto">
                    <p>&copy; {new Date().getFullYear()} Darrion Robinson. All Rights Reserved.</p>
                    <p>Your California & Dubai Real Estate Expert</p>
                    <p className="mt-2 text-xs">
                        Website by <a href="https://opencasastudio.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">OpenCasa Studio</a>
                    </p>
                </div>
            </div>
        </div>
        <div className="border-t border-border/20 pt-8 text-center text-xs text-muted-foreground">
          <p>
            {agentName} is a licensed real estate agent affiliated with {brokerageName}. All material presented herein is intended for informational purposes only. Information is compiled from sources deemed reliable but is subject to errors, omissions, or withdrawal without notice. No statement is made as to the accuracy of any description. All measurements and square footages are approximate. This is not intended to solicit property already listed. Equal Housing Opportunity.
          </p>
        </div>
      </div>
    </footer>
  );
}
