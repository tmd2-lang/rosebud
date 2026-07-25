import type { Metadata } from "next";
import { InquiryForm, PageFrame, PageHero } from "../site-components";

export const metadata: Metadata = { title: "Membership", description: "Rosebud membership offers preferred booking, reduced rates, leagues, and member events without traditional club formality." };

const plans = [
  { name: "Weekday", price: "$1,295", body: "For golfers who primarily play Monday through Friday.", items: ["Weekday preferred booking", "Reduced guest fees", "Member leagues", "Practice-area access"] },
  { name: "Full", price: "$1,895", body: "Seven-day access and preferred booking throughout the season.", items: ["14-day advance booking", "Seven-day member rates", "Member tournaments", "Four annual guest passes"], featured: true },
  { name: "Young Adult", price: "$995", body: "Full membership benefits for golfers ages 18–29.", items: ["Seven-day member rates", "Member leagues", "Practice-area access", "Two annual guest passes"] },
];

export default function MembershipPage() {
  return <PageFrame>
    <PageHero eyebrow="Membership" title="Your home course, without the private-club formality." body="Rosebud membership gives regular golfers better access, better value, and more ways to be part of the course." image={{ src: "/rosebud-images/course-scenic.png", alt: "A sunny Rosebud fairway framed by mature trees and an old stone wall", position: "center" }} />
    <section className="content-section section-shell"><div className="section-heading"><p className="eyebrow">More golf. More often.</p><h2>Choose the membership that fits your season.</h2><p>Every Rosebud membership is built around the same idea: make it easier to play the course you know and enjoy.</p></div><div className="price-grid">{plans.map((plan) => <article className={`price-card ${plan.featured ? "featured" : ""}`} key={plan.name}>{plan.featured && <span className="price-tag">Most popular</span>}<p className="eyebrow">{plan.name}</p><h3>{plan.name} membership</h3><p>{plan.body}</p><div className="price">{plan.price} <small>per season</small></div><ul className="check-list">{plan.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div><p className="note">Sample demo pricing. Cart fees and certain tournament fees are not included.</p></section>
    <section className="content-section soft-section"><div className="section-shell form-layout"><div className="form-intro"><p className="eyebrow">Join Rosebud</p><h2>Let’s talk about your golf.</h2><p>Tell us how often you like to play and we’ll help you choose the right membership.</p></div><InquiryForm type="membership" /></div></section>
  </PageFrame>;
}
