
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
  { href: "/#services", label: "Services" },
  { href: "/#dubai", label: "Dubai" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
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
            isScrolled || pathname !== "/" || isMobile ? "text-foreground" : "text-white",
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
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled || pathname !== "/"
          ? "bg-background/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-10">
      <Link
        href="/"
        className={cn(
          "font-bold text-xl font-headline transition-colors",
          isScrolled || pathname !== "/" ? "text-primary" : "text-white"
        )}
      >
        Darrion Robinson
      </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLinkItems />
        </nav>

        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("hover:bg-transparent", isScrolled || pathname !== "/" ? "text-foreground hover:text-primary" : "text-white hover:text-white/80")}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <div className="p-6">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="mb-8 block font-bold text-2xl font-headline text-foreground">
                   Darrion Robinson
                </Link>
                <nav className="flex flex-col gap-4">
                  <NavLinkItems isMobile />
                  <Button asChild className="mt-4 rounded-none">
                    <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact Me</Link>
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
