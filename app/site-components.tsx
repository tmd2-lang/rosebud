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
        <div><h3>Gather</h3><Link href="/events/weddings">Weddings</Link><Link href="/events/corporate">Corporate events</Link><Link href="/outings">Golf outings</Link><Link href="/events#event-inquiry">Event inquiry</Link></div>
      </div>
      <div className="section-shell footer-bottom"><span>© 2026 Rosebud Golf Course</span><span>Demo website · All details are fictional</span></div>
    </footer>
  );
}

export function Placeholder({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return <div className={`placeholder ${dark ? "placeholder-dark" : ""} ${className}`} role="img" aria-label="Image placeholder"><span>Placeholder</span></div>;
}

export function SiteImage({ src, alt, className = "", position = "center", eager = false }: { src: string; alt: string; className?: string; position?: string; eager?: boolean }) {
  return <figure className={`site-image ${className}`}><img src={src} alt={alt} style={{ objectPosition: position }} loading={eager ? "eager" : "lazy"} /></figure>;
}

export function PageHero({ eyebrow, title, body, children, image, placeholder = true }: { eyebrow: string; title: string; body: string; children?: ReactNode; image?: { src: string; alt: string; position?: string }; placeholder?: boolean }) {
  return (
    <section className="page-hero">
      <div className={`section-shell page-hero-grid ${placeholder || image ? "" : "single-hero"}`}>
        <div className="page-hero-copy">
          <p className="eyebrow light-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{body}</p>
          {children}
        </div>
        {image ? <SiteImage className="page-hero-placeholder" src={image.src} alt={image.alt} position={image.position} eager /> : placeholder && <Placeholder className="page-hero-placeholder" dark />}
      </div>
    </section>
  );
}

export function PageFrame({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}

type InquiryType = "event" | "wedding" | "corporate" | "membership" | "contact" | "outing";

function SelectField({ label, name, options, required = false }: { label: string; name: string; options: string[]; required?: boolean }) {
  return <label>{label}<select name={name} defaultValue="" required={required}><option value="" disabled>Select an option</option>{options.map(option => <option key={option} value={option}>{option}</option>)}</select></label>;
}

export function InquiryForm({ type = "event" }: { type?: InquiryType }) {
  const eventFields = {
    event: <>
      <SelectField label="Type of event" name="eventType" required options={["Wedding or reception", "Corporate event", "Golf outing", "Shower or celebration", "Other private event"]} />
      <div className="form-row"><label>Preferred date<input type="date" name="preferredDate" required /></label><label>Estimated guest count<input type="number" name="guestCount" min="1" max="200" /></label></div>
      <SelectField label="Food and beverage needs" name="foodBeverageNeeds" options={["Full meal and bar", "Meal only", "Cocktail reception", "Light refreshments", "Not sure yet"]} />
      <SelectField label="Estimated budget" name="budgetRange" options={["Under $5,000", "$5,000–$10,000", "$10,000–$20,000", "$20,000+", "Not sure yet"]} />
    </>,
    wedding: <>
      <input type="hidden" name="eventType" value="Wedding or reception" />
      <label>Couple&apos;s names<input name="eventName" required /></label>
      <div className="form-row"><label>Preferred date<input type="date" name="preferredDate" required /></label><label>Alternate date<input type="date" name="alternateDate" /></label></div>
      <div className="form-row"><label>Estimated guest count<input type="number" name="guestCount" min="1" max="120" required /></label><SelectField label="Celebration plans" name="celebrationType" options={["Ceremony and reception", "Reception only", "Rehearsal dinner", "Wedding shower", "Not sure yet"]} /></div>
      <SelectField label="Food and beverage needs" name="foodBeverageNeeds" options={["Plated dinner and hosted bar", "Buffet and hosted bar", "Cocktail reception", "Brunch or lunch", "Not sure yet"]} />
      <SelectField label="Estimated budget" name="budgetRange" options={["Under $10,000", "$10,000–$20,000", "$20,000–$35,000", "$35,000+", "Not sure yet"]} />
    </>,
    corporate: <>
      <input type="hidden" name="eventType" value="Corporate event" />
      <label>Company or organization<input name="organization" required /></label>
      <div className="form-row"><SelectField label="Type of gathering" name="corporateEventType" required options={["Company dinner", "Team meeting or retreat", "Client event", "Holiday party", "Awards banquet", "Other"]} /><label>Preferred date<input type="date" name="preferredDate" required /></label></div>
      <div className="form-row"><label>Estimated guest count<input type="number" name="guestCount" min="1" max="120" required /></label><SelectField label="Food and beverage needs" name="foodBeverageNeeds" options={["Breakfast or brunch", "Lunch", "Dinner", "Cocktail reception", "Not sure yet"]} /></div>
      <SelectField label="Meeting and AV needs" name="meetingNeeds" options={["Presentation screen and microphone", "Breakout tables", "Standard room setup", "No AV needed", "Not sure yet"]} />
    </>,
    outing: <>
      <input type="hidden" name="eventType" value="Golf outing" />
      <label>Company or organization<input name="organization" required /></label>
      <div className="form-row"><label>Preferred date<input type="date" name="preferredDate" required /></label><label>Alternate date<input type="date" name="alternateDate" /></label></div>
      <div className="form-row"><label>Estimated player count<input type="number" name="playerCount" min="24" max="144" required /></label><SelectField label="Golf format" name="golfFormat" options={["Nine-hole social", "18-hole consecutive tee times", "18-hole shotgun start", "Not sure yet"]} /></div>
      <SelectField label="Food and beverage needs" name="foodBeverageNeeds" options={["Boxed lunch", "Post-round buffet", "Awards dinner", "Drink tickets only", "Not sure yet"]} />
      <SelectField label="Estimated budget" name="budgetRange" options={["Under $5,000", "$5,000–$10,000", "$10,000–$20,000", "$20,000+", "Not sure yet"]} />
    </>,
    membership: <><SelectField label="Membership interest" name="membershipInterest" options={["Individual", "Couple", "Family", "Young professional", "Not sure yet"]} /><SelectField label="Typical playing frequency" name="playingFrequency" options={["A few times a month", "Once a week", "Several times a week", "Seasonally"]} /></>,
    contact: <label>How can we help?<input name="subject" /></label>,
  };

  return (
    <form className="inquiry-form" action="/api/event-inquiry" method="post">
      <input type="hidden" name="leadSource" value="rosebud-website" />
      <div className="form-row"><label>First name<input name="firstName" required /></label><label>Last name<input name="lastName" required /></label></div>
      <div className="form-row"><label>Email<input type="email" name="email" required /></label><label>Phone<input type="tel" name="phone" /></label></div>
      {eventFields[type]}
      <label>Additional details<textarea name="details" rows={5} /></label>
      <button className="button button-primary" type="submit">Send inquiry</button>
      <p className="form-note">This is a demo form. No information is submitted.</p>
    </form>
  );
}
