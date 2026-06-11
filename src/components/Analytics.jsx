"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const CONSENT_KEY = "kg_cookie_consent";

function trackEvent(name, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export default function Analytics() {
  const pathname = usePathname();
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const [consent, setConsent] = useState(null);
  const [hasScrolled75, setHasScrolled75] = useState(false);
  const suppressConsentBanner = pathname === "/top-copy2" || pathname === "/top-copy2/";
  const enabled = useMemo(() => consent === "accepted" && Boolean(measurementId), [consent, measurementId]);

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY);
    if (saved === "accepted" || saved === "declined") {
      setConsent(saved);
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onClick = (event) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest("a[href]");
      if (!anchor) return;

      if (anchor.getAttribute("href")?.startsWith("tel:")) {
        trackEvent("click_tel", {
          link_url: anchor.getAttribute("href"),
          link_text: anchor.textContent?.trim() || "",
        });
      }

      if (anchor.getAttribute("href")?.includes("/contact")) {
        trackEvent("click_contact", {
          link_url: anchor.getAttribute("href"),
          link_text: anchor.textContent?.trim() || "",
        });
      }
    };

    const onSubmit = (event) => {
      const form = event.target;
      if (form?.id === "contact-form") {
        trackEvent("submit_contact_form", { form_id: "contact-form" });
      }
    };

    const onScroll = () => {
      if (hasScrolled75) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const rate = (window.scrollY / scrollable) * 100;
      if (rate >= 75) {
        trackEvent("scroll_75", { percent_scrolled: 75 });
        setHasScrolled75(true);
      }
    };

    document.addEventListener("click", onClick);
    document.addEventListener("submit", onSubmit);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("submit", onSubmit);
      window.removeEventListener("scroll", onScroll);
    };
  }, [enabled, hasScrolled75]);

  const saveConsent = (value) => {
    setConsent(value);
    window.localStorage.setItem(CONSENT_KEY, value);
  };

  return (
    <>
      {enabled && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${measurementId}', {
                anonymize_ip: true,
                allow_google_signals: false
              });
            `}
          </Script>
        </>
      )}

      {consent === null && !suppressConsentBanner && (
        <div className="cookie-consent-banner">
          <p>
            サイト改善のため、アクセス解析（匿名化IP）を利用します。{" "}
            <a href="/privacy/" style={{ color: "#ffb46f", textDecoration: "underline" }}>プライバシーポリシー</a>
          </p>
          <div className="cookie-consent-banner__buttons">
            <button type="button" onClick={() => saveConsent("declined")}>
              同意しない
            </button>
            <button type="button" onClick={() => saveConsent("accepted")} className="primary">
              同意する
            </button>
          </div>
        </div>
      )}
    </>
  );
}
