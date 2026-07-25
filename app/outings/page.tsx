import type { Metadata } from "next";
import { InquiryForm, PageFrame, PageHero } from "../site-components";

export const metadata: Metadata = { title: "Golf Outings", description: "Plan a charity tournament, company outing, fundraiser, or group golf day at Rosebud." };

const services = ["Reserved tee times or shotgun start", "Golf cart coordination", "Player registration area", "Contest setup", "Scorecard preparation", "Tournament scoring", "Food and beverage options", "Rose Room access"];

export default function OutingsPage() {
  return <PageFrame>
    <PageHero eyebrow="Golf outings" title="A smooth event from the first group out to the final scorecard." body="Rosebud hosts charity tournaments, company outings, customer events, fundraisers, bachelor-party rounds, and community golf days." image={{ src: "/rosebud-images/corporate-golf.png", alt: "Golf carts moving through a tree-lined Rosebud hole during an outing", position: "center" }} />
    <section className="content-section section-shell"><div className="intro-grid"><div><p className="eyebrow">Why Rosebud</p><h2>Easy to organize. Enjoyable for every kind of golfer.</h2></div><div><p>Your outing should feel organized without feeling overproduced. Our team will help coordinate the golf, carts, scoring, contests, food, and timing so you can focus on your guests.</p><p>Groups from 24 to 144 players are welcome. We offer consecutive tee times for smaller groups and shotgun starts for larger events.</p></div></div><div className="amenity-grid" style={{ marginTop: 65 }}>{services.map(service => <div className="amenity" key={service}>{service}</div>)}</div></section>
    <section className="content-section soft-section"><div className="section-shell"><div className="section-heading"><p className="eyebrow">Flexible packages</p><h2>Start with the kind of day you want.</h2></div><div className="package-grid"><article className="package-card"><h3>The Nine-Hole Social</h3><p>Nine holes, cart, boxed lunch, and one drink ticket. A relaxed fit for teams and smaller groups.</p></article><article className="package-card"><h3>The Rosebud Classic</h3><p>Eighteen holes, cart, practice-area access, contest setup, and a post-round buffet.</p></article><article className="package-card"><h3>The Full Tournament</h3><p>Shotgun start, registration support, scoring, sponsor setup, contests, reception, and awards meal.</p></article></div><p className="note">Package pricing depends on date, player count, format, and food selections.</p></div></section>
    <section className="content-section section-shell"><div className="form-layout"><div className="form-intro"><p className="eyebrow">Start planning</p><h2>Tell us about your outing.</h2><p>Share the basics and our outings team will follow up with availability and options within one business day.</p></div><InquiryForm type="outing" /></div></section>
  </PageFrame>;
}
