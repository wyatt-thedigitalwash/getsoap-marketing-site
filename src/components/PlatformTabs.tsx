"use client";

import { useState, useEffect, useRef } from "react";
import DashboardPlaceholder from "@/components/DashboardPlaceholder";

const tabs = [
  { id: "franchisor", label: "Franchisor View" },
  { id: "franchisee", label: "Franchisee View" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const content: Record<TabId, { label: string; description: string }> = {
  franchisor: {
    label: "Franchisor Dashboard",
    description:
      "Franchisors see every brand and every location from one dashboard. Performance rolls up by brand, filters down by location. Lead distribution, content compliance, and reporting all live in one place.",
  },
  franchisee: {
    label: "Franchisee Dashboard",
    description:
      "Franchisees see their own location and nothing else. Leads, reviews, rankings, content, and GBP activity in one dashboard. No complexity. No noise from other locations.",
  },
};

export default function PlatformTabs() {
  const [active, setActive] = useState<TabId>("franchisor");
  const [visible, setVisible] = useState(true);
  const [displayed, setDisplayed] = useState<TabId>("franchisor");
  const switching = useRef(false);

  function switchTab(id: TabId) {
    if (id === active || switching.current) return;
    switching.current = true;

    // Fade out
    setVisible(false);

    setTimeout(() => {
      setActive(id);
      setDisplayed(id);

      // Fade in after brief delay
      setTimeout(() => {
        setVisible(true);
        switching.current = false;
      }, 50);
    }, 200);
  }

  const data = content[displayed];

  return (
    <div>
      {/* Tab switcher */}
      <div className="flex justify-center">
        <div
          className="inline-flex gap-1"
          style={{
            backgroundColor: "#F1F5F9",
            borderRadius: 10,
            padding: 4,
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => switchTab(tab.id)}
              className="transition-all"
              style={{
                padding: "10px 24px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                color: active === tab.id ? "#0E172A" : "#71717A",
                backgroundColor: active === tab.id ? "#FFFFFF" : "transparent",
                boxShadow: active === tab.id ? "0 1px 3px rgba(0, 0, 0, 0.08)" : "none",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content with transition */}
      <div
        className="mt-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: visible
            ? "opacity 300ms ease-out 100ms, transform 300ms ease-out 100ms"
            : "opacity 200ms ease-out, transform 200ms ease-out",
        }}
      >
        <div className="mx-auto max-w-[76%]">
          <DashboardPlaceholder label={data.label} icon="image" />
        </div>
        <p
          className="mx-auto mt-8 max-w-[700px] text-center text-[16px] leading-[1.6] md:text-[17px]"
          style={{ color: "#1F1F1F" }}
        >
          {data.description}
        </p>
      </div>
    </div>
  );
}
