
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#listings", label: "Listings" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#neighborhoods", label: "Neighborhoods" },
  { href: "/#resources", label: "Resources" },
  { href: "/#market-updates", label: "Updates" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinkItems = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile && setMobileMenuOpen(false)}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
             (pathname === link.href || (link.href.startsWith('/#') && pathname === '/'))
              ? "text-primary"
              : isScrolled || mobileMenuOpen ? "text-foreground/80" : "text-primary-foreground/80 hover:text-primary-foreground",
            isMobile && "block py-2 text-lg !text-foreground/80"
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-3 font-bold text-lg font-headline">
          <div className={cn("rounded-full p-2 transition-colors", isScrolled ? "bg-primary" : "bg-primary/90")}>
            <Home className={cn("h-6 w-6 transition-colors", isScrolled ? "text-primary-foreground" : "text-white")} />
          </div>
          <div className={cn(isScrolled ? "text-foreground" : "text-white")}>
            <span className="block text-xl">Jane Doe</span>
            <span className="block text-xs font-body font-medium tracking-widest uppercase">Your Trusted Realtor</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLinkItems />
           <Button asChild>
            <Link href="/#contact">Contact Agent</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-foreground" : "text-white hover:bg-white/10 hover:text-white")}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <div className="p-6">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="mb-8 flex items-center gap-3 font-bold text-lg font-headline">
                   <div className="bg-primary rounded-full p-2">
                        <Home className="h-6 w-6 text-primary-foreground" />
                   </div>
                   <div>
                        <span className="block text-xl">Jane Doe</span>
                        <span className="block text-xs text-muted-foreground font-body font-medium tracking-widest">YOUR TRUSTED REALTOR</span>
                    </div>
                </Link>
                <nav className="flex flex-col gap-4">
                  <NavLinkItems isMobile />
                  <Button asChild className="mt-4">
                    <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact Agent</Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    