import React from "react";
import { Helmet } from "react-helmet";
import HeaderThree from "../../../components/header/HeaderThree";

const Changelog = () => {
  return (
    <>
      <Helmet>
        <title>Changelog || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}
      <HeaderThree />
      {/* End Header */}

      {/* 	=============================================
				Fancy Hero Five
			==============================================  */}
      <div className="fancy-hero-five">
        <div className="bg-wrapper">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">Changelog</h1>
              <p className="sub-heading space-xs">
                Find the template Changelog here.
              </p>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-five */}

      {/* =============================================
            Documentation
        ==============================================  */}

      <div className="doc-container mt-70 sm-m0">
        <div className="container">
          <div className="row flex-xl-nowrap no-gutters">
            {/* <!-- ****************************** DOC MAIN BODY ********************************* --> */}
            <main className="col-12 doc-main-body">
              <h5 className="font-rubik mb-20">
                Release Date: <mark>23/01/2022</mark>
              </h5>
              <div className="mark-blue">
                <pre>
                  __New Features: <br /> 1) SEO Module Added
                  <br /> 2) SEO Optimized With React Helmet <br /> 3) Product Landing Dark Safari Issue Fixed <br /> 4) Code
                  Structure Improved <br /> 4) Documentation Updated 
                </pre>
              </div>
              {/* <!-- /.mark-blue --> */}

              <h5 className="font-rubik mb-20">
                Release Date: <mark>16/11/2021</mark>
              </h5>
              <div className="mark-blue">
                <pre>
                  __Page Added: <br /> 1) Website Builder New Home Page Added{" "}
                  <br /> 2) 4 Different Service Style Page Added <br /> 3)
                  Service Details Page Added <br /> 4) Code Structure Improved{" "}
                  <br /> 5) Responsive Issue Fixed <br /> 6) Documentation
                  Updated
                </pre>
              </div>
              {/* <!-- /.mark-blue --> */}

              <h5 className="font-rubik mb-20">
                Release Date: <mark>30/10/2021</mark>
              </h5>
              <div className="mark-blue">
                <pre>
                  __Page Added: <br /> 1) Changelog Page Added <br /> 2) Blog
                  Variation 6 Added <br /> 3) Inner Sections Gallery Added for
                  Intro Page
                </pre>
              </div>
              {/* <!-- /.mark-blue --> */}

              <h5 className="font-rubik mb-20">
                Release Date: <mark>24/10/2021</mark>
              </h5>
              <div className="mark-blue">
                <pre>
                  __Page Added:: <br /> 1) Portfolio Classic Style Added
                  <br /> 2) Portfolio Grid 2 Columns Added <br /> 3) Portfolio
                  Grid 3 Columns Added <br /> 4) Portfolio Gallery Slider Added{" "}
                  <br /> 5) Portfolio Grid Single Added <br /> 6) Portfolio
                  Classic Details Added
                </pre>
              </div>
              {/* <!-- /.mark-blue --> */}

              <h5 className="font-rubik mb-20">
                Release Date: <mark>20/10/2021</mark>
              </h5>
              <div className="mark-blue">
                <pre>
                  __Page Added: <br /> 1) Doc Signature Landing Page Added{" "}
                </pre>
              </div>
              {/* <!-- /.mark-blue --> */}

              <h5 className="font-rubik mb-20">
                Release Date: <mark>18/10/2021</mark>
              </h5>
              <div className="mark-blue">
                <pre>
                  __Fixed: <br /> 1) Dark Version Landing Scrolling Issue Fixed{" "}
                  <br /> 2) Form Warning Issue Fixed <br /> 3) Meta Title
                  Missing Issue Fixed
                </pre>
              </div>
              {/* <!-- /.mark-blue --> */}

              <h5 className="font-rubik mb-20">
                Release Date: <mark>04/10/2021</mark>
              </h5>
              <div className="mark-blue">
                <pre>
                  __Fixed: <br /> 1) Landing Page Responsive Issues Fixed <br />{" "}
                  2) Preview Updated
                </pre>
              </div>
              {/* <!-- /.mark-blue --> */}

              <h5 className="font-rubik mb-20">
                Release Date: <mark>25/09/2021</mark>
              </h5>
              <div className="mark-blue">
                <pre>
                  __Fixed: <br /> 1) Landing Page Spacing Issues Fixed <br /> 2)
                  Preview Page Issue Fixed <br /> 3) OnePage Nav Issues Fixed{" "}
                </pre>
              </div>
              {/* <!-- /.mark-blue --> */}

              <h5 className="font-rubik mb-20">
                Release Date: <mark>20/09/2021</mark>
              </h5>
              <div className="mark-blue">
                <pre>
                  __Page Added: <br /> 1) App Landing Page Added <br /> 2)
                  Preview Page updated <br /> 3) Responsive issue fixed <br />{" "}
                  4) Documentation Updated
                </pre>
              </div>
              {/* <!-- /.mark-blue --> */}

              <h5 className="font-rubik mb-20">
                Release Date: <mark>17/09/2021</mark>
              </h5>
              <div className="mark-blue">
                <pre>#First Published</pre>
              </div>
              {/* <!-- /.mark-blue --> */}
            </main>
            {/* <!-- /.doc-main-body --> */}
          </div>
        </div>
      </div>
      {/* <!-- /.doc-container --> */}
    </>
  );
};

export default Changelog;
