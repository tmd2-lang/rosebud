import { NextResponse } from "next/server";

export const runtime = "edge";

function resultRedirect(request: Request, status: "success" | "error") {
  return NextResponse.redirect(new URL(`/inquiry-received?status=${status}`, request.url), 303);
}

export async function POST(request: Request) {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) return resultRedirect(request, "error");

  const formData = await request.formData();
  const payload: Record<string, string> = {};

  formData.forEach((value, key) => {
    if (typeof value === "string") payload[key] = value.trim();
  });

  if (!payload.firstName || !payload.lastName || !payload.email) {
    return resultRedirect(request, "error");
  }

  const inquiry = {
    ...payload,
    inquiryId: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    source: "rosebud-website",
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inquiry),
    });

    if (!response.ok) return resultRedirect(request, "error");
    return resultRedirect(request, "success");
  } catch {
    return resultRedirect(request, "error");
  }
}
