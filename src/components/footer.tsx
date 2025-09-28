
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const serviceAreas = ["Calabasas", "Malibu", "Beverly Hills", "Santa Monica", "West Hollywood", "Hidden Hills"];

  return (
    <footer className="bg-secondary border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
            {/* Column 1: Brand & Broker */}
            <div className="flex flex-col items-center md:items-start gap-4">
                <Link href="/" className="font-bold text-2xl font-headline text-primary">
                Darrion Robinson
                </Link>
                <div className="flex items-center gap-3">
                  <Image src="/cb-luxury-logo-white.png" alt="Coldwell Banker Global Luxury Logo" width={200} height={40} />
                </div>
                <p className="text-sm text-muted-foreground">License: 02233342 CA</p>
            </div>

            {/* Column 2: Contact & Service Areas */}
            <div className="text-sm text-muted-foreground flex flex-col gap-y-3">
                <div className="mb-4">
                  <h4 className="font-bold font-headline text-lg text-foreground mb-2">Contact Information</h4>
                  <p>Coldwell Banker Realty</p>
                  <p>23647 Calabasas Rd, Calabasas, CA 91302</p>
                  <p>Office: (818) 222-0023</p>
                  <p>Direct: (818) 269-5059</p>
                  <p>Email: darrioncalabasas@gmail.com</p>
                </div>
                <div>
                   <h4 className="font-bold font-headline text-lg text-foreground mb-2">Serving Greater Los Angeles</h4>
                   <p className="flex flex-wrap gap-x-3 gap-y-1">
                     {serviceAreas.map(area => (<span key={area}>{area}</span>))}
                   </p>
                </div>
            </div>

            {/* Column 3: Copyright */}
            <div className="text-center md:text-right text-sm text-muted-foreground self-end">
                <p>&copy; {new Date().getFullYear()} Darrion Robinson. All Rights Reserved.</p>
                <p>Your California & Dubai Real Estate Expert</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
