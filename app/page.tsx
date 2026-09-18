import { Hero } from "@/components/hero/hero";
import {Navbar} from "@/components/navigation/navbar";
import { CompanyLogos } from "@/components/company-logos/company-logos";
import { CompanyProjectGrid } from "@/components/company-project-grid/company-project-grid";
import { IndividualProjectGrid } from "@/components/individual-project-grid/individual-project-grid";
import { WhatWeDo } from "@/components/what-we-do/what-we-do";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CompanyLogos />
        <CompanyProjectGrid />
        <IndividualProjectGrid />
        <WhatWeDo />
      </main>
    </>
  );
}