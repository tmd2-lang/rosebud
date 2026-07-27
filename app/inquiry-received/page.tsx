import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame, PageHero } from "../site-components";

export const metadata: Metadata = {
  title: "Event Inquiry",
  description: "Rosebud event inquiry status.",
};

export default async function InquiryReceivedPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const succeeded = status === "success";

  return <PageFrame>
    <PageHero
      eyebrow={succeeded ? "Inquiry received" : "Something went wrong"}
      title={succeeded ? "Thanks. We have the details." : "Your inquiry did not go through."}
      body={succeeded
        ? "Rosebud’s events team will review your information and follow up with availability and the right next steps."
        : "Please return to the event form and try again. If the problem continues, contact the Rosebud events team directly."}
      placeholder={false}
    >
      <div className="button-row">
        <Link className="button button-cream" href={succeeded ? "/events" : "/events#event-inquiry"}>
          {succeeded ? "Return to events" : "Try again"}
        </Link>
        {!succeeded && <Link className="button button-outline-light" href="/contact">Contact Rosebud</Link>}
      </div>
    </PageHero>
  </PageFrame>;
}
