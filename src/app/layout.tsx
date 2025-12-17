
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: "700", variable: '--font-playfair-display' });

export const metadata: Metadata = {
  title: 'Darrion Robinson | Calabasas Realtor | Luxury Homes in Los Angeles',
  description: 'Helping families buy and sell luxury homes in Calabasas and Los Angeles. Trusted Realtor providing expert guidance and local insight.',
  keywords: ['Calabasas Realtor', 'Los Angeles homes for sale', 'luxury real estate', 'buy home Calabasas', 'sell property LA', 'Darrion Robinson Realtor'],
  openGraph: {
    title: 'Darrion Robinson | Calabasas Realtor',
    description: 'Luxury real estate in Calabasas and Los Angeles with expert guidance from Darrion Robinson.',
    images: ['https://darrionsellscalabasas.com/preview.jpg'],
    url: 'https://darrionsellscalabasas.com',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://darrionsellscalabasas.com/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'G-XXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
