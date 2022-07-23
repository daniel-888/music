import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const All = [
  { img: "img_07", title: "Maurice Craig", designation: "Co-Founder" },
  {
    img: "img_08",
    title: "Duane Cain",
    designation: "Senior Product Desogner",
  },
  { img: "img_09", title: "Viola George", designation: "Co-Founder" },
  { img: "img_10", title: "Maurice Craig", designation: "Co-Founder" },
  {
    img: "img_11",
    title: "Nina Walters",
    designation: "Senior Product Desogner",
  },
  { img: "img_12", title: "Nathaniel Burke", designation: "Co-Founder" },
  { img: "img_13", title: "Maurice Craig", designation: "Co-Founder" },
  { img: "img_14", title: "Viola George", designation: "Co-Founder" },
  { img: "img_15", title: "Viola George", designation: "Co-Founder" },
  { img: "img_16", title: "Viola George", designation: "Co-Founder" },
  { img: "img_17", title: "Viola George", designation: "Co-Founder" },
  { img: "img_18", title: "Viola George", designation: "Co-Founder" },
];
const Leadership = [
  { img: "img_12", title: "Nathaniel Burke", designation: "Co-Founder" },
  { img: "img_13", title: "Maurice Craig", designation: "Co-Founder" },
  { img: "img_14", title: "Viola George", designation: "Co-Founder" },
  { img: "img_15", title: "Viola George", designation: "Co-Founder" },
  { img: "img_16", title: "Viola George", designation: "Co-Founder" },
  { img: "img_17", title: "Viola George", designation: "Co-Founder" },
  { img: "img_18", title: "Viola George", designation: "Co-Founder" },
];
const Designer = [
  { img: "img_07", title: "Maurice Craig", designation: "Co-Founder" },
  {
    img: "img_08",
    title: "Duane Cain",
    designation: "Senior Product Desogner",
  },
  { img: "img_09", title: "Viola George", designation: "Co-Founder" },
  { img: "img_10", title: "Maurice Craig", designation: "Co-Founder" },
  {
    img: "img_11",
    title: "Nina Walters",
    designation: "Senior Product Desogner",
  },
];
const Developer = [
  { img: "img_12", title: "Nathaniel Burke", designation: "Co-Founder" },
  { img: "img_13", title: "Maurice Craig", designation: "Co-Founder" },
  { img: "img_14", title: "Viola George", designation: "Co-Founder" },
  { img: "img_15", title: "Viola George", designation: "Co-Founder" },
  { img: "img_16", title: "Viola George", designation: "Co-Founder" },
  { img: "img_17", title: "Viola George", designation: "Co-Founder" },
];
const Marketing = [
  {
    img: "img_08",
    title: "Duane Cain",
    designation: "Senior Product Desogner",
  },
  { img: "img_09", title: "Viola George", designation: "Co-Founder" },
  { img: "img_10", title: "Maurice Craig", designation: "Co-Founder" },
  {
    img: "img_11",
    title: "Nina Walters",
    designation: "Senior Product Desogner",
  },
  { img: "img_12", title: "Nathaniel Burke", designation: "Co-Founder" },
];

const TeamThree = () => {
  return (
    <>
      <Tabs>
        <TabList className="controls d-flex align-items-center justify-content-center mb-100 md-mb-60">
          <Tab>
            <button type="button" className="control">
              All
            </button>
          </Tab>
          <Tab>
            <button type="button" className="control">
              Leadership
            </button>
          </Tab>
          <Tab>
            <button type="button" className="control">
              Designer
            </button>
          </Tab>
          <Tab>
            <button type="button" className="control">
              Developer
            </button>
          </Tab>
          <Tab>
            <button type="button" className="control">
              Marketing
            </button>
          </Tab>
        </TabList>
        {/* End .Tablist */}
        <TabPanel>
          <div className="mixitUp-container">
            {All.map((item, i) => (
              <Link to="/team-details-v1" className="mix" key={i}>
                <div className="team-member">
                  <img src={`images/media/${item.img}.png`} alt="media" />
                  <h4>{item.title}</h4>
                  <strong>{item.designation}</strong>
                </div>
                {/* /.team-member */}
              </Link>
            ))}

            <div className="gap"></div>
            <div className="gap"></div>
            <div className="gap"></div>
          </div>
          {/* /.mixitUp-container */}
        </TabPanel>
        <TabPanel>
          <div className="mixitUp-container">
            {Leadership.map((item, i) => (
              <Link to="/team-details-v1" className="mix" key={i}>
                <div className="team-member">
                  <img src={`images/media/${item.img}.png`} alt="media" />
                  <h4>{item.title}</h4>
                  <strong>{item.designation}</strong>
                </div>
                {/* /.team-member */}
              </Link>
            ))}

            <div className="gap"></div>
            <div className="gap"></div>
            <div className="gap"></div>
          </div>
          {/* /.mixitUp-container */}
        </TabPanel>
        <TabPanel>
          <div className="mixitUp-container">
            {Designer.map((item, i) => (
              <Link to="/team-details-v1" className="mix" key={i}>
                <div className="team-member">
                  <img src={`images/media/${item.img}.png`} alt="media" />
                  <h4>{item.title}</h4>
                  <strong>{item.designation}</strong>
                </div>
                {/* /.team-member */}
              </Link>
            ))}

            <div className="gap"></div>
            <div className="gap"></div>
            <div className="gap"></div>
          </div>
          {/* /.mixitUp-container */}
        </TabPanel>
        <TabPanel>
          <div className="mixitUp-container">
            {Developer.map((item, i) => (
              <Link to="/team-details-v1" className="mix" key={i}>
                <div className="team-member">
                  <img src={`images/media/${item.img}.png`} alt="media" />
                  <h4>{item.title}</h4>
                  <strong>{item.designation}</strong>
                </div>
                {/* /.team-member */}
              </Link>
            ))}

            <div className="gap"></div>
            <div className="gap"></div>
            <div className="gap"></div>
          </div>
          {/* /.mixitUp-container */}
        </TabPanel>
        <TabPanel>
          <div className="mixitUp-container">
            {Marketing.map((item, i) => (
              <Link to="/team-details-v1" className="mix" key={i}>
                <div className="team-member">
                  <img src={`images/media/${item.img}.png`} alt="media" />
                  <h4>{item.title}</h4>
                  <strong>{item.designation}</strong>
                </div>
                {/* /.team-member */}
              </Link>
            ))}

            <div className="gap"></div>
            <div className="gap"></div>
            <div className="gap"></div>
          </div>
          {/* /.mixitUp-container */}
        </TabPanel>
      </Tabs>
    </>
  );
};

export default TeamThree;
