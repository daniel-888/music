import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";

const listTabs = [
  "All",
  "Event Organiser",
  "Doc Landing",
  "Project Management",
  "Customer Support",
  "One Page",
];
const tabListContent = [
  {
    Demo: [
      {
        img: "home_01",
        routerPath: "/event-organizer",
        css: { background: "#FFEBDD" },
        title: "Event Organiser",
        subTitle: `Event, Event planner, Management`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "",
        sticker: "",
      },
      {
        img: "home_02",
        routerPath: "/project-management",
        css: { background: "#e4f6fb" },
        title: "Project Management",
        subTitle: `Managment, Project, saas, Collaboration`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "200",
        sticker: "",
      },
      {
        img: "home_03",
        routerPath: "/customer-support",
        css: { background: "#FFF4E2" },
        title: "Customer Support",
        subTitle: `Ticket, Support, Customer support`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "0",
        sticker: "",
      },
      {
        img: "home_04",
        routerPath: "/doc-landing",
        css: { background: "#f5ebff" },
        title: "Doc landing",
        subTitle: `Docs, Documentation, Landing`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "200",
        sticker: "",
      },
      {
        img: "home_05",
        routerPath: "/product-landing",
        css: { background: "#f3f8fe" },
        title: "Product landing",
        subTitle: `Product, OnePage, Landing`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "0",
        sticker: "",
      },
      {
        img: "home_06",
        routerPath: "/product-landing-dark",
        css: { background: "#282836" },
        title: "Product landing Dark",
        subTitle: `Product, OnePage, Landing`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "200",
        sticker: "",
      },
      {
        img: "home_07",
        routerPath: "/note-taking-landing",
        css: { background: "#fff4cc" },
        title: "Note Taking App landing",
        subTitle: `Note Taking, OnePage, Landing`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "0",
        sticker: "",
      },
      {
        img: "home_08",
        routerPath: "/video-editor-landing",
        css: { background: "#f1f8fa" },
        title: "Video Editor Landing",
        subTitle: `Video Editor, OnePage, Landing`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "200",
        sticker: "New",
      },
      {
        img: "home_10",
        routerPath: "/appointment-scheduling",
        css: { background: "#ebfcff" },
        title: "Appointment Scheduling",
        subTitle: `Appointment, Scheduling, OnePage, Landing`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "0",
        sticker: "New",
      },
      {
        img: "home_11",
        routerPath: "/mobile-app-landing",
        css: { background: "#eea1ff" },
        title: "Mobile App Landing",
        subTitle: `Mobile App, App Landing, OnePage`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "0",
        sticker: "New",
      },
      {
        img: "home_12",
        routerPath: "/doc-signature",
        css: { background: "#ffefe7" },
        title: "Doc Signature Landing",
        subTitle: `Signature, Landing, Doc`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "200",
        sticker: "New",
      },
      {
        img: "home_13",
        routerPath: "/website-builder",
        css: { background: "#5a5552" },
        title: "Website Builder",
        subTitle: `Builder, Landing, Website`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "0",
        sticker: "New",
      },
      {
        img: "home_09",
        routerPath: "/coming-soon",
        css: { background: "#faf6ff" },
        title: "Coming Soon",
        subTitle: `Coming Soon, OnePage, Landing`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "200",
        sticker: "New",
      },
      {
        img: "home_14",
        routerPath: "/fomr-survey",
        css: { background: "#f7b25f" },
        title: "Form & Survey",
        subTitle: `Form, survey, Landing`,
        viewPage: "Coming Soon",
        clasName: `cs-text d-flex align-items-center justify-content-center`,
        animDealy: "0",
        sticker: "",
      },
    ],
  },
  {
    Demo: [
      {
        img: "home_01",
        routerPath: "/event-organizer",
        css: { background: "#FFEBDD" },
        title: "Event Organiser",
        subTitle: `Event, Event planner, Management`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "0",
      },
    ],
  },
  {
    Demo: [
      {
        img: "home_04",
        routerPath: "/doc-landing",
        css: { background: "#f5ebff" },
        title: "Doc landing",
        subTitle: `Docs, Documentation, Landing`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "0",
      },
      {
        img: "home_12",
        routerPath: "/doc-signature",
        css: { background: "#ffefe7" },
        title: "Doc Signature Landing",
        subTitle: `Signature, Landing, Doc`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "200",
        sticker: "New",
      },
    ],
  },
  {
    Demo: [
      {
        img: "home_02",
        routerPath: "/project-management",
        css: { background: "#e4f6fb" },
        title: "Project Management",
        subTitle: `Managment, Project, saas, Collaboration`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "0",
      },
    ],
  },
  {
    Demo: [
      {
        img: "home_03",
        routerPath: "/customer-support",
        css: { background: "#FFF4E2" },
        title: "Customer Support",
        subTitle: `Ticket, Support, Customer support`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "0",
      },
    ],
  },
  {
    Demo: [
      {
        img: "home_05",
        routerPath: "/product-landing",
        css: { background: "#f3f8fe" },
        title: "Product landing",
        subTitle: `Product, OnePage, Landing`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "0",
        sticker: "",
      },
      {
        img: "home_06",
        routerPath: "/product-landing-dark",
        css: { background: "#282836" },
        title: "Product landing Dark",
        subTitle: `Product, OnePage, Landing`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "200",
        sticker: "",
      },
      {
        img: "home_07",
        routerPath: "/note-taking-landing",
        css: { background: "#fff4cc" },
        title: "Note Taking App landing",
        subTitle: `Note Taking, OnePage, Landing`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "0",
        sticker: "",
      },
      {
        img: "home_08",
        routerPath: "/video-editor-landing",
        css: { background: "#f1f8fa" },
        title: "Video Editor Landing",
        subTitle: `Video Editor, OnePage, Landing`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "200",
        sticker: "New",
      },
      {
        img: "home_10",
        routerPath: "/appointment-scheduling",
        css: { background: "#ebfcff" },
        title: "Appointment Scheduling",
        subTitle: `Appointment, Scheduling, OnePage, Landing`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "200",
        sticker: "New",
      },
      {
        img: "home_11",
        routerPath: "/mobile-app-landing",
        css: { background: "#eea1ff" },
        title: "Mobile App Landing",
        subTitle: `Mobile App, App Landing, OnePage`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "0",
        sticker: "New",
      },
      {
        img: "home_12",
        routerPath: "/doc-signature",
        css: { background: "#ffefe7" },
        title: "Doc Signature Landing",
        subTitle: `Signature, Landing, Doc`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "200",
        sticker: "New",
      },
      {
        img: "home_13",
        routerPath: "/website-builder",
        css: { background: "#5a5552" },
        title: "Website Builder",
        subTitle: `Builder, Landing, Website`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "0",
        sticker: "New",
      },
      {
        img: "home_09",
        routerPath: "/coming-soon",
        css: { background: "#faf6ff" },
        title: "Coming Soon",
        subTitle: `Coming Soon, OnePage, Landing`,
        viewPage: "View Demo",
        clasName: `view-page`,
        animDealy: "200",
        sticker: "New",
      },
      {
        img: "home_14",
        routerPath: "/fomr-survey",
        css: { background: "#f7b25f" },
        title: "Form & Survey",
        subTitle: `Form, survey, Landing`,
        viewPage: "Coming Soon",
        clasName: `cs-text d-flex align-items-center justify-content-center`,
        animDealy: "0",
        sticker: "",
      },
    ],
  },
];

const PreviewGallery = () => {
  return (
    <div className="preview-gallery-wrapper">
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
        {/* End tablist */}

        {tabListContent.map((tabContent, i) => (
          <TabPanel key={i}>
            <div className="mixitUp-container demo-last-unpointer">
              {tabContent.Demo.map((val, i) => (
                <div
                  className="mix event "
                  key={i}
                  data-aos="fade"
                  data-aos-duration="1200"
                  data-aos-delay={val.animDealy}
                >
                  <Link
                    to={val.routerPath}
                    className="img-meta"
                    style={val.css}
                    target="_blank"
                  >
                    <img
                      src={`images/preview/${val.img}.jpg`}
                      alt="home-demo"
                    />
                    <span className={val.clasName}>{val.viewPage}</span>
                    <div className="new-page">{val.sticker}</div>
                  </Link>

                  <div className="page-name font-rubik">{val.title}</div>
                  <div className="page-category font-rubik">{val.subTitle}</div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default PreviewGallery;
