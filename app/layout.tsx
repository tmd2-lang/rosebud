import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    title: {
      default: "Rosebud Golf Course | Quincy, Massachusetts",
      template: "%s | Rosebud Golf Course",
    },
    description: "An approachable 18-hole, par-71 golf course serving Quincy and the South Shore since 1968.",
    openGraph: {
      title: "Events at Rosebud Golf Course",
      description: "Weddings, corporate events, golf outings, and private celebrations in Quincy, Massachusetts.",
      type: "website",
      images: [{ url: socialImage, width: 1731, height: 909, alt: "Rosebud weddings, corporate events, and golf outings" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Events at Rosebud Golf Course",
      description: "Weddings, corporate events, golf outings, and private celebrations in Quincy, Massachusetts.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<div className="mobile-sticky"><a href="/tee-times">Book a tee time</a><a href="/events">Plan an event</a></div></body></html>;
}
