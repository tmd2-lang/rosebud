import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame, PageHero, SiteImage } from "../site-components";

export const metadata: Metadata = { title: "Our Story", description: "The story of Frank and Eleanor Rose, the family nursery, and more than fifty years of local golf." };

const timeline = [["1968", "Rosebud opens as a nine-hole course."], ["1978", "A second nine is completed as league and community play grows."], ["1996", "The clubhouse receives its first major renovation."], ["2014", "The Rose Room opens overlooking the 18th green."], ["Today", "Rosebud remains independently owned and operated by the Rose family."]];

export default function AboutPage() {
  return <PageFrame>
    <PageHero eyebrow="Our story" title="It started with nine holes and a patch of roses." body="For more than fifty years, Rosebud has given local golfers a welcoming place to play, gather, and feel like they belong." image={{ src: "/rosebud-images/founders.png", alt: "Rosebud founders Eleanor and Frank Rose standing outside the original clubhouse", position: "center 28%" }} />
    <section className="content-section section-shell"><div className="intro-grid"><div><p className="eyebrow">Quincy · 1968</p><h2>A course built for local golfers.</h2></div><div><p>In 1968, Frank and Eleanor Rose opened a modest nine-hole golf course on land that had once been a mix of farmland, marsh, and a small family flower nursery.</p><p>Eleanor’s family was known locally for its rose bushes. When it came time to name the course, Rosebud felt natural.</p><p>Frank and Eleanor wanted to create an affordable place for local golfers who didn’t belong to the private clubs surrounding Boston. The original Rosebud had a small wooden clubhouse, a straightforward layout, and a growing group of regulars.</p></div></div></section>
    <section className="section-shell"><SiteImage className="landscape-placeholder" src="/rosebud-images/clubhouse-exterior.png" alt="The Rosebud clubhouse in warm evening light" position="center" /></section>
    <section className="content-section section-shell"><div className="intro-grid"><div><p className="eyebrow">Growing with the South Shore</p><h2>The course changed. The idea did not.</h2></div><div><p>A second nine was added in 1978 as Rosebud became a favorite of South Shore leagues, local businesses, municipal employees, and families.</p><p>The course is now operated by the second generation of the Rose family. The clubhouse has changed. The trees have matured. The original idea has not.</p><p>Rosebud remains a friendly, dependable place where people can play golf, gather with friends, and feel like they belong.</p></div></div></section>
    <section className="content-section soft-section"><div className="section-shell split"><div><p className="eyebrow">Through the years</p><h2>Rosebud’s timeline</h2></div><ol className="timeline">{timeline.map(([year, event]) => <li key={year}><strong>{year}</strong><span>{event}</span></li>)}</ol></div></section>
    <section className="content-section section-shell story-teaser"><p className="eyebrow">Still here. Still local.</p><blockquote>“Rosebud was built for local golfers. More than fifty years later, it still is.”</blockquote><div className="button-row" style={{ justifyContent: "center" }}><Link className="button button-primary" href="/tee-times">Play Rosebud</Link><Link className="button button-secondary" href="/contact">Contact us</Link></div></section>
  </PageFrame>;
}
