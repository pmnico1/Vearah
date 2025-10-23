import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const geistSans = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vearah - Creative Digital Agency",
    template: "%s | Vearah"
  },
  description: "Vearah is a creative digital agency specializing in innovative web design, development, and digital solutions. We transform ideas into exceptional digital experiences.",
  keywords: [
    "digital agency",
    "web design",
    "web development",
    "creative agency",
    "digital solutions",
    "UI/UX design",
    "branding",
    "portfolio"
  ],
  authors: [{ name: "Vearah Team" }],
  creator: "Vearah",
  publisher: "Vearah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vearah.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vearah.com',
    title: 'Vearah - Creative Digital Agency',
    description: 'Vearah is a creative digital agency specializing in innovative web design, development, and digital solutions.',
    siteName: 'Vearah',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vearah - Creative Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vearah - Creative Digital Agency',
    description: 'Vearah is a creative digital agency specializing in innovative web design, development, and digital solutions.',
    images: ['/images/twitter-image.jpg'],
    creator: '@vearah',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
