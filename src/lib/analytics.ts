declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackGenerateLead(formName: string) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "generate_lead", {
    form_name: formName,
  });
}
