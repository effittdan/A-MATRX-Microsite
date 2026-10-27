# A-MATRX patient page

Patient page implementation for /patients, based on brochure revision 8. GitHub and Netlify release authorized by the owner on October 9, 2026.

## Design read
Extension of the existing warm clinical site for patients preparing for surgery and caregivers. Quiet, reassuring and practical. Visual variance 3, motion 1, density 4, asset dependence 8, brand fidelity 10. Existing Manrope, evergreen, bronze and warm canvas tokens retained. 48-96px section spacing, rounded imagery, pill CTAs, minimal hover feedback. Approved brochure direction and supplied photograph control this extension.

## Assets
- A-MATRX identity: public/media/patients/a-matrx-logo.png, unchanged existing approved stacked logo.
- Hero: public/media/patients/doctor-patient-consultation.webp, converted from the user-supplied Warm Doctor-Patient Consultation.png. Original dimensions, aspect ratio, colors and composition retained. WebP encoding only; not a documented product-use or endorsement photograph.
- Product: public/media/optimized/jar-flakes-01-960.webp, existing website illustration.
- Secondary brand: public/media/optimized/evologics-logo-wide-640.webp.
- Font: public/fonts/manrope-latin.woff2.

## Scope and preserved contracts
New patient route and scoped stylesheet. One For Patients entry added to the existing NAV array, which supplies desktop, mobile and footer links. Desktop gap reduced to accommodate it. Existing homepage copy, anchors, form submission, analytics and regulatory sections preserved, including pre-existing uncommitted edits. No changes to the older Next.js alternative. Patient page primary action supports a surgeon conversation, not a sales inquiry. Native accordion disclosure; questions can be printed without the rest of the page.

## Sources and claims
Controlling IFU: uploaded A-Matrx IFU.pdf, TD-6000 F-15 Rev.0, page 1. Ready-to-use sterile human allograft; application to cover intended wound/surgical site; donor screening/release; gamma/E-beam sterilization; residual infectious-transmission risk; latex/Triton X-100 sensitivity. Tissue identity and geometry rationale supplemented by local A-MATRX Knowledge Base v2 and Guardrails. Source SHA and full claim mapping are in brochure revision 8 Production-and-claim-check.md.

Six care settings use the user's requested wording and already appear on the public site's Clinical Utility section. They are framed as discussion settings requiring clinician judgment, not as IFU-established specialty indications or efficacy evidence. No new specialty mechanism or outcomes are claimed.

Published category studies remain explicitly other-product evidence. Solomon 2001 (history), Salehi online 2013/issue 2015 (burn donor-site healing), Liu 2019 (tendon repair/adhesions), Mohammadi 2017 (post-burn scarring). Source links are adjacent to each statement. No Baylor claim, A-MATRX healing or complication prevention promise, retained growth-factor claim, regulatory classification or FDA endorsement added.

Safety information is within a clearly labeled disclosure in the safety section. Recovery questions direct patients to their care team. No coverage/payment guarantee. No patient-data form or new analytics event.

## Release boundary
Built and reviewed locally. The owner authorized GitHub push and Netlify publication on October 9, 2026. Canonical and social metadata target the public /patients route.

## Validation
- Production build, TypeScript no-emit check and ESLint for the new route passed.
- Reviewed desktop and narrow mobile layout; no horizontal overflow observed. Mobile menu opens/closes and question anchor updates correctly; FAQ and safety disclosure expand.
- Standard Vite preview cannot locate the Netlify server bundle (existing preset mismatch). A local Node preview invokes the generated Netlify handler and serves the built static assets; /patients and / return 200, as do photo, logos and PDF. No production-page console errors observed. Development-only Lovable data-tsd-source hydration warning is absent from this production preview.
- Screenshot evidence: patient-preview/desktop.png and patient-preview/full-page.png.
- These checks describe the local review before the authorized release.
