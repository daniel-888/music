import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const DocAsTabs = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>
            <div className="d-flex align-items-center">
              <img src="images/icon/90.svg" alt="icon" />
              <p>Team Box</p>
            </div>
          </Tab>
          {/* End .d-felx */}
          <Tab>
            <div className="d-flex align-items-center ">
              <img src="images/icon/91.svg" alt="icon" />
              <p>Project & Task</p>
            </div>
          </Tab>
          {/* End .d-felx */}
          <Tab>
            <div className="d-flex align-items-center">
              <img src="images/icon/92.svg" alt="icon" />
              <p>Note & Docs</p>
            </div>
          </Tab>
          {/* End .d-felx */}
        </TabList>

        <div className="mt-50 sm-mt-30">
          <TabPanel>
            <img
              src="images/assets/screen_11.png"
              alt="screen"
              className="m-auto"
              data-aos="fade"
              data-aos-duration="1200"
            />
          </TabPanel>
          <TabPanel>
            <img
              src="images/assets/screen_15.png"
              alt="screen"
              className="m-auto"
              data-aos="fade"
              data-aos-duration="1200"
            />
          </TabPanel>
          <TabPanel>
            <img
              src="images/assets/screen_16.png"
              alt="screen"
              className="m-auto"
              data-aos="fade"
              data-aos-duration="1200"
            />
          </TabPanel>
        </div>
        {/* /.pricing-table-area-six */}
      </Tabs>
    </>
  );
};

export default DocAsTabs;
