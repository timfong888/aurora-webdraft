"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const interest = String(formData.get("interest") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot: real users never see or fill this field.
  const website = String(formData.get("website") ?? "").trim();

  if (website) {
    return { status: "success", message: "Thanks — we'll be in touch shortly." };
  }
  if (!name) {
    return { status: "error", message: "Please tell us your name." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid work email." };
  }

  const payload = { name, email, company, interest, message };

  // Forward to whatever lead destination is configured for the environment
  // (CRM/email webhook). Until that is wired up this is a message-testing
  // build, so we record the lead server-side and acknowledge the visitor.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch {
      return {
        status: "error",
        message:
          "Something went wrong sending your message. Please email hello@aurora.ai directly.",
      };
    }
  } else {
    console.info("[contact] lead received (no CONTACT_WEBHOOK_URL set):", payload);
  }

  return { status: "success", message: "Thanks — we'll be in touch shortly." };
}
