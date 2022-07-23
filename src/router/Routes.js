import React from "react";

// Main Preview Pages
import PreviewMain from "../views/PreviewMain";

// All HOME PAGE ROUTES
import EventOrganizer from "../views/all-home-pages/EventOrganizer";
import DocLanding from "../views/all-home-pages/DocLanding";
import DocSignatureLanding from "../views/all-home-pages/DocSignatureLanding";
import ProjectManagement from "../views/all-home-pages/ProjectManagement";
import CustomerSupport from "../views/all-home-pages/CustomerSupport";
import ProductLanding from "../views/all-home-pages/ProductLanding";
import ProductLandingDark from "../views/all-home-pages/ProductLandingDark";
import NoteTakingLanding from "../views/all-home-pages/NoteTakingLanding";
import VideoEditorLanding from "../views/all-home-pages/VideoEditorLanding";
import AppointmentScheduling from "../views/all-home-pages/AppointmentScheduling";
import MobileAppLanding from "../views/all-home-pages/MobileAppLanding";
import WebsiteBuilderLanding from "../views/all-home-pages/WebsiteBuilderLanding";
import ComingSoon from "../views/all-home-pages/ComingSoon";

// All INNER PAGES ROUTES START FROM BELLOW

// PAGES DROPDOWN ALL ROUTES

// Team inner pages
import Team1 from "../views/inner-pages/pages/team/Team1";
import Team2 from "../views/inner-pages/pages/team/Team2";
import Team3 from "../views/inner-pages/pages/team/Team3";
import Team4 from "../views/inner-pages/pages/team/Team4";
import Team5 from "../views/inner-pages/pages/team/Team5";
import Team6 from "../views/inner-pages/pages/team/Team6";
import TeamDetailsV1 from "../views/inner-pages/pages/team/TeamDetailsV1";
import TeamDetailsV2 from "../views/inner-pages/pages/team/TeamDetailsV2";
import Faq from "../views/inner-pages/pages/Faq";
import FaqDetails from "../views/inner-pages/pages/FaqDetails";

// Contact us inner pages
import ContactCustomerSupport from "../views/inner-pages/pages/contact/ContactCustomerSupport";
import ContactEventOrganizer from "../views/inner-pages/pages/contact/ContactEventOrganizer";
import ContactProjectManagement from "../views/inner-pages/pages/contact/ContactProjectManagement";
import ContactDocumentation from "../views/inner-pages/pages/contact/ContactDocumentation";

// About us inner pages
import AboutCustomerSupport from "../views/inner-pages/pages/about/AboutCustomerSupport";
import AboutEventOrganizer from "../views/inner-pages/pages/about/AboutEventOrganizer";
import AboutProjectManagement from "../views/inner-pages/pages/about/AboutProjectManagement";
import AboutDocumentation from "../views/inner-pages/pages/about/AboutDocumentation";

// Pricing inner pages
import PricingCustomerSupport from "../views/inner-pages/pages/pricing/PricingCustomerSupport";
import PricingEventOrganizer from "../views/inner-pages/pages/pricing/PricingEventOrganizer";
import PricingProjectManagement from "../views/inner-pages/pages/pricing/PricingProjectManagement";

// FEATURES DROPDOWN ALL ROUTES
import Login from "../views/inner-pages/features/miscellaneous/Login";
import SignUp from "../views/inner-pages/features/miscellaneous/SignUp";
import TermsConditions from "../views/inner-pages/features/miscellaneous/TermsConditions";
import SolutionMangement from "../views/inner-pages/features/SolutionMangement";
import ProductCustomerSupport from "../views/inner-pages/features/ProductCustomerSupport";
import FeaturesCustomerSupport from "../views/inner-pages/features/FeaturesCustomerSupport";

// SERVICE PAGES ROUTES
import ServiceV1 from "../views/inner-pages/service/ServiceV1";
import ServiceV2 from "../views/inner-pages/service/ServiceV2";
import ServiceV3 from "../views/inner-pages/service/ServiceV3";
import ServiceV4 from "../views/inner-pages/service/ServiceV4";
import ServiceDetails from "../views/inner-pages/service/ServiceDetails";

// DOCS DROPDOWN ALL ROUTES
import DocFullWidth from "../views/inner-pages/docs/DocFullWidth";
import DocFullWidthBanner from "../views/inner-pages/docs/DocFullWidthBanner";
import DocBox from "../views/inner-pages/docs/DocBox";
import DocBoxWithBanner from "../views/inner-pages/docs/DocBoxWithBanner";
import Changelog from "../views/inner-pages/docs/Changelog";

// PORTFOLIO DROPDOWN ALL ROUTES
import PortfolioV1 from "../views/inner-pages/portfolio/PortfolioV1";
import PortfolioV2 from "../views/inner-pages/portfolio/PortfolioV2";
import PortfolioV3 from "../views/inner-pages/portfolio/PortfolioV3";
import PortfolioV4 from "../views/inner-pages/portfolio/PortfolioV4";
import PortfolioV5 from "../views/inner-pages/portfolio/PortfolioV5";
import PortfolioDetailsV1 from "../views/inner-pages/portfolio/PortfolioDetailsV1";

