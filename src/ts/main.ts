// Client-side entry point. Progressive enhancement only: every page must work
// with this file absent.
import { initDropdowns } from "./dropdown";
import { initCarousels } from "./carousel";
import { initCalendly } from "./calendly";

initDropdowns();
initCarousels();
initCalendly();
