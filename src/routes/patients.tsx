import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Menu, Printer, X } from "lucide-react";
import { useState } from "react";
import "../patient-page.css";

const PHOTO = "/media/patients/doctor-patient-consultation.webp";
const LOGO = "/media/patients/a-matrx-logo.png";
const TITLE = "A-MATRX for Patients | Thoughtful Care, With You in Mind";
const DESCRIPTION =
  "Learn what A-MATRX Micrograft is, why your surgeon may choose a donated tissue covering, and what to ask before your procedure.";

export const Route = createFileRoute("/patients")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: `https://a-matrx.com${PHOTO}` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `https://a-matrx.com${PHOTO}` },
    ],
    links: [{ rel: "canonical", href: "https://a-matrx.com/patients" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: TITLE,
          description: DESCRIPTION,
          url: "https://a-matrx.com/patients",
          audience: { "@type": "PeopleAudience", audienceType: "Patients and caregivers" },
          publisher: {
            "@type": "Organization",
            name: "Evologics",
            url: "https://www.evologicsamerica.com/",
          },
        }),
      },
    ],
  }),
  component: PatientPage,
});

const settings = [
  "Surgical wound management",
  "General wound management",
  "Obstetric and gynecologic procedures",
  "Plastic and reconstructive surgery",
  "Podiatric surgical and wound care settings",
  "Other procedures where tissue matrix coverage may be appropriate",
];
const questions = [
  "Where will A-MATRX be placed during my procedure?",
  "Why is this tissue covering a good fit for my surgical site?",
  "What benefit do you expect, based on my procedure and the evidence?",
  "What should I know about recovery, risks, and alternatives?",
  "Will it add any cost, and what might I need to pay?",
];
const studies = [
  {
    id: 1,
    title: "Medical history",
    text: "Amniotic membrane has been used in medical care for decades.",
    source: "Solomon et al., 2001",
    href: "https://pubmed.ncbi.nlm.nih.gov/11507340/",
  },
  {
    id: 2,
    title: "Wound healing",
    text: "Some wound-care studies have found faster healing with amniotic membrane dressings.",
    source: "Salehi et al., online 2013; issue 2015",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4692919/",
  },
  {
    id: 3,
    title: "Adhesions",
    text: "Tendon-repair research has examined reducing adhesions: bands of scar tissue that can limit movement.",
    source: "Liu et al., 2019",
    href: "https://pubmed.ncbi.nlm.nih.gov/31073521/",
  },
  {
    id: 4,
    title: "Scarring",
    text: "Some burn research has reported less raised scarring after skin grafting.",
    source: "Mohammadi et al., 2017",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5418975/",
  },
];

function PatientPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="patient-page">
      <a className="patient-skip" href="#patient-main">
        Skip to content
      </a>
      <header className="patient-header">
        <div className="patient-wrap patient-nav-row">
          <a href="/" aria-label="A-MATRX home">
            <img
              className="patient-logo"
              src={LOGO}
              width="4071"
              height="2315"
              alt="A-MATRX Micrograft"
            />
          </a>
          <nav aria-label="Patient navigation" className="patient-desktop-nav">
            <a href="#about">What it is</a>
            <a href="#care-settings">Your care</a>
            <a href="#questions">Questions for your surgeon</a>
          </nav>
          <a href="/" className="patient-professional-link">
            For healthcare professionals <ArrowRight size={16} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="patient-menu-button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="patient-mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="patient-mobile-nav"
            aria-label="Mobile patient navigation"
            className="patient-mobile-nav"
          >
            <a href="#about" onClick={closeMenu}>
              What it is
            </a>
            <a href="#care-settings" onClick={closeMenu}>
              Your care
            </a>
            <a href="#questions" onClick={closeMenu}>
              Questions for your surgeon
            </a>
            <a href="/">For healthcare professionals</a>
          </nav>
        )}
      </header>

      <main id="patient-main">
        <section className="patient-hero matrix-grid">
          <div className="patient-wrap patient-hero-grid">
            <div className="patient-hero-copy">
              <p className="patient-eyebrow">For patients &amp; caregivers</p>
              <h1>
                Thoughtful care.
                <br />
                <span>With you in mind.</span>
              </h1>
              <p className="patient-lead">
                Getting ready for surgery can bring a lot of questions. Understanding the choices in
                your care plan can help you feel more prepared.
              </p>
              <p>
                Your surgeon may recommend A-MATRX Micrograft as a donated tissue covering at your
                surgical site. Here’s what that means, and what you can ask before your procedure.
              </p>
              <div className="patient-actions">
                <a className="patient-button" href="#questions">
                  Talk with your surgeon <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
            <figure className="patient-hero-photo">
              <img
                src={PHOTO}
                width="1448"
                height="1086"
                fetchPriority="high"
                alt="A patient and doctor speaking together during a consultation"
              />
              <figcaption>Your care team is available to answer questions.</figcaption>
            </figure>
          </div>
        </section>

        <section id="about" className="patient-section">
          <div className="patient-wrap patient-about-grid">
            <div className="patient-product-photo">
              <img
                src="/media/optimized/jar-flakes-01-960.webp"
                width="960"
                height="960"
                loading="lazy"
                decoding="async"
                alt="A-MATRX Micrograft jar and small pieces of donated tissue"
              />
            </div>
            <div>
              <p className="patient-eyebrow">Donated tissue. A place in your care.</p>
              <h2>What is A-MATRX?</h2>
              <p className="patient-lead">
                A-MATRX is donated human placental tissue, supplied as small, dry micrografts.
              </p>
              <p>
                It is made from amniotic membrane. This donated tissue is called an{" "}
                <strong>allograft</strong>: human tissue used in another person.
              </p>
              <h3>Why your surgeon may choose it</h3>
              <p>
                Surgical sites can be curved, narrow, or uneven. The micrograft format lets your
                surgeon distribute tissue according to the shape of the site and focus coverage
                where it is needed.
              </p>
              <div className="patient-ready">
                <h3>Ready when your surgeon needs it</h3>
                <p>
                  Sterile and ready to apply directly, with no mixing or pre-hydration required.
                  Your surgeon determines where and how it is placed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="care-settings" className="patient-section patient-band">
          <div className="patient-wrap patient-settings-grid">
            <div>
              <p className="patient-eyebrow">Placed with your care in mind</p>
              <h2>
                Part of your
                <br />
                personal care plan.
              </h2>
              <p>
                Your surgeon may choose A-MATRX as an additional tissue covering at a wound or
                surgical site.
              </p>
              <p>
                Ask whether tissue coverage may be appropriate for your procedure. Your clinician
                determines suitability and placement, consistent with the Instructions for Use.
              </p>
            </div>
            <div>
              <h3>Settings to discuss</h3>
              <ul className="patient-settings-list">
                {settings.map((setting, i) => (
                  <li key={setting}>
                    <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    {setting}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="research" className="patient-section">
          <div className="patient-wrap">
            <div className="patient-section-intro">
              <p className="patient-eyebrow">A history of birth-tissue care</p>
              <h2>A foundation in medical care.</h2>
              <p className="patient-lead">
                Research on amniotic membrane grafts has reported encouraging findings in specific
                settings.
              </p>
              <p>
                These studies evaluated products different from A-MATRX. Ask your surgeon about
                A-MATRX-specific evidence and possible benefits for your procedure.
              </p>
            </div>
            <div className="patient-research-grid">
              {studies.map((study) => (
                <article className="patient-research-item" key={study.id}>
                  <h3>{study.title}</h3>
                  <p>{study.text}</p>
                  <a href={study.href} className="patient-study-link">
                    {study.source} <ArrowRight size={15} aria-hidden="true" />
                    <span className="sr-only">
                      {" "}
                      — read the published research on {study.title.toLowerCase()}
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="safety" className="patient-section patient-band">
          <div className="patient-wrap patient-safety-grid">
            <div>
              <p className="patient-eyebrow">Thoughtful care at every step</p>
              <h2>
                A careful approach
                <br />
                to tissue safety.
              </h2>
              <p>
                Donated tissue undergoes screening, processing, and sterilization before it is
                available for use.
              </p>
            </div>
            <div className="patient-safety-copy">
              <h3>Carefully screened donors</h3>
              <p>
                Donor screening includes health history, a physical assessment, and
                infectious-disease testing. A medical director confirms that tissue meets release
                criteria.
              </p>
              <h3>Processed and sterilized</h3>
              <p>
                A-MATRX is terminally sterilized using gamma or electron-beam (E-beam) radiation.
              </p>
              <details className="patient-safety-note">
                <summary>A brief safety note</summary>
                <p>
                  Human tissue can transmit infection despite screening and sterilization. Tell your
                  surgeon about latex or Triton X-100 allergies or sensitivities; these may be
                  present on the tissue. Contact your care team promptly about any unexpected
                  reaction.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section id="questions" className="patient-section patient-questions">
          <div className="patient-wrap patient-questions-grid">
            <div>
              <p className="patient-eyebrow">Your surgery. Your questions.</p>
              <h2>
                Make it part of
                <br />
                your conversation.
              </h2>
              <p>
                If your surgeon recommends A-MATRX, ask how this tissue covering fits into your
                procedure and care plan.
              </p>
              <p>
                Take these questions to your next visit, or share them with someone helping you
                prepare.
              </p>
              <div className="patient-actions">
                <button type="button" className="patient-button" onClick={() => window.print()}>
                  <Printer size={18} aria-hidden="true" /> Print these questions
                </button>
              </div>
            </div>
            <ol className="patient-question-list">
              {questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>
          </div>
          <div className="patient-wrap patient-cost-note">
            <h3>Plan for costs, too</h3>
            <p>
              Before your procedure, ask your physician or facility whether A-MATRX adds any cost,
              whether insurance may cover it, and what you may need to pay.
            </p>
          </div>
        </section>

        <section className="patient-section patient-faq">
          <div className="patient-wrap patient-faq-grid">
            <div>
              <p className="patient-eyebrow">A little more clarity</p>
              <h2>Common questions.</h2>
            </div>
            <div>
              <details>
                <summary>Does A-MATRX replace my usual care?</summary>
                <p>
                  A-MATRX may be included as a tissue covering within your care plan. Follow your
                  surgeon’s instructions for your procedure, recovery, and follow-up appointments.
                </p>
              </details>
              <details>
                <summary>Will it help me heal or prevent scarring?</summary>
                <p>
                  Studies of other amniotic products have reported encouraging findings in
                  particular settings. Those results do not establish how A-MATRX will affect your
                  recovery. Ask your surgeon what benefit they expect for your procedure and what
                  evidence supports that expectation.
                </p>
              </details>
              <details>
                <summary>How is it applied?</summary>
                <p>
                  The care team uses sterile handling techniques. Your surgeon applies the
                  ready-to-use micrografts directly to cover the intended wound or surgical site.
                </p>
              </details>
              <details>
                <summary>Who should I contact with a concern?</summary>
                <p>
                  Your surgeon or care team is your first point of contact for questions about your
                  procedure or recovery. Contact them promptly about an unexpected reaction.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="patient-footer">
        <div className="patient-wrap patient-footer-grid">
          <div>
            <img
              src="/media/optimized/evologics-logo-wide-640.webp"
              width="640"
              height="180"
              loading="lazy"
              alt="Evologics"
            />
            <p>Company behind A-MATRX Micrograft.</p>
          </div>
          <div>
            <p>
              Patient education to support a conversation with your care team. Product use and
              safety follow the A-MATRX Instructions for Use, TD-6000 F-15 Rev.0.
            </p>
            <div className="patient-footer-links">
              <a href="/">Healthcare professional information</a>
              <a href="https://www.evologicsamerica.com/">Evologics</a>
            </div>
            <p className="patient-copyright">
              © {new Date().getFullYear()} Evologics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