// BLOGS DROPDOWN ALL ROUTES
import BlogV1 from "../views/inner-pages/blog-pages/BlogV1";
import BlogV2 from "../views/inner-pages/blog-pages/BlogV2";
import BlogV3 from "../views/inner-pages/blog-pages/BlogV3";
import BlogV4 from "../views/inner-pages/blog-pages/BlogV4";
import BlogV5 from "../views/inner-pages/blog-pages/BlogV5";
import BlogV6 from "../views/inner-pages/blog-pages/BlogV6";
import BlogDetails from "../views/inner-pages/blog-pages/BlogDetails";

// Not Found Page
import NotFound from "../views/NotFound";

// Route Specific
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={PreviewMain} />
          <Route path="/event-organizer" component={EventOrganizer} />
          <Route path="/doc-landing" component={DocLanding} />
          <Route path="/doc-signature" component={DocSignatureLanding} />
          <Route path="/project-management" component={ProjectManagement} />
          <Route path="/customer-support" component={CustomerSupport} />
          <Route path="/product-landing" component={ProductLanding} />
          <Route path="/product-landing-dark" component={ProductLandingDark} />
          <Route path="/note-taking-landing" component={NoteTakingLanding} />
          <Route path="/video-editor-landing" component={VideoEditorLanding} />
          <Route
            path="/appointment-scheduling"
            component={AppointmentScheduling}
          />
          <Route path="/mobile-app-landing" component={MobileAppLanding} />
          <Route path="/website-builder" component={WebsiteBuilderLanding} />
          <Route path="/coming-soon" component={ComingSoon} />

          {/* Pages Dropdown Routes */}
          <Route path="/team-1" component={Team1} />
          <Route path="/team-2" component={Team2} />
          <Route path="/team-3" component={Team3} />
          <Route path="/team-4" component={Team4} />
          <Route path="/team-5" component={Team5} />
          <Route path="/team-6" component={Team6} />
          <Route path="/team-details-v1" component={TeamDetailsV1} />
          <Route path="/team-details-v2" component={TeamDetailsV2} />
          {/* faq inner pages */}
          <Route path="/faq" component={Faq} />
          <Route path="/faq-details" component={FaqDetails} />
          {/* contact us inner pages */}
          <Route path="/contact-cs" component={ContactCustomerSupport} />
          <Route path="/contact-eo" component={ContactEventOrganizer} />
          <Route path="/contact-pm" component={ContactProjectManagement} />
          <Route path="/contact-doc" component={ContactDocumentation} />
          {/* about us inner pages */}
          <Route path="/about-cs" component={AboutCustomerSupport} />
          <Route path="/about-eo" component={AboutEventOrganizer} />
          <Route path="/about-pm" component={AboutProjectManagement} />
          <Route path="/about-doc" component={AboutDocumentation} />
          {/* pricing inner pages */}
          <Route path="/pricing-cs" component={PricingCustomerSupport} />
          <Route path="/pricing-eo" component={PricingEventOrganizer} />
          <Route path="/pricing-pm" component={PricingProjectManagement} />

          {/* Feature Dropdown Routes */}
          <Route path="/login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/terms-conditions" component={TermsConditions} />
          <Route path="/solution-management" component={SolutionMangement} />
          <Route
            path="/product-customer-support"
            component={ProductCustomerSupport}
          />
          <Route
            path="/features-customer-support"
            component={FeaturesCustomerSupport}
          />

          {/* Service inner pages */}
          <Route path="/service-v1" component={ServiceV1} />
          <Route path="/service-v2" component={ServiceV2} />
          <Route path="/service-v3" component={ServiceV3} />
          <Route path="/service-v4" component={ServiceV4} />
          <Route path="/service-details" component={ServiceDetails} />

          {/* inner pages Docs   */}
          <Route path="/doc-full-width" component={DocFullWidth} />
          <Route path="/doc-full-width-banner" component={DocFullWidthBanner} />
          <Route path="/doc-box" component={DocBox} />
          <Route path="/doc-box-with-banner" component={DocBoxWithBanner} />
          <Route path="/changelog" component={Changelog} />

          {/* inner Portfolio pages Dropdown   */}
          <Route path="/classic-style" component={PortfolioV1} />
          <Route path="/grid-two-col" component={PortfolioV2} />
          <Route path="/grid-three-col" component={PortfolioV3} />
          <Route path="/gallery-slider" component={PortfolioV4} />
          <Route path="/grid-single" component={PortfolioV5} />
          <Route path="/portfolio-details-v1" component={PortfolioDetailsV1} />

          {/* inner Blog pages Dropdown   */}
          <Route path="/blog-v1" component={BlogV1} />
          <Route path="/blog-v2" component={BlogV2} />
          <Route path="/blog-v3" component={BlogV3} />
          <Route path="/blog-v4" component={BlogV4} />
          <Route path="/blog-v5" component={BlogV5} />
          <Route path="/blog-v6" component={BlogV6} />
          <Route path="/blog-details" component={BlogDetails} />
          <Route path="/404" component={NotFound} />

          {/* NotFound Route */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
