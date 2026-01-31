import type { Metadata } from "next";
import "./globals.css";
import FloatingContact from "./components/FloatingContact";

export const metadata: Metadata = {
  title: "Fortuna | Professional Interior Design Agency",
  description:
    "At Fortuna we design stylish, functional interiors that reflect your vision and enhance your space. From homes to commercial projects, we bring creativity and expertise to every detail.",
  icons: {
    icon: [
      {
        url: "https://framerusercontent.com/images/K7nEBxK66GMILjBvhmE9qH3Qmto.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://framerusercontent.com/images/K7nEBxK66GMILjBvhmE9qH3Qmto.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "https://framerusercontent.com/images/E22YvuXIEa1oQcphHSOCWWSNr9o.png",
  },
  openGraph: {
    type: "website",
    title: "Fortuna | Professional Interior Design Agency",
    description:
      "At Fortuna we design stylish, functional interiors that reflect your vision and enhance your space. From homes to commercial projects, we bring creativity and expertise to every detail.",
    images: ["https://framerusercontent.com/images/JZI8YzJ7valWSxaZ1UxuawgEA.png"],
    url: "https://Fortuna.framer.website/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortuna | Professional Interior Design Agency",
    description:
      "At Fortuna we design stylish, functional interiors that reflect your vision and enhance your space. From homes to commercial projects, we bring creativity and expertise to every detail.",
    images: ["https://framerusercontent.com/images/JZI8YzJ7valWSxaZ1UxuawgEA.png"],
  },
  robots: "max-image-preview:large",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
