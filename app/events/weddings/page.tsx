import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm, PageFrame, PageHero, SiteImage } from "../../site-components";

export const metadata: Metadata = { title: "Weddings at Rosebud", description: "Plan a wedding ceremony, reception, rehearsal dinner, or shower overlooking Rosebud’s 18th green." };

const weddingDetails = ["Up to 120 guests", "Indoor and patio spaces", "Ceremony and reception layouts", "Private getting-ready room", "In-house catering", "Hosted or cash bar", "Tables and chairs", "On-site parking"];

export default function WeddingsPage() {
  return <PageFrame>
    <PageHero eyebrow="Weddings at Rosebud" title="A celebration that feels like the two of you." body="Gather your favorite people for a relaxed, beautiful wedding overlooking the 18th green—without the formality of a traditional country club." image={{ src: "/rosebud-images/event.png", alt: "Wedding guests dining beneath string lights at Rosebud", position: "center" }}>
      <div className="button-row"><Link className="button button-cream" href="#wedding-inquiry">Check your date</Link><Link className="button button-outline-light" href="/events">All events</Link></div>
    </PageHero>
    <section className="content-section section-shell"><div className="split"><SiteImage className="landscape-placeholder" src="/rosebud-images/rose-room.png" alt="The Rose Room set for an intimate wedding reception" position="center" /><div className="section-copy"><p className="eyebrow">Your day, your pace</p><h2>One welcoming place for every part of the celebration.</h2><p>Host a ceremony on the lawn, cocktails on the covered patio, and dinner and dancing in the Rose Room. Our events team helps coordinate the room layout, timing, menu, bar, and vendor arrivals.</p><p>Planning something smaller? Rosebud is also a comfortable fit for rehearsal dinners, showers, anniversary parties, and intimate receptions.</p></div></div></section>
    <section className="content-section soft-section"><div className="section-shell"><div className="section-heading"><p className="eyebrow">Wedding possibilities</p><h2>Build the celebration around your people.</h2></div><div className="package-grid"><article className="package-card"><h3>The Rose Room Reception</h3><p>Cocktail hour, dinner, bar service, and dancing for a relaxed reception overlooking the course.</p></article><article className="package-card"><h3>Ceremony &amp; Reception</h3><p>An outdoor ceremony, patio cocktail hour, and a full Rose Room reception with one coordinated timeline.</p></article><article className="package-card"><h3>Wedding Weekend Gatherings</h3><p>A welcoming rehearsal dinner, post-wedding brunch, or shower with flexible menus and layouts.</p></article></div></div></section>
    <section className="content-section section-shell"><div className="section-heading"><p className="eyebrow">What’s available</p><h2>The practical details, covered.</h2></div><div className="amenity-grid">{weddingDetails.map(detail => <div className="amenity" key={detail}>{detail}</div>)}</div></section>
    <section className="content-section soft-section" id="wedding-inquiry"><div className="section-shell form-layout"><div className="form-intro"><p className="eyebrow">Start planning</p><h2>Tell us about your wedding.</h2><p>Share your preferred date, guest count, plans, and approximate budget. Our events team will use these details to check availability and prepare the right options.</p></div><InquiryForm type="wedding" /></div></section>
  </PageFrame>;
}
