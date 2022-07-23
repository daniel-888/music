import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";

const listTabs = [
  "All",
  "About Us",
  "Service",
  "Portfolio",
  "Team & Feature",
  "Pricing",
  "Doc",
  "Blog",
  "Contact Us",
  "Others",
];
const tabListContent = [
  {
    ineerPages: [
      {
        img: "ip-01",
        routerPath: "/about-pm",
        pageName: "About Project Management",
      },
      {
        img: "ip-02",
        routerPath: "/about-cs",
        pageName: "About Customer Support",
      },
      {
        img: "ip-03",
        routerPath: "/about-doc",
        pageName: "About Documentation",
      },
      {
        img: "ip-04",
        routerPath: "/about-eo",
        pageName: "About Event Organizer",
      },
      {
        img: "ip-44",
        routerPath: "/service-v1",
        pageName: "Service Style 1",
      },
      {
        img: "ip-45",
        routerPath: "/service-v2",
        pageName: "Service Style 2",
      },
      {
        img: "ip-46",
        routerPath: "/service-v3",
        pageName: "Service Style 3",
      },
      {
        img: "ip-47",
        routerPath: "/service-v4",
        pageName: "Service Style 4",
      },
      {
        img: "ip-48",
        routerPath: "/service-details",
        pageName: "Service Details",
      },
      {
        img: "ip-05",
        routerPath: "/solution-management",
        pageName: "Solution Management",
      },
      {
        img: "ip-06",
        routerPath: "/product-customer-support",
        pageName: "Product Customer Support",
      },
      {
        img: "ip-07",
        routerPath: "/features-customer-support",
        pageName: "Features Customer Support",
      },
      {
        img: "ip-38",
        routerPath: "/classic-style",
        pageName: "Portfolio Classic Style",
      },
      {
        img: "ip-39",
        routerPath: "/grid-two-col",
        pageName: "Portfolio Grid Two Column",
      },
      {
        img: "ip-40",
        routerPath: "/grid-three-col",
        pageName: "Portfolio Grid Three Column",
      },
      {
        img: "ip-41",
        routerPath: "/gallery-slider",
        pageName: "Portfolio Gallery Slider",
      },
      {
        img: "ip-42",
        routerPath: "/grid-single",
        pageName: "Portfolio Grid Single",
      },
      {
        img: "ip-43",
        routerPath: "/portfolio-details-v1",
        pageName: "Portfolio Details",
      },
      { img: "ip-30", routerPath: "/team-1", pageName: "Team Style V1" },
      { img: "ip-31", routerPath: "/team-3", pageName: "Team Style V3" },
      { img: "ip-34", routerPath: "/team-4", pageName: "Team Style V4" },
      { img: "ip-35", routerPath: "/team-5", pageName: "Team Style V5" },
      { img: "ip-36", routerPath: "/team-6", pageName: "Team Style V6" },
      { img: "ip-37", routerPath: "/team-2", pageName: "Team Style V2" },
      {
        img: "ip-32",
        routerPath: "/team-details-v1",
        pageName: "Team Details V1",
      },
      {
        img: "ip-33",
        routerPath: "/team-details-v2",
        pageName: "Team Details V2",
      },
      {
        img: "ip-08",
        routerPath: "/contact-pm",
        pageName: "Contact Project Management",
      },
      {
        img: "ip-09",
        routerPath: "/contact-cs",
        pageName: "Contact Customer Support",
      },
      {
        img: "ip-10",
        routerPath: "/contact-eo",
        pageName: "Contact Event Organizer",
      },
      {
        img: "ip-11",
        routerPath: "/contact-doc",
        pageName: "Contact Documentation",
      },
      {
        img: "ip-12",
        routerPath: "/pricing-pm",
        pageName: "Pricing Project Management",
      },
      {
        img: "ip-13",
        routerPath: "/pricing-cs",
        pageName: "Pricing Customer Support",
      },
      {
        img: "ip-14",
        routerPath: "/pricing-eo",
        pageName: "Pricing Event Organizer",
      },
      {
        img: "ip-15",
        routerPath: "/doc-full-width-banner",
        pageName: "Doc Full Width Banner",
      },
      {
        img: "ip-16",
        routerPath: "/doc-full-width",
        pageName: "Doc Full Width",
      },
      { img: "ip-17", routerPath: "/doc-box", pageName: "Doc Box Style" },
      {
        img: "ip-18",
        routerPath: "/doc-box-with-banner",
        pageName: "Doc Box Style Banner",
      },
      { img: "changelog", routerPath: "/changelog", pageName: "Changelog" },
      { img: "ip-19", routerPath: "/blog-v1", pageName: "Blog V1" },
      { img: "ip-19-01", routerPath: "/blog-v5", pageName: "Blog V5" },
      { img: "ip-20", routerPath: "/blog-v2", pageName: "Blog V2" },
      { img: "ip-21", routerPath: "/blog-v3", pageName: "Blog V3" },
      { img: "ip-22", routerPath: "/blog-v4", pageName: "Blog V4" },
      { img: "ip-23", routerPath: "/blog-v6", pageName: "Blog V6" },
      {
        img: "ip-23_01",
        routerPath: "/blog-details",
        pageName: "Blog Details",
      },
      { img: "ip-24", routerPath: "/faq", pageName: "Faq" },
      { img: "ip-25", routerPath: "/faq-details", pageName: "Faq Details" },
      {
        img: "ip-26",
        routerPath: "/terms-conditions",
        pageName: "Terms Conditions",
      },
      { img: "ip-27", routerPath: "/login", pageName: "Login" },
      { img: "ip-28", routerPath: "/signup", pageName: "SignUp" },
      { img: "ip-29", routerPath: "/404", pageName: "404" },
    ],
  },

  {
    ineerPages: [
      {
        img: "ip-01",
        routerPath: "/about-pm",
        pageName: "About Project Management",
      },
      {
        img: "ip-02",
        routerPath: "/about-cs",
        pageName: "About Customer Support",
      },
      {
        img: "ip-03",
        routerPath: "/about-doc",
        pageName: "About Documentation",
      },
      {
        img: "ip-04",
        routerPath: "/about-eo",
        pageName: "About Event Organizer",
      },
    ],
  },
  {
    ineerPages: [
      {
        img: "ip-44",
        routerPath: "/service-v1",
        pageName: "Service Style 1",
      },
      {
        img: "ip-45",
        routerPath: "/service-v2",
        pageName: "Service Style 2",
      },
      {
        img: "ip-46",
        routerPath: "/service-v3",
        pageName: "Service Style 3",
      },
      {
        img: "ip-47",
        routerPath: "/service-v4",
        pageName: "Service Style 4",
      },
      {
        img: "ip-48",
        routerPath: "/service-details",
        pageName: "Service Details",
      },
    ],
  },
  {
    ineerPages: [
      {
        img: "ip-38",
        routerPath: "/classic-style",
        pageName: "Portfolio Classic Style",
      },
      {
        img: "ip-39",
        routerPath: "/grid-two-col",
        pageName: "Portfolio Grid Two Column",
      },
      {
        img: "ip-40",
        routerPath: "/grid-three-col",
        pageName: "Portfolio Grid Three Column",
      },
      {
        img: "ip-41",
        routerPath: "/gallery-slider",
        pageName: "Portfolio Gallery Slider",
      },
      {
        img: "ip-42",
        routerPath: "/grid-single",
        pageName: "Portfolio Grid Single",
      },
      {
        img: "ip-43",
        routerPath: "/portfolio-details-v1",
        pageName: "Portfolio Details",
      },
    ],
  },
  {
    ineerPages: [
      { img: "ip-30", routerPath: "/team-1", pageName: "Team Style V1" },
      { img: "ip-31", routerPath: "/team-3", pageName: "Team Style V3" },
      { img: "ip-34", routerPath: "/team-4", pageName: "Team Style V4" },
      { img: "ip-35", routerPath: "/team-5", pageName: "Team Style V5" },
      { img: "ip-36", routerPath: "/team-6", pageName: "Team Style V6" },
      { img: "ip-37", routerPath: "/team-2", pageName: "Team Style V2" },
      {
        img: "ip-05",
        routerPath: "/solution-management",
        pageName: "Solution Management",
      },
      {
        img: "ip-06",
        routerPath: "/product-customer-support",
        pageName: "Product Customer Support",
      },
      {
        img: "ip-07",
        routerPath: "/features-customer-support",
        pageName: "Features Customer Support",
      },
    ],
  },
  {
    ineerPages: [
      {
        img: "ip-12",
        routerPath: "/pricing-pm",
        pageName: "Pricing Project Management",
      },
      {
        img: "ip-13",
        routerPath: "/pricing-cs",
        pageName: "Pricing Customer Support",
      },
      {
        img: "ip-14",
        routerPath: "/pricing-eo",
        pageName: "Pricing Event Organizer",
      },
    ],
  },

  {
    ineerPages: [
      {
        img: "ip-15",
        routerPath: "/doc-full-width-banner",
        pageName: "Doc Full Width Banner",
      },
      {
        img: "ip-16",
        routerPath: "/doc-full-width",
        pageName: "Doc Full Width",
      },
      { img: "ip-17", routerPath: "/doc-box", pageName: "Doc Box Style" },
      {
        img: "ip-18",
        routerPath: "/doc-box-with-banner",
        pageName: "Doc Box Style Banner",
      },
      { img: "changelog", routerPath: "/changelog", pageName: "Changelog" },
    ],
  },
  {
    ineerPages: [
      { img: "ip-19", routerPath: "/blog-v1", pageName: "Blog V1" },
      { img: "ip-19-01", routerPath: "/blog-v5", pageName: "Blog V5" },
      { img: "ip-20", routerPath: "/blog-v2", pageName: "Blog V2" },
      { img: "ip-21", routerPath: "/blog-v3", pageName: "Blog V3" },
      { img: "ip-22", routerPath: "/blog-v4", pageName: "Blog V4" },
      { img: "ip-23", routerPath: "/blog-v6", pageName: "Blog V6" },
    ],
  },
  {
    ineerPages: [
      {
        img: "ip-08",
        routerPath: "/contact-pm",
        pageName: "Contact Project Management",
      },
      {
        img: "ip-09",
        routerPath: "/contact-cs",
        pageName: "Contact Customer Support",
      },
      {
        img: "ip-10",
        routerPath: "/contact-eo",
        pageName: "Contact Event Organizer",
      },
      {
        img: "ip-11",
        routerPath: "/contact-doc",
        pageName: "Contact Documentation",
      },
    ],
  },
  {
    ineerPages: [
      { img: "ip-24", routerPath: "/faq", pageName: "Faq" },
      { img: "ip-25", routerPath: "/faq-details", pageName: "Faq Details" },
      {
        img: "ip-26",
        routerPath: "/terms-conditions",
        pageName: "Terms Conditions",
      },
      { img: "ip-27", routerPath: "/login", pageName: "Login" },
      { img: "ip-28", routerPath: "/signup", pageName: "SignUp" },
      { img: "ip-29", routerPath: "/404", pageName: "404" },
    ],
  },
];

const InnerPages = () => {
  return (
    <div className="wrapper">
      <Tabs>
        <TabList className="controls d-flex flex-wrap justify-content-center">
          {listTabs.map((tab, i) => (
            <Tab key={i}>
              <button type="button" className="control">
                {tab}
              </button>
            </Tab>
          ))}
        </TabList>
        {/* End TabList */}
        {tabListContent.map((tabContent, i) => (
          <TabPanel key={i}>
            <div className="list_inner" data-aos="fade-up">
              {tabContent.ineerPages.map((item, i) => (
                <div className="mix" key={i}>
                  <Link
                    to={item.routerPath}
                    className="img-meta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="view_inner-page">{item.pageName}</span>
                    <img
                      src={`images/preview/inner-page-demo/${item.img}.jpg`}
                      alt="inner page demo"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default InnerPages;
