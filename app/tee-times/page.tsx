import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame, PageHero } from "../site-components";

export const metadata: Metadata = { title: "Book a Tee Time", description: "Find a public tee time at Rosebud Golf Course in Quincy, Massachusetts." };

export default function TeeTimesPage() {
  return <PageFrame>
    <PageHero eyebrow="Public tee times" title="Let’s get you on the course." body="Choose a date, number of players, and round length to search available tee times. Public times are released seven days in advance." placeholder={false} />
    <section className="content-section section-shell"><div className="booking-box"><div className="booking-panel"><p className="eyebrow">Find a time</p><h2>Book your round.</h2><label>Date<input type="date" name="date" /></label><label>Players<select name="players" defaultValue="2"><option value="1">1 player</option><option value="2">2 players</option><option value="3">3 players</option><option value="4">4 players</option></select></label><label>Round<select name="round" defaultValue="18"><option value="18">18 holes</option><option value="9">9 holes</option></select></label><Link className="button button-primary" href="/tee-times#demo-results">Search tee times</Link></div><div className="booking-panel" id="demo-results"><p className="eyebrow">Good to know</p><h3>Before you book</h3><ul className="policy-list"><li>Public times open seven days ahead.</li><li>Members may book fourteen days ahead.</li><li>Online reservations require a valid credit card.</li><li>Call the golf shop for groups larger than four.</li></ul><p><strong>Need help?</strong><br />Call 617-555-1968.</p><p className="note">This demo does not connect to a live tee-sheet provider.</p></div></div></section>
  </PageFrame>;
}
