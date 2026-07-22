import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  ["Golf", "/golf"],
  ["Membership", "/membership"],
  ["Outings", "/outings"],
  ["Events", "/events"],
  ["Our Story", "/about"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="condition-bar">
        <div className="section-shell condition-inner">
          <span><i className="status-dot" /> Course open</span>
          <span>Carts available</span>
          <span className="weather-note">Practice green open</span>
        </div>
      </div>
      <div className="section-shell nav-shell">
        <Link className="brand" href="/" aria-label="Rosebud Golf Course home">
          <span className="brand-mark" aria-hidden="true">R</span>
          <span className="brand-type"><strong>Rosebud</strong><small>Golf Course · Quincy, MA</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="button button-primary header-cta" href="/tee-times">Book a tee time</Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/tee-times">Book a tee time</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <Link className="brand inverse-brand" href="/">
            <span className="brand-mark" aria-hidden="true">R</span>
            <span className="brand-type"><strong>Rosebud</strong><small>Golf Course · Quincy, MA</small></span>
          </Link>
          <p>South Shore golf since 1968.<br />18 holes · Par 71 · Public play welcome</p>
        </div>
        <div><h3>Visit</h3><p>68 Rose Hill Road<br />Quincy, MA 02169</p><p><a href="tel:+16175551968">617-555-1968</a></p></div>
        <div><h3>Explore</h3><Link href="/golf">Golf & rates</Link><Link href="/membership">Membership</Link><Link href="/about">Our story</Link><Link href="/contact">Contact</Link></div>
        <div><h3>Gather</h3><Link href="/outings">Golf outings</Link><Link href="/events">Private events</Link><Link href="/events#rose-room">The Rose Room</Link><Link href="/contact">Event inquiry</Link></div>
      </div>
      <div className="section-shell footer-bottom"><span>© 2026 Rosebud Golf Course</span><span>Demo website · All details are fictional</span></div>
    </footer>
  );
}

export function Placeholder({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return <div className={`placeholder ${dark ? "placeholder-dark" : ""} ${className}`} role="img" aria-label="Image placeholder"><span>Placeholder</span></div>;
}

export function PageHero({ eyebrow, title, body, children, placeholder = true }: { eyebrow: string; title: string; body: string; children?: ReactNode; placeholder?: boolean }) {
  return (
    <section className="page-hero">
      <div className={`section-shell page-hero-grid ${placeholder ? "" : "single-hero"}`}>
        <div className="page-hero-copy">
          <p className="eyebrow light-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{body}</p>
          {children}
        </div>
        {placeholder && <Placeholder className="page-hero-placeholder" dark />}
      </div>
    </section>
  );
}

export function PageFrame({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}

export function InquiryForm({ type = "event" }: { type?: "event" | "membership" | "contact" | "outing" }) {
  const labels: Record<string, string[]> = {
    event: ["Type of event", "Preferred date", "Estimated guest count", "Meal preference"],
    membership: ["Membership interest", "Typical playing frequency"],
    contact: ["How can we help?"],
    outing: ["Organization", "Preferred date", "Estimated player count", "Nine or 18 holes"],
  };
  return (
    <form className="inquiry-form" action="/contact#thanks">
      <div className="form-row"><label>First name<input name="firstName" required /></label><label>Last name<input name="lastName" required /></label></div>
      <div className="form-row"><label>Email<input type="email" name="email" required /></label><label>Phone<input type="tel" name="phone" /></label></div>
      {labels[type].map((label) => <label key={label}>{label}<input name={label.toLowerCase().replaceAll(" ", "-")} /></label>)}
      <label>Additional details<textarea name="details" rows={5} /></label>
      <button className="button button-primary" type="submit">Send inquiry</button>
      <p className="form-note">This is a demo form. No information is submitted.</p>
    </form>
  );
}
