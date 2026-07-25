import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame, PageHero, SiteImage } from "../site-components";

export const metadata: Metadata = { title: "Golf & Daily Rates", description: "Explore the 18-hole Rosebud course, daily rates, leagues, and course policies." };

const stats = [["18", "Holes"], ["71", "Par"], ["6,324", "Yards"], ["4", "Sets of tees"], ["Yes", "Walking"], ["Yes", "Carts"]];
const rates = [["Weekday 18 holes", "$42"], ["Weekend 18 holes", "$52"], ["Weekday 9 holes", "$28"], ["Weekend 9 holes", "$34"], ["Twilight after 3:00 PM", "$32"], ["Junior 9 holes", "$20"], ["18-hole cart", "$20 / rider"], ["9-hole cart", "$12 / rider"]];

export default function GolfPage() {
  return <PageFrame>
    <PageHero eyebrow="The course" title="Playable, walkable, and never quite the same round twice." body="Rosebud is an 18-hole, par-71 course shaped by mature trees, small greens, uneven lies, and more than fifty years of local golf." image={{ src: "/rosebud-images/stone-walls.png", alt: "A Rosebud fairway running between old stone walls", position: "center" }}><Link className="button button-cream" href="/tee-times">Book a tee time</Link></PageHero>
    <section className="content-section section-shell">
      <div className="intro-grid">
        <div><p className="eyebrow">A fair test</p><h2>Friendly from the first tee. Interesting through the eighteenth.</h2></div>
        <div><p>Rosebud gives newer players room to find their swing while asking experienced golfers to think carefully about position and approach angles.</p><p>The front nine is open and forgiving. The back nine becomes tighter, with mature trees, stone walls, water, and smaller targets. The course is comfortable to walk and well suited to nine-hole rounds.</p></div>
      </div>
      <div className="stat-grid" style={{ marginTop: 65 }}>{stats.map(([value, label]) => <div className="stat-item" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
    </section>
    <section className="content-section soft-section" id="rates"><div className="section-shell split">
      <div><table className="rate-table"><caption>Daily rates</caption><thead><tr><th>Round</th><th>Rate</th></tr></thead><tbody>{rates.map(([round, price]) => <tr key={round}><td>{round}</td><td>{price}</td></tr>)}</tbody></table><p className="note">Walking rates shown. Sample demo pricing may vary by season, day, and availability.</p></div>
      <div className="section-copy"><p className="eyebrow">Simple and straightforward</p><h2>Pick a time. Bring your clubs.</h2><p>Public tee times are released seven days in advance. Members may reserve up to fourteen days ahead.</p><p>For same-day availability or groups larger than four, call the golf shop at 617-555-1968.</p><Link className="button button-primary" href="/tee-times">Find a tee time</Link></div>
    </div></section>
    <section className="content-section section-shell" id="leagues"><div className="split"><SiteImage className="landscape-placeholder" src="/rosebud-images/golfers-walking.png" alt="A group of golfers walking down a Rosebud fairway" position="center" /><div className="section-copy"><p className="eyebrow">League play</p><h2>Your standing weeknight round.</h2><p>Rosebud hosts men’s, women’s, senior, and mixed leagues throughout the season. Join an established group or talk to us about starting one for your company, neighborhood, or organization.</p><p>Most leagues play nine holes on weekday evenings from April through September.</p><Link className="text-link" href="/contact">Ask about leagues <span>→</span></Link></div></div></section>
    <section className="content-section soft-section"><div className="section-shell intro-grid"><div><p className="eyebrow">Before you play</p><h2>Course policies</h2></div><ul className="policy-list"><li>Please arrive at least 15 minutes before your tee time.</li><li>Each player must have a set of clubs.</li><li>Outside alcohol is not permitted.</li><li>Expected pace for 18 holes is approximately four hours and fifteen minutes.</li><li>Collared shirts are appreciated; denim is not permitted on the course.</li></ul></div></section>
  </PageFrame>;
}
