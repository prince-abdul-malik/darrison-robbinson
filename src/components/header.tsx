"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#listings", label: "Listings" },
  { href: "/#resources", label: "Resources" },
  { href: "/#neighborhoods", label: "Neighborhoods" },
  { href: "/#about", label: "About" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
            isScrolled || isMobile ? "text-foreground" : "text-white",
            isMobile && "block py-2 text-lg"
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
        isScrolled ? "bg-background/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-10">
        <Link href="/" className={cn("font-bold text-2xl font-headline transition-colors", isScrolled ? "text-foreground" : "text-white")}>
          Eleanor Vance
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLinkItems />
           <Button asChild variant={isScrolled ? "default" : "outline"} className={cn(!isScrolled && "text-black border-white hover:bg-white hover:text-black")}>
            <Link href="/#contact">Contact</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("hover:bg-transparent", isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80")}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <div className="p-6">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="mb-8 block font-bold text-2xl font-headline text-foreground">
                   Eleanor Vance
                </Link>
                <nav className="flex flex-col gap-4">
                  <NavLinkItems isMobile />
                  <Button asChild className="mt-4">
                    <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
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
