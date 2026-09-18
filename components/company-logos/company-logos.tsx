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
    logo: "/branding/companies/syngenta.png",
  },
  {
    name: "Company 11",
    logo: "/branding/companies/company-11.png",
  },
  {
    name: "Company 12",
    logo: "/branding/companies/company-12.png",
  },
  {
    name: "Company 13",
    logo: "/branding/companies/company-13.png",
  },
  {
    name: "Company 14",
    logo: "/branding/companies/company-14.png",
  },
  {
    name: "Company 15",
    logo: "/branding/companies/company-15.png",
  },
  {
    name: "Company 16",
    logo: "/branding/companies/company-16.png",
  },
  {
    name: "Company 17",
    logo: "/branding/companies/company-17.png",
  },
  {
    name: "Company 18",
    logo: "/branding/companies/company-18.png",
  },
  {
    name: "Company 19",
    logo: "/branding/companies/company-19.png",
  },
  {
    name: "Company 20",
    logo: "/branding/companies/company-20.png",
  },
  {
    name: "Company 21",
    logo: "/branding/companies/company-21.png",
  },
  {
    name: "Company 22",
    logo: "/branding/companies/company-22.png",
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
          <div className="company-logos__eyebrow">
            SELECTED CLIENTS
          </div>

          <h2>
            COMPANY LOGOS{" "}
            <span>(INTERACTIVE)</span>
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

      {/* FOOTER */}
      <div className="company-logos__footer">
        <span>22 ORGANISATIONS</span>
        <span>•</span>
        <span>SELECTED CLIENTS</span>
      </div>
    </section>
  );
}