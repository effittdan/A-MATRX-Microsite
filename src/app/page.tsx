import { MatrixField } from "./components/MatrixField";

const features = [
  ["Complex anatomy", "A micrograft configuration can help clinicians address sites where broad sheet placement may be less practical."],
  ["Targeted coverage", "Matrix material may be placed where additional tissue coverage is appropriate, based on clinician judgment and IFU guidance."],
  ["Efficient handling", "Supplied ready to use, with no refrigeration requirement and ambient temperature storage."],
  ["Dry application", "May be applied dry at the surgical and/or wound site depending on clinician technique and product labeling."]
];

const settings = ["Obstetrics", "Gynecology", "Plastic Surgery", "Podiatry", "General Wound Care", "Surgical Wound Care"];

const skus = [
  ["EAF40", "A-MATRX Micrograft Small", "40 mg"],
  ["EAF80", "A-MATRX Micrograft Medium", "80 mg"],
  ["EAF160", "A-MATRX Micrograft Large", "160 mg"],
  ["EAF250", "A-MATRX Micrograft X-Large", "250 mg"]
];

const productPhotos = [
  {
    src: "/media/product-flakes-side.jpg",
    title: "Particulate matrix format",
    body: "A physical micrograft configuration designed for placement, distribution, and contouring based on site characteristics."
  },
  {
    src: "/media/product-flakes-top.jpg",
    title: "Dry, ready-to-use handling",
    body: "Supplied dehydrated for use according to sterile technique, product labeling, and clinician judgment."
  }
];

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero-section" id="top">
        <header className="site-nav wrap">
          <a className="product-mark" href="#top" aria-label="A-MATRX Micrograft">
            <img src="/brand/a-matrx-logo-wide.png" alt="A-MATRX Micrograft" />
          </a>
          <nav aria-label="Page navigation">
            <a href="#matrix">Matrix</a>
            <a href="#workflow">Workflow</a>
            <a href="#sizes">Sizes</a>
            <a href="#quality">Quality</a>
          </nav>
        </header>

        <div className="hero-grid wrap">
          <div className="hero-copy-panel reveal">
            <p className="eyebrow">Dehydrated placental tissue matrix allograft</p>
            <img className="hero-logo" src="/brand/a-matrx-logo-final.png" alt="A-MATRX Micrograft" />
            <h1>Placental tissue matrix, reimagined for precision coverage.</h1>
            <p className="hero-copy">
              A-MATRX Micrograft is supplied in a ready-to-use micrograft configuration for surgical and wound management settings where additional tissue coverage may be appropriate, consistent with the Instructions for Use and clinician judgment.
            </p>
            <div className="proof-rule">
              <span>Built for complex sites.</span>
              <span>Designed for clinical control.</span>
              <span>Ready when you are.</span>
            </div>
            <div className="powered-badge" aria-label="Powered by Evologics">
              <span>Powered by</span>
              <img src="/brand/evologics-logo-wide.png" alt="Evologics evolving biologics" />
            </div>
            <div className="actions">
              <a className="primary-action" href="mailto:info@evologicsamerica.com?subject=A-MATRX%20Micrograft%20Product%20Information">
                Request Product Information
              </a>
              <a className="secondary-action" href="mailto:info@evologicsamerica.com?subject=A-MATRX%20Product%20Overview">
                Schedule Overview
              </a>
            </div>
          </div>

          <aside className="motion-stage" aria-label="Animated micrograft matrix visualization">
            <MatrixField />
            <div className="geometry-fallback" aria-hidden="true">
              <svg viewBox="0 0 560 430">
                <path className="matrix-surface" d="M78 246 C112 106 230 72 342 112 C472 158 502 272 432 352 C360 434 185 384 116 330 C83 304 65 294 78 246Z" />
                <g className="matrix-lines">
                  <path d="M108 270 176 174 278 112 400 160 456 270 404 346 258 372 142 318Z" />
                  <path d="M176 174 258 372 400 160 142 318 456 270 278 112 404 346 108 270" />
                  <path d="M128 306 226 148 428 204 336 372 176 174 404 346" />
                  <path d="M226 148 336 372 108 270 428 204 258 372 128 306" />
                </g>
                <g className="matrix-nodes">
                  {[["108", "270"], ["176", "174"], ["278", "112"], ["400", "160"], ["456", "270"], ["404", "346"], ["258", "372"], ["142", "318"], ["226", "148"], ["428", "204"], ["336", "372"], ["128", "306"]].map(([cx, cy], index) => (
                    <circle cx={cx} cy={cy} r={index % 3 === 0 ? "8" : "6"} key={`${cx}-${cy}`} />
                  ))}
                </g>
              </svg>
            </div>
            <div className="stage-overlay">
              <div>
                <span>Structural ECM</span>
                <strong>Native matrix architecture</strong>
              </div>
              <div>
                <span>Format</span>
                <strong>Moldable micrograft</strong>
              </div>
            </div>
            <div className="floating-specs">
              <div><strong>Dry</strong><span>application</span></div>
              <div><strong>3 yr</strong><span>shelf life</span></div>
              <div><strong>4</strong><span>fill options</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="powered-strip">
        <div className="wrap powered-inner">
          <span>Powered by</span>
          <img src="/brand/evologics-logo-wide.png" alt="Evologics evolving biologics" />
        </div>
      </section>

      <section className="product-photo-section" aria-labelledby="product-format">
        <div className="wrap product-photo-grid">
          <div className="section-heading reveal">
            <p className="eyebrow">Product Format</p>
            <h2 id="product-format">A tangible micrograft format, shown with real product photography.</h2>
            <p>
              These product views introduce the physical material without turning the page into a catalog. The emphasis stays on format, handling, and clinical control.
            </p>
          </div>
          <div className="photo-stack reveal delay-1">
            {productPhotos.map((photo, index) => (
              <article className={`photo-card photo-${index + 1}`} key={photo.title}>
                <img src={photo.src} alt={photo.title} />
                <div>
                  <h3>{photo.title}</h3>
                  <p>{photo.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" id="matrix">
        <div className="wrap section-grid">
          <div className="section-heading reveal">
            <p className="eyebrow">A Structural Matrix</p>
            <h2>Targeted tissue coverage for nuanced clinical sites.</h2>
          </div>
          <div className="section-copy reveal delay-1">
            <p>
              A-MATRX Micrograft is produced from donated placental tissue and contains structural extracellular matrix proteins native to the source tissue. The particulate format supports controlled placement across complex, irregular, or anatomically nuanced areas.
            </p>
            <div className="quote-card">A-MATRX delivers placental tissue matrix in a format that adapts to the site, not the other way around.</div>
          </div>
        </div>
      </section>

      <section className="content-section soft">
        <div className="wrap feature-grid">
          {features.map(([title, body], index) => (
            <article className="feature-card reveal" style={{ animationDelay: `${index * 90}ms` }} key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="immersive-band">
        <div className="wrap band-grid">
          <div className="band-copy reveal">
            <p className="eyebrow">Conformable by Design</p>
            <h2>When sheet placement is not the whole story.</h2>
            <p>
              Some sites require a matrix that can be distributed, contoured, layered, or placed with more granular control. A-MATRX gives clinicians a placental tissue matrix option designed for cases where site geometry, handling preference, or procedural workflow calls for an adaptable format.
            </p>
          </div>
          <div className="orbit-graphic reveal delay-1" aria-hidden="true">
            <span className="orbit orbit-a" />
            <span className="orbit orbit-b" />
            <span className="orbit orbit-c" />
            <span className="center-node" />
          </div>
        </div>
      </section>

      <section className="content-section" id="workflow">
        <div className="wrap section-heading compact reveal">
          <p className="eyebrow">Handling and Placement</p>
          <h2>A dry, ready-to-use format that works with the site.</h2>
        </div>
        <div className="wrap workflow">
          {["Open", "Apply", "Contour", "Cover / Close"].map((step, index) => (
            <article className="workflow-step reveal" style={{ animationDelay: `${index * 110}ms` }} key={step}>
              <span>{index + 1}</span>
              <h3>{step}</h3>
              <p>
                {index === 0 && "Prepare according to sterile technique and the Instructions for Use."}
                {index === 1 && "Place the matrix at the site where additional tissue coverage is appropriate."}
                {index === 2 && "Mold or distribute based on anatomy, site characteristics, and clinician technique."}
                {index === 3 && "Proceed according to the surgical or wound management plan and applicable protocol."}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section soft">
        <div className="wrap section-grid">
          <div className="section-heading reveal">
            <p className="eyebrow">Potential Clinical Settings</p>
            <h2>Designed for surgical and wound management workflows.</h2>
          </div>
          <div className="settings-grid reveal delay-1">
            {settings.map((setting) => (
              <span key={setting}>{setting}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" id="sizes">
        <div className="wrap section-heading compact reveal">
          <p className="eyebrow">Available Configurations</p>
          <h2>Multiple fill volumes for different site requirements.</h2>
        </div>
        <div className="wrap sku-table reveal delay-1">
          <div className="sku-row header">
            <span>SKU</span>
            <span>Product Name</span>
            <span>Volume</span>
            <span>Storage</span>
          </div>
          {skus.map(([sku, name, volume]) => (
            <div className="sku-row" key={sku}>
              <span>{sku}</span>
              <span>{name}</span>
              <span>{volume}</span>
              <span>Ambient temperature</span>
            </div>
          ))}
        </div>
      </section>

      <section className="quality-section" id="quality">
        <div className="wrap quality-grid">
          <div className="reveal">
            <p className="eyebrow">Safety, Quality, and Compliance</p>
            <h2>Processed with a focus on safety and quality.</h2>
            <p>
              A-MATRX Micrograft is produced from donated human placental tissue and supplied as a human cells, tissues, and cellular and tissue-based product, or HCT/P. Use should be consistent with product Instructions for Use, applicable labeling, facility protocol, and clinician judgment.
            </p>
          </div>
          <aside className="compliance-card reveal delay-1">
            <strong>Compliance Statement</strong>
            <p>
              A-MATRX Micrograft is an HCT/P regulated under Section 361 of the Public Health Service Act and 21 CFR Part 1271. It is intended for homologous use only, consistent with the Instructions for Use. A-MATRX Micrograft has not been cleared or approved by the FDA.
            </p>
          </aside>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap cta-grid">
          <div className="reveal">
            <p className="eyebrow">Bring Precision Matrix Coverage Into Your Workflow</p>
            <h2>Request product information, available sizes, ordering details, and clinical support materials.</h2>
          </div>
          <div className="actions reveal delay-1">
            <a className="primary-action gold" href="mailto:info@evologicsamerica.com?subject=Request%20A-MATRX%20Product%20Sheet">
              Request Product Sheet
            </a>
            <a className="secondary-action light" href="mailto:info@evologicsamerica.com?subject=Contact%20Evologics%20About%20A-MATRX">
              Contact Evologics
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <span>Powered by</span>
            <img src="/brand/evologics-logo-wide.png" alt="Evologics evolving biologics" />
          </div>
          <p>
            This page is informational and does not imply clinical outcomes. Use must be consistent with product Instructions for Use, approved labeling, facility protocol, and clinician judgment.
          </p>
        </div>
      </footer>
    </main>
  );
}
