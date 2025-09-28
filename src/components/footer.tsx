import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            {/* Column 1: Brand & Broker */}
            <div className="flex flex-col items-center md:items-start gap-4">
                <Link href="/" className="font-bold text-2xl font-headline text-primary">
                Darrion Robinson
                </Link>
                <div className="flex items-center gap-3">
                  <Image src="/cb-logo.png" alt="Coldwell Banker Realty Logo" width={100} height={50} className="filter invert brightness-0" />
                </div>
                <p className="text-sm text-muted-foreground">License: 02233342 CA</p>
            </div>

            {/* Column 2: Contact Info */}
            <div className="text-sm text-muted-foreground flex flex-col gap-2">
                <h4 className="font-bold font-headline text-lg text-foreground mb-2">Contact Information</h4>
                <p>Coldwell Banker Realty</p>
                <p>23647 Calabasas Rd, Calabasas, CA 91302</p>
                <p>Office: (818) 222-0023</p>
                <p>Direct: (818) 269-5059</p>
                <p>Email: darrion.robinson@cbrealty.com</p>
            </div>

            {/* Column 3: Copyright */}
            <div className="text-center md:text-right text-sm text-muted-foreground self-end">
                <p>&copy; {new Date().getFullYear()} Darrion Robinson. All Rights Reserved.</p>
                <p>Your California Real Estate Expert</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
