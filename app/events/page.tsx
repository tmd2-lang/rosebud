import type { Metadata } from "next";
import { InquiryForm, PageFrame, PageHero, Placeholder } from "../site-components";

export const metadata: Metadata = { title: "Private Events & The Rose Room", description: "Host showers, celebrations, dinners, banquets, and small weddings in the Rose Room." };

const amenities = ["Up to 120 guests", "Tables and chairs", "Flexible layouts", "Covered patio", "Attached bar", "Basic AV", "On-site parking", "In-house catering"];

export default function EventsPage() {
  return <PageFrame>
    <PageHero eyebrow="Private events" title="A comfortable place to bring people together." body="Overlooking Rosebud’s 18th green, the Rose Room offers a warm, flexible setting for gatherings of up to 120 guests." />
    <section className="content-section section-shell" id="rose-room"><div className="split"><Placeholder className="landscape-placeholder" /><div className="section-copy"><p className="eyebrow">The Rose Room</p><h2>Special without feeling formal.</h2><p>The Rose Room has large windows, neutral interiors, a covered patio, an attached bar, basic audiovisual equipment, and flexible table arrangements.</p><p>It is equally comfortable for a shower, company dinner, memorial reception, rehearsal dinner, or small wedding.</p></div></div></section>
    <section className="content-section soft-section"><div className="section-shell"><div className="section-heading"><p className="eyebrow">Room to make it yours</p><h2>What’s included.</h2></div><div className="amenity-grid">{amenities.map(item => <div className="amenity" key={item}>{item}</div>)}</div></div></section>
    <section className="content-section section-shell"><div className="intro-grid"><div><p className="eyebrow">In-house catering</p><h2>Food people actually want to eat.</h2></div><div><p>Choose from brunch, lunch, buffet, plated-dinner, appetizer, and dessert options. Our team can accommodate common dietary needs with advance notice.</p><p>Bar options include hosted, cash, and limited-service packages. Outside alcohol is not permitted.</p></div></div></section>
    <section className="content-section soft-section"><div className="section-shell form-layout"><div className="form-intro"><p className="eyebrow">Check availability</p><h2>Tell us what you’re planning.</h2><p>Share your preferred date, guest count, and event type. Our events team will get back to you within one business day.</p></div><InquiryForm type="event" /></div></section>
  </PageFrame>;
}
