"use client";

import "./company-logos.css";

type Company = {
  name: string;
  logo: string;
};

const companies: Company[] = [
  {
    name: "Piramal",
    logo: "/branding/companies/piramal.png",
  },
  {
    name: "Laqshya",
    logo: "/branding/companies/laqshya.png",
  },
  {
    name: "Adda24x7",
    logo: "/branding/companies/adda247.png",
  },
  {
    name: "Procus Ghana Limited",
    logo: "/branding/companies/thermo-procus.png",
  },
  {
    name: "Zimgold",
    logo: "/branding/companies/zimgold.png",
  },
  {
    name: "Value Ingredients",
    logo: "/branding/companies/value.png",
  },
  {
    name: "PepsiCo",
    logo: "/branding/companies/pepsico.png",
  },
  {
    name: "CocaCola",
    logo: "/branding/companies/coca-cola.png",
  },
  {
    name: "Sbi",
    logo: "/branding/companies/sbi.svg",
  },
  {
    name: "Syngenta",
    logo: "/branding/companies/syngenta.svg",
  },
  {
    name: "Sony",
    logo: "/branding/companies/sony.png",
  },
  {
    name: "Aisect",
    logo: "/branding/companies/aisect.png",
  },
  {
    name: "Kaivalya",
    logo: "/branding/companies/kaivalya.png",
  },
  {
    name: "Cms",
    logo: "/branding/companies/cms.png",
  },
  {
    name: "Swasti",
    logo: "/branding/companies/swasti.png",
  },
  {
    name: "i-saksham",
    logo: "/branding/companies/i-saksham.png",
  },
  {
    name: "isdm",
    logo: "/branding/companies/isdm.png",
  },
  {
    name: "culver-max",
    logo: "/branding/companies/culver-max.png",
  },
  {
    name: "dhwani",
    logo: "/branding/companies/dhwani.png",
  },
  {
    name: "Quantum",
    logo: "/branding/companies/quantum.png",
  },
  {
    name: "imm",
    logo: "/branding/companies/imm.png",
  },
  {
    name: "irma",
    logo: "/branding/companies/irma.png",
  },
];

const rowOne = companies.slice(0, 11);
const rowTwo = companies.slice(11, 22);

function Logo({
  company,
}: {
  company: Company;
}) {
  return (
    <div
      className="company-logo-item"
      aria-label={company.name}
    >
      <div className="company-logo-item__box">
        <img
          src={company.logo}
          alt={company.name}
          className="company-logo-item__image"
        />
      </div>
    </div>
  );
}

function LogoSet({
  companies,
}: {
  companies: Company[];
}) {
  return (
    <>
      {companies.map((company) => (
        <Logo
          key={company.name}
          company={company}
        />
      ))}
    </>
  );
}

export function CompanyLogos() {
  return (
    <section
      id="companies"
      className="company-logos"
    >
      {/* HEADER */}
      <div className="company-logos__header">
        <div className="company-logos__index">
          03
        </div>

        <div>


          <h2>
            Organisations weve worked with
          </h2>
        </div>
      </div>

      {/* CONVEYOR */}
      <div className="company-conveyor">

        {/* ROW 1 */}
        <div className="company-marquee company-marquee--right">
          <div className="company-marquee__track">

            <div className="company-marquee__set">
              <LogoSet companies={rowOne} />
            </div>

            <div
              className="company-marquee__set"
              aria-hidden="true"
            >
              <LogoSet companies={rowOne} />
            </div>

          </div>
        </div>

        {/* ROW 2 */}
        <div className="company-marquee company-marquee--left">
          <div className="company-marquee__track">

            <div className="company-marquee__set">
              <LogoSet companies={rowTwo} />
            </div>

            <div
              className="company-marquee__set"
              aria-hidden="true"
            >
              <LogoSet companies={rowTwo} />
            </div>

          </div>
        </div>

      </div>

            </section>
  );
}