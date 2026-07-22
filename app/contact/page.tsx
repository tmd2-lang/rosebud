import type { Metadata } from "next";
import { InquiryForm, PageFrame, PageHero, Placeholder } from "../site-components";

export const metadata: Metadata = { title: "Contact", description: "Contact the Rosebud golf shop, outings team, or Rose Room events team." };

export default function ContactPage() {
  return <PageFrame>
    <PageHero eyebrow="Contact Rosebud" title="How can we help?" body="Contact the golf shop about tee times and course questions, or reach our events team to start planning an outing or gathering." placeholder={false} />
    <section className="content-section section-shell"><div className="contact-grid"><article className="contact-card"><p className="eyebrow">Golf shop</p><h3>Golf questions</h3><p>Tee times, rates, leagues, lessons, and course conditions.</p><p><a href="tel:+16175551968">617-555-1968</a><br /><a href="mailto:golf@rosebudgc.com">golf@rosebudgc.com</a></p></article><article className="contact-card"><p className="eyebrow">Outings</p><h3>Group golf</h3><p>Charity tournaments, company outings, and group golf days.</p><p><a href="tel:+16175551969">617-555-1969</a><br /><a href="mailto:outings@rosebudgc.com">outings@rosebudgc.com</a></p></article><article className="contact-card"><p className="eyebrow">Private events</p><h3>The Rose Room</h3><p>Catering, venue availability, celebrations, and business events.</p><p><a href="tel:+16175551970">617-555-1970</a><br /><a href="mailto:events@rosebudgc.com">events@rosebudgc.com</a></p></article></div></section>
    <section className="section-shell"><Placeholder className="landscape-placeholder" /></section>
    <section className="content-section section-shell"><div className="form-layout"><div className="form-intro"><p className="eyebrow">Send a note</p><h2>We’ll point you in the right direction.</h2><p><strong>Golf Shop</strong><br />Daily, 6:30 AM–7:00 PM in season</p><p><strong>Events Office</strong><br />Monday–Friday, 9:00 AM–5:00 PM</p><p><strong>Visit</strong><br />68 Rose Hill Road<br />Quincy, MA 02169</p></div><div><InquiryForm type="contact" /><p className="note" id="thanks">Thanks for contacting Rosebud. This demonstration form does not send or store information.</p></div></div></section>
  </PageFrame>;
}
