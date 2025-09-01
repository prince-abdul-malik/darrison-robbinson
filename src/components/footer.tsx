import Link from "next/link";
import { Home, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const ZillowIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}><path d="M16.48.615a1.63 1.63 0 0 0-2.256.448l-7.73 10.453a.683.683 0 0 0 .584 1.04h4.417l-3.35 9.223a.681.681 0 0 0 .633.92.69.69 0 0 0 .6-.29l7.73-10.453a.683.683 0 0 0-.584-1.04H14.12l3.35-9.222a.681.681 0 0 0-.29-.681.703.703 0 0 0-.7-.014Z" /></svg>
)

const RealtorIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 260 260" fill="currentColor" height="1em" width="1em" {...props}><path d="M129.58 0C58.01 0 0 58.01 0 129.58c0 71.58 58.01 129.58 129.58 129.58 71.58 0 129.58-58 129.58-129.58C259.16 58.01 201.16 0 129.58 0zm43.34 191.13h-22.3v-54.84c0-4.38-3.54-7.92-7.92-7.92h-27.7c-4.38 0-7.92 3.54-7.92 7.92v54.84h-22.3v-78.4c0-4.38 3.54-7.92 7.92-7.92h14.38v-10.1c0-4.38 3.54-7.92 7.92-7.92h27.7c4.38 0 7.92 3.54 7.92 7.92v10.1h14.38c4.38 0 7.92 3.54 7.92 7.92v78.4z" /></svg>
)

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-3 font-bold text-lg font-headline">
            <Home className="h-7 w-7 text-primary" />
            <div>
              <span className="block text-xl">Jane Doe</span>
              <span className="block text-xs text-muted-foreground font-body font-medium tracking-widest">YOUR TRUSTED REALTOR</span>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Jane Doe Realty. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
             <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <ZillowIcon className="h-5 w-5" />
            </Link>
             <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <RealtorIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

    