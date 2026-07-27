import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm, PageFrame, PageHero, SiteImage } from "../../site-components";

export const metadata: Metadata = { title: "Corporate Events at Rosebud", description: "Host company dinners, client events, meetings, retreats, holiday parties, and awards banquets at Rosebud." };

const corporateDetails = ["Up to 120 guests", "Flexible room layouts", "Presentation screen", "Wireless microphone", "Breakfast through dinner", "Hosted or cash bar", "Covered patio", "On-site parking"];

export default function CorporateEventsPage() {
  return <PageFrame>
    <PageHero eyebrow="Corporate events" title="Bring the team together somewhere worth leaving the office for." body="Plan a company dinner, client event, meeting, retreat, holiday party, or awards night with flexible space and an experienced events team." image={{ src: "/rosebud-images/clubhouse-patio.png", alt: "The Rosebud clubhouse patio prepared for a corporate gathering", position: "center" }}>
      <div className="button-row"><Link className="button button-cream" href="#corporate-inquiry">Check availability</Link><Link className="button button-outline-light" href="/outings">Add a golf outing</Link></div>
    </PageHero>
    <section className="content-section section-shell"><div className="split"><SiteImage className="landscape-placeholder" src="/rosebud-images/rose-room.png" alt="The Rose Room arranged for a company dinner and presentation" position="center" /><div className="section-copy"><p className="eyebrow">Work, celebrate, or both</p><h2>A flexible clubhouse setting with everything close at hand.</h2><p>Set the Rose Room for a presentation, team meal, awards program, or cocktail reception. The covered patio makes it easy to add fresh air and golf-course views to the agenda.</p><p>For a full company day, pair your event with tee times, a nine-hole social, or an 18-hole tournament.</p></div></div></section>
    <section className="content-section soft-section"><div className="section-shell"><div className="section-heading"><p className="eyebrow">Built around the agenda</p><h2>Choose the kind of day you need.</h2></div><div className="package-grid"><article className="package-card"><h3>Meeting &amp; Lunch</h3><p>Classroom or round-table layout, basic AV, coffee service, and a buffet or boxed lunch.</p></article><article className="package-card"><h3>Company Celebration</h3><p>Reception layout, appetizers or dinner, bar service, presentations, and space for awards or entertainment.</p></article><article className="package-card"><h3>Golf &amp; Gather</h3><p>Group golf or a full tournament followed by drinks, dinner, scoring, and recognition in the Rose Room.</p></article></div></div></section>
    <section className="content-section section-shell"><div className="section-heading"><p className="eyebrow">What’s available</p><h2>The setup your team needs.</h2></div><div className="amenity-grid">{corporateDetails.map(detail => <div className="amenity" key={detail}>{detail}</div>)}</div></section>
    <section className="content-section soft-section" id="corporate-inquiry"><div className="section-shell form-layout"><div className="form-intro"><p className="eyebrow">Start planning</p><h2>Tell us about the gathering.</h2><p>Share the company, preferred date, guest count, food plans, and meeting needs. Our team will use those details to recommend a setup and next step.</p></div><InquiryForm type="corporate" /></div></section>
  </PageFrame>;
}
