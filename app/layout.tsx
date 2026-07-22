import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rosebud Golf Course | Quincy, Massachusetts",
    template: "%s | Rosebud Golf Course",
  },
  description: "An approachable 18-hole, par-71 golf course serving Quincy and the South Shore since 1968.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<div className="mobile-sticky"><a href="/tee-times">Book a tee time</a><a href="/events">Plan an event</a></div></body></html>;
}
