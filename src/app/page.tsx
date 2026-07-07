const features = [
  ["Human placental tissue matrix", "Derived from donated human placental tissue and processed into a dehydrated matrix format."],
  ["Micrograft configuration", "Designed for targeted placement, distribution, layering, and contouring at the site."],
  ["Dry application", "Supplied in a dry format to support efficient surgical and wound management workflows."],
  ["Ambient storage", "No refrigeration required, with multiple configurations for different site requirements."]
];

const settings = ["Obstetrics", "Gynecology", "Plastic Surgery", "Podiatry", "General Wound Care", "Surgical Wound Care"];

const skus = [
  ["EAF40", "A-MATRX Micrograft Small", "40 mg"],
  ["EAF80", "A-MATRX Micrograft Medium", "80 mg"],
  ["EAF160", "A-MATRX Micrograft Large", "160 mg"]
];

const productPhotos = [
  {
    src: "/media/am-jar-flakes-01.jpg",
    title: "Jar and micrograft format",
    body: "A dry, conformable micrograft presentation designed around targeted placement and controlled handling."
  },
  {
    src: "/media/am-solo-02.jpg",
    title: "Micrograft texture",
    body: "The physical format supports distribution, layering, and contouring based on site characteristics."
  },
  {
    src: "/media/am-jar-02.jpg",
    title: "Ready-to-use presentation",
    body: "A-MATRX is supplied for use according to sterile technique, product labeling, and clinician judgment."
  }
];

const categoryCards = [
  ["Not a hemostat", "A-MATRX is not intended as a hemostatic agent and should not be positioned for bleeding control."],
  ["Not collagen-only powder", "A-MATRX is derived from human placental tissue, not a collagen-only or animal-derived powder."],
  ["Not synthetic filler", "A-MATRX is a human tissue matrix micrograft for targeted tissue coverage when appropriate."]
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
            <a href="#product">Product</a>
            <a href="#matrix">Science</a>
            <a href="#workflow">Workflow</a>
            <a href="#sizes">Sizes</a>
            <a href="#quality">Quality</a>
          </nav>
        </header>

        <div className="hero-grid wrap">
          <div className="hero-copy-panel reveal">
            <p className="eyebrow">Human placental tissue matrix micrograft</p>
            <img className="hero-logo" src="/brand/a-matrx-logo-final.png" alt="A-MATRX Micrograft" />
            <h1>Human placental tissue matrix in a conformable micrograft format.</h1>
            <p className="hero-copy">
              A-MATRX Micrograft is a dehydrated human placental tissue matrix designed for targeted placement, adaptable handling, and site-specific tissue coverage in surgical and wound management settings.
            </p>
            <div className="proof-rule">
              <span>The precision of a micrograft.</span>
              <span>The structure of human placental tissue.</span>
              <span>Same trusted tissue concept. More precise placement.</span>
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

          <aside className="product-hero-stage" aria-label="A-MATRX product packaging and micrograft jar">
            <div className="hero-product-card hero-box-card">
              <img src="/media/am-box-front.jpg" alt="A-MATRX Micrograft finished box" />
            </div>
            <div className="hero-product-card hero-jar-card">
              <img src="/media/am-jar-flakes-02.jpg" alt="A-MATRX Micrograft jar with product material" />
            </div>
            <div className="hero-product-card hero-flake-card">
              <img src="/media/am-solo-01.jpg" alt="A-MATRX Micrograft material texture" />
            </div>
            <div className="product-orbit product-orbit-a" />
            <div className="product-orbit product-orbit-b" />
          </aside>
        </div>
      </section>

      <section className="powered-strip">
        <div className="wrap powered-inner">
          <span>Powered by</span>
          <img src="/brand/evologics-logo-wide.png" alt="Evologics evolving biologics" />
        </div>
      </section>

      <section className="product-photo-section" id="product" aria-labelledby="product-format">
        <div className="wrap product-photo-grid">
          <div className="section-heading reveal">
            <p className="eyebrow">Product Format</p>
            <h2 id="product-format">Not a powder. Not a hemostat. A placental matrix micrograft.</h2>
            <p>
              A-MATRX brings the familiar handling advantages of particulate-style surgical products into a human placental tissue matrix format. The emphasis is targeted placement, conformability, and structural tissue coverage.
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

      <section className="category-section">
        <div className="wrap category-grid">
          {categoryCards.map(([title, body]) => (
            <article className="category-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="matrix">
        <div className="wrap section-grid">
          <div className="section-heading reveal">
            <p className="eyebrow">A New Category Story</p>
            <h2>Surgical teams already understand particulate formats.</h2>
          </div>
          <div className="section-copy reveal delay-1">
            <p>
              Across the operating room and wound care environment, clinicians are familiar with powder, particulate, and matrix-based products. A-MATRX enters this familiar handling universe with a distinct identity: a human placental tissue matrix supplied in a micrograft format for targeted coverage.
            </p>
            <div className="quote-card">A-MATRX is the geometry evolution of EvoPatch: the same human placental tissue matrix concept, now in a micrograft format for targeted placement and conformable coverage.</div>
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
            <h2>Because surgical sites are rarely flat.</h2>
            <p>
              Anatomy does not always present as a clean rectangle. A-MATRX supports controlled placement into areas where contour, contact, and coverage are important, allowing clinicians to distribute, layer, and contour the tissue matrix according to the site and procedural plan.
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
            <h2>A format designed around the site.</h2>
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
            <h2>Regulatory and use information.</h2>
            <p>
              A-MATRX Micrograft is produced from donated human placental tissue and supplied as a human cells, tissues, and cellular and tissue-based product, or HCT/P. Use is limited to homologous use and should be consistent with the product Instructions for Use, applicable labeling, clinician judgment, and institutional protocol.
            </p>
          </div>
          <aside className="compliance-card reveal delay-1">
            <strong>Compliance Statement</strong>
            <p>
              A-MATRX Micrograft is an HCT/P regulated under Section 361 of the Public Health Service Act and 21 CFR Part 1271. A-MATRX Micrograft is not intended for use as a hemostatic agent and should not be used as a substitute for meticulous surgical technique or conventional methods of hemostasis.
            </p>
          </aside>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap cta-grid">
          <div className="reveal">
            <p className="eyebrow">Bring Placental Matrix Coverage Into Focus</p>
            <h2>For complex sites, irregular anatomy, and targeted coverage needs.</h2>
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
