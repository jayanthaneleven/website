import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Housemood | Professional Interior Design Agency",
  description:
    "At Housemood we design stylish, functional interiors that reflect your vision and enhance your space. From homes to commercial projects, we bring creativity and expertise to every detail.",
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
    title: "Housemood | Professional Interior Design Agency",
    description:
      "At Housemood we design stylish, functional interiors that reflect your vision and enhance your space. From homes to commercial projects, we bring creativity and expertise to every detail.",
    images: ["https://framerusercontent.com/images/JZI8YzJ7valWSxaZ1UxuawgEA.png"],
    url: "https://housemood.framer.website/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Housemood | Professional Interior Design Agency",
    description:
      "At Housemood we design stylish, functional interiors that reflect your vision and enhance your space. From homes to commercial projects, we bring creativity and expertise to every detail.",
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
      <body>{children}</body>
    </html>
  );
}
