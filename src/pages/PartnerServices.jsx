import {
  ArrowDown,
  ArrowRight,
  Briefcase,
  Check,
  Cloud,
  Globe,
  HeartHandshake,
  Layers,
  MessageCircle,
  Settings,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import { affiliateLinks, servicePackages } from "../config/partnerOffers";
import "../styles/PartnerServices.css";

const serviceIcons = [Globe, ShoppingCart, Cloud, ShieldCheck];
const advantageIcons = [MessageCircle, Layers, HeartHandshake];
const stepIcons = [MessageCircle, Briefcase, Settings];

const PartnerServices = ({ text }) => {
  const [selectedService, setSelectedService] = useState("");

  const submitInquiry = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const selected = text.packages.items[selectedService]
      || text.services.find((service) => service.id === selectedService);
    const body = [
      `${text.inquiry.name}: ${form.get("name")}`,
      `${text.inquiry.company}: ${form.get("company")}`,
      `${text.inquiry.email}: ${form.get("email")}`,
      `${text.inquiry.service}: ${selected.title}`,
      "",
      `${text.inquiry.message}:`,
      form.get("message").replace(/\r?\n/g, "\r\n"),
    ].join("\r\n");
    const subject = `${text.inquiry.subject}: ${selected.title}`;
    window.location.href = `mailto:patrick-kamdem@patelot.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
  <main className="partner-page">
    <section className="partner-hero" aria-labelledby="partner-heading">
      <div className="partner-container partner-hero-content">
        <p className="partner-eyebrow">{text.hero.eyebrow}</p>
        <h1 id="partner-heading">{text.hero.title}</h1>
        <p className="partner-hero-subtitle">{text.hero.subtitle}</p>
        <p className="partner-intro">{text.hero.description}</p>
        <div className="partner-actions">
          <a className="partner-button partner-button-primary" href="#partner-solutions">
            {text.hero.solutions} <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a className="partner-button partner-button-secondary" href="#partner-inquiry">
            {text.hero.inquiry} <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>

    <section id="partner-solutions" className="partner-section partner-container">
      <div className="partner-section-heading">
        <p className="partner-eyebrow">{text.solutions.eyebrow}</p>
        <h2>{text.solutions.heading}</h2>
        <p>{text.solutions.intro}</p>
      </div>
      <div className="partner-services-grid">
        {text.services.map((service, index) => {
          const Icon = serviceIcons[index];
          return (
            <article key={service.id} className="partner-card">
              <span className="partner-icon"><Icon size={24} aria-hidden="true" /></span>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item) => (
                  <li key={item}><Check size={16} aria-hidden="true" />{item}</li>
                ))}
              </ul>
              <a className="partner-card-link" href={`#partner-detail-${service.id}`}>
                {text.solutions.more} <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          );
        })}
      </div>
    </section>

    <section className="partner-section partner-container" aria-labelledby="partner-packages-heading">
      <div className="partner-section-heading">
        <p className="partner-eyebrow">{text.packages.eyebrow}</p>
        <h2 id="partner-packages-heading">{text.packages.heading}</h2>
        <p>{text.packages.intro}</p>
      </div>
      <div className="partner-three-grid">
        {servicePackages.map((offer) => (
          <article key={offer.id} className="partner-card">
            <h3>{text.packages.items[offer.id].title}</h3>
            <p className="partner-package-price">
              {offer.price === null
                ? text.packages.onRequest
                : `${text.packages.from} ${offer.price} € ${text.packages.periods[offer.period]}`}
            </p>
            <p className="partner-package-description">{text.packages.items[offer.id].description}</p>
            {offer.period === "monthly" && <p className="partner-package-note">{text.packages.monthlyNote}</p>}
            <a className="partner-card-link" href="#partner-inquiry" onClick={() => setSelectedService(offer.id)}>
              {text.packages.inquire} <ArrowRight size={16} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
      <p className="partner-payment-methods">
        <strong>{text.packages.paymentLabel}</strong> {text.packages.paymentMethods}
      </p>
    </section>

    <section className="partner-section partner-band" aria-labelledby="partner-recommendations-heading">
      <div className="partner-container">
        <div className="partner-section-heading">
          <p className="partner-eyebrow">{text.recommendations.eyebrow}</p>
          <h2 id="partner-recommendations-heading">{text.recommendations.heading}</h2>
          <p>{text.recommendations.intro}</p>
        </div>
        <div className="partner-three-grid">
          {Object.entries(affiliateLinks).map(([id, url]) => (
            <article key={id} className="partner-feature">
              <h3>{text.recommendations.items[id].title}</h3>
              <p>{text.recommendations.items[id].description}</p>
              {url && (
                <a className="partner-card-link partner-affiliate-link" href={url} target="_blank" rel="sponsored noopener noreferrer">
                  {text.recommendations.advertisement}: {text.recommendations.link} <ArrowRight size={16} aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="partner-section partner-band">
      <div className="partner-container">
        <div className="partner-section-heading">
          <p className="partner-eyebrow">{text.advantages.eyebrow}</p>
          <h2>{text.advantages.heading}</h2>
        </div>
        <div className="partner-three-grid">
          {text.advantages.items.map((item, index) => {
            const Icon = advantageIcons[index];
            return (
              <article key={item.title} className="partner-feature">
                <Icon size={26} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="partner-section partner-container">
      <div className="partner-section-heading">
        <p className="partner-eyebrow">{text.steps.eyebrow}</p>
        <h2>{text.steps.heading}</h2>
      </div>
      <ol className="partner-three-grid partner-steps">
        {text.steps.items.map((item, index) => {
          const Icon = stepIcons[index];
          return (
            <li key={item.title} className="partner-feature">
              <span className="partner-step-number">0{index + 1}</span>
              <Icon size={25} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          );
        })}
      </ol>
    </section>

    <section className="partner-section partner-band">
      <div className="partner-container">
        <div className="partner-section-heading">
          <p className="partner-eyebrow">{text.details.eyebrow}</p>
          <h2>{text.details.heading}</h2>
        </div>
        <div className="partner-details-grid">
          {text.services.map((service) => (
            <article id={`partner-detail-${service.id}`} key={service.id} className="partner-detail">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a className="partner-card-link" href="#partner-inquiry" onClick={() => setSelectedService(service.id)}>
                {text.details.inquire} <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="partner-section partner-container">
      <div className="partner-partners">
        <div>
          <p className="partner-eyebrow">{text.partners.eyebrow}</p>
          <h2>{text.partners.heading}</h2>
          <p>{text.partners.description}</p>
          <p className="partner-partners-note">{text.partners.note}</p>
        </div>
        <div className="partner-provider-list" aria-label={text.partners.providersLabel}>
          <span>IONOS</span><span>Shopware</span><span>Microsoft</span>
        </div>
      </div>
    </section>

    <section id="partner-inquiry" className="partner-section partner-band">
      <div className="partner-container partner-inquiry-grid">
        <div className="partner-section-heading">
          <p className="partner-eyebrow">{text.inquiry.eyebrow}</p>
          <h2>{text.inquiry.heading}</h2>
          <p>{text.inquiry.intro}</p>
          <p className="partner-inquiry-notice" id="partner-form-notice">
            {text.inquiry.notice}
          </p>
          <a className="partner-card-link" href="mailto:patrick-kamdem@patelot.de">
            {text.inquiry.emailLink} <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <form className="partner-form" aria-describedby="partner-form-notice" onSubmit={submitInquiry}>
          <div className="partner-form-row">
            <label>{text.inquiry.name}<input name="name" autoComplete="name" required /></label>
            <label>{text.inquiry.company}<input name="company" autoComplete="organization" /></label>
          </div>
          <label>{text.inquiry.email}<input type="email" name="email" autoComplete="email" required /></label>
          <label>{text.inquiry.service}
            <select name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)} required>
              <option value="" disabled>{text.inquiry.choose}</option>
              {servicePackages.map((offer) => <option key={offer.id} value={offer.id}>{text.packages.items[offer.id].title}</option>)}
              {text.services.map((service) => <option key={service.id} value={service.id}>{service.title}</option>)}
            </select>
          </label>
          <label>{text.inquiry.message}<textarea name="message" rows="5" required /></label>
          <p className="partner-privacy">{text.inquiry.privacy}</p>
          <button type="submit" className="partner-button partner-button-primary">
            {text.inquiry.submit} <ArrowRight size={18} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  </main>
  );
};

export default PartnerServices;
