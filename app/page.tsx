import Link from "next/link";
import { SiteFooter, SiteHeader, SiteImage } from "./site-components";

const facts = [
  ["18 holes", "Par 71"],
  ["Public tee times", "Available daily"],
  ["Walkable course", "Nine- and 18-hole rates"],
  ["Quincy, MA", "Minutes from Boston"],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero section-shell">
          <div className="hero-copy reveal">
            <p className="eyebrow">Quincy, Massachusetts <span>·</span> Est. 1968</p>
            <h1>A local course worth coming back to.</h1>
            <p className="hero-lede">Rosebud is an 18-hole, par-71 golf course serving Quincy and the South Shore. Come out for a weekend round, nine holes after work, or an outing with the whole group.</p>
            <div className="button-row">
              <Link className="button button-primary" href="/tee-times">Book a tee time</Link>
              <Link className="button button-secondary" href="/events">Plan an event</Link>
            </div>
            <p className="fine-print">Public play welcome <span>·</span> Annual memberships available</p>
          </div>
          <SiteImage className="hero-placeholder" src="/rosebud-images/hero.png" alt="Rosebud fairway in warm morning light" position="center" eager />
        </section>

        <section className="fact-strip" aria-label="Course highlights">
          <div className="section-shell fact-grid">
            {facts.map(([title, detail]) => (
              <div className="fact" key={title}>
                <strong>{title}</strong>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-shell split welcome">
          <div className="section-copy">
            <p className="eyebrow">Your course on the South Shore</p>
            <h2>Good golf, without the country-club attitude.</h2>
            <p>Rosebud has welcomed local golfers since 1968. Our course is approachable enough for an occasional round and interesting enough to keep regulars paying attention.</p>
            <p>You’ll find mature trees, old stone walls, small greens, and a few decisions that matter. You’ll also find a friendly staff, a comfortable clubhouse, and a tee sheet that’s open to the public.</p>
            <Link className="text-link" href="/about">Our story <span aria-hidden="true">→</span></Link>
          </div>
          <SiteImage className="landscape-placeholder" src="/rosebud-images/golfers-walking.png" alt="Five golfers walking a tree-lined Rosebud fairway" position="center" />
        </section>

        <section className="section soft-section">
          <div className="section-shell">
            <div className="section-heading centered-heading">
              <p className="eyebrow">Golf at Rosebud</p>
              <h2>Play it your way.</h2>
              <p>Eighteen on Saturday morning, nine after work, or a season full of league play—Rosebud makes it easy to get out and play.</p>
            </div>
            <div className="card-grid three-up">
              <article className="info-card">
                <span className="card-number">01</span>
                <h3>Daily golf</h3>
                <p>Public tee times are available seven days a week throughout the season.</p>
                <Link className="text-link" href="/golf#rates">View rates <span>→</span></Link>
              </article>
              <article className="info-card">
                <span className="card-number">02</span>
                <h3>Leagues</h3>
                <p>Join an established league or talk to us about bringing your group to Rosebud.</p>
                <Link className="text-link" href="/golf#leagues">Explore leagues <span>→</span></Link>
              </article>
              <article className="info-card accent-card">
                <span className="card-number">03</span>
                <h3>Membership</h3>
                <p>Get preferred booking, reduced rates, member events, and more time on the course.</p>
                <Link className="text-link" href="/membership">View membership <span>→</span></Link>
              </article>
            </div>
          </div>
        </section>

        <section className="signature-section">
          <div className="section-shell signature-grid">
            <SiteImage className="signature-placeholder" src="/rosebud-images/hole-14.png" alt="Hole 14 at Rosebud playing across a pond to a green framed by flowering shrubs" position="center" />
            <div className="signature-copy">
              <p className="eyebrow light-eyebrow">Hole 14 <span>·</span> The Garden</p>
              <h2>Short on the card.<br />Not always simple.</h2>
              <p>The fourteenth is a short par 3 played over a pond to a slightly elevated green. Flowering shrubs surround the putting surface, recalling the nursery that once occupied part of the property.</p>
              <p>Pick the right club, trust the number, and don’t get distracted by the view.</p>
              <div className="hole-stat">Par 3 <span>·</span> 142 yards from the middle tees</div>
              <Link className="button button-cream" href="/golf">Explore the course</Link>
            </div>
          </div>
        </section>

        <section className="section section-shell">
          <div className="section-heading centered-heading wide-heading">
            <p className="eyebrow">Gather at Rosebud</p>
            <h2>Bring the group. We’ll take care of the details.</h2>
            <p>From charity tournaments and company outings to showers, celebrations, and family gatherings, Rosebud offers a relaxed setting and a team that knows how to keep things moving.</p>
          </div>
          <div className="event-grid">
            <article className="feature-card">
              <SiteImage className="card-placeholder" src="/rosebud-images/corporate-outing-carts.png" alt="Golf carts lined up for a Rosebud corporate outing" position="center" />
              <div className="feature-card-copy">
                <p className="eyebrow">Golf outings</p>
                <h3>A good day for a great cause.</h3>
                <p>Host a charity tournament, company outing, customer event, or group golf day for players of all experience levels.</p>
                <Link className="text-link" href="/outings">Plan a golf outing <span>→</span></Link>
              </div>
            </article>
            <article className="feature-card">
              <SiteImage className="card-placeholder" src="/rosebud-images/rose-room.png" alt="The Rose Room set with round tables and flowers" position="center" />
              <div className="feature-card-copy">
                <p className="eyebrow">The Rose Room</p>
                <h3>A comfortable place to gather.</h3>
                <p>A clubhouse venue overlooking the 18th green, with flexible layouts and space for up to 120 guests.</p>
                <Link className="text-link" href="/events">Explore private events <span>→</span></Link>
              </div>
            </article>
          </div>
        </section>

        <section className="membership-band">
          <div className="section-shell split membership-split">
            <div className="section-copy">
              <p className="eyebrow">More golf. More often.</p>
              <h2>Make Rosebud your home course.</h2>
              <p>Rosebud membership is designed for golfers who want to play regularly without the formality or expense of a traditional private club.</p>
              <ul className="check-list compact-list">
                <li>Preferred tee-time access</li>
                <li>Reduced member green fees</li>
                <li>Leagues and member events</li>
              </ul>
              <Link className="button button-primary" href="/membership">See membership options</Link>
            </div>
            <SiteImage className="landscape-placeholder" src="/rosebud-images/course-scenic.png" alt="Rosebud fairway bordered by a stone wall and mature trees" position="center" />
          </div>
        </section>

        <section className="section section-shell story-teaser">
          <p className="eyebrow">Independently owned. Locally rooted.</p>
          <blockquote>“Rosebud was built for local golfers. More than fifty years later, it still is.”</blockquote>
          <p>Frank and Eleanor Rose opened Rosebud as a nine-hole course in 1968. Their goal was simple: give local players a welcoming place to enjoy the game.</p>
          <Link className="text-link" href="/about">Read the Rosebud story <span>→</span></Link>
        </section>

        <section className="final-cta">
          <div className="section-shell final-cta-inner">
            <div>
              <p className="eyebrow light-eyebrow">A round close to home</p>
              <h2>See you at Rosebud.</h2>
              <p>Find a tee time, plan a group outing, or start a conversation about your next event.</p>
            </div>
            <div className="button-row">
              <Link className="button button-cream" href="/tee-times">Book a tee time</Link>
              <Link className="button button-outline-light" href="/contact">Contact Rosebud</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
