
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#featured", label: "Listings" },
  { href: "/#buyers", label: "Buyers" },
  { href: "/#contact", label: "Contact" },
  { href: "/admin/properties", label: "Admin" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    // Set initial state
    handleScroll();
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
              : "text-foreground/80",
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
        "sticky top-0 z-50 w-full transition-all duration-300 bg-background/80 shadow-md backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 font-bold text-lg font-headline">
          <Home className="h-7 w-7 text-primary" />
          <div>
            <span className="block text-xl">Jane Doe</span>
            <span className="block text-xs text-muted-foreground font-body font-medium tracking-widest">YOUR TRUSTED REALTOR</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLinkItems />
        </nav>

        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <div className="p-6">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="mb-8 flex items-center gap-3 font-bold text-lg font-headline">
                   <Home className="h-7 w-7 text-primary" />
                   <div>
                        <span className="block text-xl">Jane Doe</span>
                        <span className="block text-xs text-muted-foreground font-body font-medium tracking-widest">YOUR TRUSTED REALTOR</span>
                    </div>
                </Link>
                <nav className="flex flex-col gap-4">
                  <NavLinkItems isMobile />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
