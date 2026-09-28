// Click-to-load for the Calendly booking embed.
//
// The markup is a plain link to Calendly, which is the whole flow without JS.
// Here we show a button instead, and only when it's clicked load widget.js and
// mount the inline widget, so no request reaches calendly.com (and no Calendly
// cookie is set) until the visitor asks for the calendar.

interface CalendlyGlobal {
  initInlineWidget(options: { url: string; parentElement: HTMLElement }): void;
}

const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";

export function initCalendly(): void {
  for (const container of document.querySelectorAll<HTMLElement>("[data-calendly-url]")) {
    const button = container.querySelector<HTMLButtonElement>(".calendly-load");
    if (!button) continue;

    button.hidden = false;
    button.addEventListener("click", () => {
      button.disabled = true;
      const script = document.createElement("script");
      script.src = WIDGET_JS;
      script.onload = () => {
        const calendly = (window as unknown as { Calendly: CalendlyGlobal }).Calendly;
        container.replaceChildren();
        calendly.initInlineWidget({ url: container.dataset.calendlyUrl!, parentElement: container });
      };
      script.onerror = () => {
        button.disabled = false;
      };
      document.head.append(script);
    });
  }
}
