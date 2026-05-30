"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "w-full rounded-lg px-3.5 py-3 text-[14px] outline-none transition-colors placeholder:text-[#94A3B8]";

const labelClass =
  "text-[11px] font-bold uppercase tracking-[0.1em]";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="mx-auto max-w-[560px] rounded-[18px] px-8 py-16 text-center"
        style={{
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          boxShadow: "0 8px 32px rgba(14, 23, 42, 0.08)",
        }}
      >
        <p className="text-[18px] font-medium" style={{ color: "#0E172A" }}>
          Thanks. Wyatt will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[560px] rounded-[18px] px-8 py-12"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        boxShadow: "0 8px 32px rgba(14, 23, 42, 0.08)",
      }}
    >
      <div className="flex flex-col gap-5">
        {/* Full name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass} style={{ color: "#71717A" }}>
            Full name <span style={{ color: "#1570EF", fontWeight: 400 }}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputClass}
            style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", color: "#1F1F1F" }}
            placeholder="Your full name"
          />
        </div>

        {/* Work email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClass} style={{ color: "#71717A" }}>
            Work email <span style={{ color: "#1570EF", fontWeight: 400 }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClass}
            style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", color: "#1F1F1F" }}
            placeholder="you@company.com"
          />
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className={labelClass} style={{ color: "#71717A" }}>
            Company / franchise system <span style={{ color: "#1570EF", fontWeight: 400 }}>*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className={inputClass}
            style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", color: "#1F1F1F" }}
            placeholder="Your company name"
          />
        </div>

        {/* Number of locations */}
        <div className="flex flex-col gap-2">
          <label htmlFor="locations" className={labelClass} style={{ color: "#71717A" }}>
            Number of locations <span style={{ color: "#1570EF", fontWeight: 400 }}>*</span>
          </label>
          <select
            id="locations"
            name="locations"
            required
            defaultValue=""
            className={inputClass}
            style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", color: "#1F1F1F" }}
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
          <label htmlFor="message" className={labelClass} style={{ color: "#71717A" }}>
            Message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className={inputClass}
            style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", color: "#1F1F1F" }}
            placeholder="Tell us about your franchise system"
          />
        </div>
      </div>

      {/* Submit */}
      <div className="mt-7">
        <button
          type="submit"
          className="btn-primary w-full rounded-xl py-3.5 text-[14px] font-semibold text-white"
          style={{ backgroundColor: "#1570EF" }}
        >
          Book a Demo
        </button>
      </div>
    </form>
  );
}
