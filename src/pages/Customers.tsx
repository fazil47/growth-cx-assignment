import "./Customers.css";

import Page from "../components/Page";
import CustomerCard from "../components/CustomerCard";

// Customers
import crawIQLogo from "../imgs/customers/crawIQ/logo.png";
import crawIQImage from "../imgs/customers/crawIQ/image.png";
import qandleLogo from "../imgs/customers/qandle/logo.png";
import qandleImage from "../imgs/customers/qandle/image.png";
import superbeingsLogo from "../imgs/customers/superbeings/logo.png";
import superbeingsImage from "../imgs/customers/superbeings/image.png";
import appveenLogo from "../imgs/customers/appveen/logo.png";
import appveenImage from "../imgs/customers/appveen/image.png";
import CardsDisplay from "../components/CardsDisplay";

export default function Download() {
  return (
    <Page>
      <section className="mainSectionBackground">
        <div className="mainSection">
          <div className="aboutUs">
            <h1>
              Somebody told us sharing customer testimonials adds credibility.
            </h1>
            <h3>So sharing some of them for the sake of it!</h3>
          </div>
          <h2 className="byLine">A few of our happy customers</h2>
        </div>
      </section>
      <section className="customerSection">
        <CardsDisplay>
          <CustomerCard
            logo={crawIQLogo}
            name="Harish Kumar"
            designation="CEO & Founder CrawIQ.ai"
            description="Team growth.cx did a great job in helping us revamp our website to make it stand on par with global SaaS brands which turned our Appsumo campaign into a huge success."
            services={["GTM Consulting", "Growth Marketing", "Design"]}
            image={crawIQImage}
          />
          <CustomerCard
            logo={qandleLogo}
            name="Chayan Mukherjee"
            designation="CEO & Founder, Qandle"
            description="As a growth marketing partner, the impact growth.cx creates is tremendous. Organic traffic was something we really wanted to multiply. They just came in and took it to another level in just 3 months."
            services={["GTM Consulting", "Growth Marketing", "Design"]}
            image={qandleImage}
          />
          <CustomerCard
            logo={superbeingsLogo}
            name="Gaurav Bhawani"
            designation="Founder, SuperBeings"
            description="We were looking for a highly passionate and creative team who could help us create a new look for our website and rewrite content to align with the new product positioning and growth.cx fit the bill perfectly."
            services={["GTM Consulting", "Growth Marketing", "Design"]}
            image={superbeingsImage}
          />
          <CustomerCard
            logo={appveenLogo}
            name="Rakesh Boddu"
            designation="Product Marketing Manager, Appveen"
            description="They are a very dedicated team and one can very easily rely on them to deliver successful outcomes."
            services={[
              "Brand Repositioning",
              "Content Creation",
              "SEO",
              "Web UI/UX",
            ]}
            image={appveenImage}
          />
        </CardsDisplay>
      </section>
    </Page>
  );
}
