import Link from "next/link";
import { Home, Facebook, Twitter, Instagram } from "lucide-react";

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
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jane Doe Realty. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
