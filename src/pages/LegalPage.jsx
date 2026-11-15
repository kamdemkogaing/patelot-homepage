const LegalPage = ({ text, page }) => (
  <main className="partner-page">
    <section className="partner-hero" aria-labelledby="legal-heading">
      <div className="partner-container">
        <h1 id="legal-heading" className="legal-heading">{text[page]}</h1>
        <p className="legal-draft-notice">{text.draft}</p>
      </div>
    </section>
    <section className="partner-section partner-container">
      <div className="legal-content">
        <article className="partner-detail">
          <h2>{page === "privacy" ? text.operator : text.contact}</h2>
          <p>Patrick Kamdem<br />Esperantostraße 14a<br />77704 Oberkirch<br />Germany</p>
          <p>{text.email}: <a href="mailto:patrick-kamdem@patelot.de">patrick-kamdem@patelot.de</a><br />
            {text.phone}: <a href="tel:00491714170604">+49 171 4170604</a>
          </p>
        </article>
        {page === "privacy" && text.sections.map((section) => (
          <article key={section.title} className="partner-detail">
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default LegalPage;
