import { Hero } from "@/components/hero/hero";
import {Navbar} from "@/components/navigation/navbar";
import { CompanyLogos } from "@/components/company-logos/company-logos";
import { CompanyProjectGrid } from "@/components/company-project-grid/company-project-grid";
import { IndividualProjectGrid } from "@/components/individual-project-grid/individual-project-grid";
import { WhatWeDo } from "@/components/what-we-do/what-we-do";
import { OurApproach } from "@/components/our-approach/our-approach";
import { ClientTestimonials } from "@/components/client-testimonials/client-testimonials";
import { WorkWithUs } from "@/components/work-with-us/work-with-us";
import { Footer } from "@/components/footer/footer";
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
        <OurApproach />
        <ClientTestimonials />
        <WorkWithUs />
        <Footer />
     </main>
    </>
  );
}