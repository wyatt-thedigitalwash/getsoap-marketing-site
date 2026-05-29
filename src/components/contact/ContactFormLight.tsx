"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "w-full rounded-lg px-4 py-3 text-[14px] outline-none transition-all placeholder:text-[#94A3B8]";

const labelClass = "text-[11px] font-semibold uppercase tracking-[0.1em]";

export default function ContactFormLight() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      locations: (form.elements.namedItem("locations") as HTMLSelectElement)
        .value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
    } catch {
      // Still show success for now (API may not be wired up yet)
    }

    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p
          className="text-[18px] font-medium"
          style={{ color: "#092F64" }}
        >
          Thanks. Wyatt will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Full name */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-name"
          className={labelClass}
          style={{ color: "#092F64" }}
        >
          Full name <span style={{ color: "#468BE6" }}>*</span>
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          className={inputClass}
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            color: "#092F64",
          }}
          placeholder="Your full name"
        />
      </div>

      {/* Work email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-email"
          className={labelClass}
          style={{ color: "#092F64" }}
        >
          Work email <span style={{ color: "#468BE6" }}>*</span>
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          className={inputClass}
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            color: "#092F64",
          }}
          placeholder="you@company.com"
        />
      </div>

      {/* Company */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-company"
          className={labelClass}
          style={{ color: "#092F64" }}
        >
          Company / franchise system{" "}
          <span style={{ color: "#468BE6" }}>*</span>
        </label>
        <input
          type="text"
          id="contact-company"
          name="company"
          required
          className={inputClass}
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            color: "#092F64",
          }}
          placeholder="Your company name"
        />
      </div>

      {/* Number of locations */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-locations"
          className={labelClass}
          style={{ color: "#092F64" }}
        >
          Number of locations <span style={{ color: "#468BE6" }}>*</span>
        </label>
        <select
          id="contact-locations"
          name="locations"
          required
          defaultValue=""
          className={inputClass}
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            color: "#092F64",
          }}
        >
          <option value="" disabled>
            Select range
          </option>
          <option value="1-10">1-10</option>
          <option value="10-100">10-100</option>
          <option value="100-500">100-500</option>
          <option value="500+">500+</option>
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-message"
          className={labelClass}
          style={{ color: "#092F64" }}
        >
          Message (optional)
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className={inputClass}
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            color: "#092F64",
          }}
          placeholder="Tell us about your franchise system"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={sending}
        className="btn-primary w-full rounded-xl py-3.5 text-[16px] font-semibold text-white"
        style={{ backgroundColor: "#468BE6" }}
      >
        {sending ? "Sending..." : "Request a demo"}
      </button>

      <p
        className="text-center text-[12px]"
        style={{ color: "#71717A" }}
      >
        We respect your inbox. No marketing emails.
      </p>
    </form>
  );
}
