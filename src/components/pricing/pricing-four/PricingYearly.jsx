import React from "react";

const PricingContent = [
  {
    packName: "Beginner",
    packDetails: "Beginner's guide to music",
    bgColor: "#c8e6db",
    price: "₹950/class",
    durationNumber: "Save 5%",
    facility: "8 classes",
    features: [
      "Certificate",
      "1 Recital/Performance",  
      "Weekly Quizzes",  
     
    ],
    non:[
      "Projects",
      "Masterclass",
    ],
    animationDelay: "",
    activeClass: "",
  },
  {
    packName: "Intermediate",
    packDetails: "Sound and Emotions",
    bgColor: "#FFF7EB",
    price: "₹900/class",
    durationNumber: "Save 10%",
    facility: "36 classes",
    features: [
      "Certificate",
      "2 Recital/Performance",   
      "Weekly Quizzes",
      "1 Project",    
      "2 Masterclasses",
      
    ],
    non:[
     
    ],
    animationDelay: "",
    activeClass: "",
  },
  {
    packName: "Performer",
    packDetails: "Explore your style",
    bgColor: "#E2F2FD",
    price: "₹850/class",
    durationNumber: "Save 15%",
    facility: "70 classes",
    features: [
      "Certificate",
      "5 Recital/Performance",    
      "Weekly Quizzes",
      "2 Projects",
      "3 Masterclasses",
    ],
    non:[
     
    ],
    animationDelay: "100",
    activeClass: "active most-popular",
  },
  {
    packName: "Experts",
    packDetails: "Expand your style",
    bgColor: "#FFEBEB",
    price: "₹800/class",
    durationNumber: "Save 20%",
    facility: "130 classes",
    features: [
      "Certificate",
      "8 Recital/Performance",
      "Weekly Quizzes",
      "2 Projects",
      "4 Masterclasses",
     
    ],
    non:[
    
    ],
    animationDelay: "200",
    activeClass: "",
  },
];

const PricingYearly = () => {
  return (
    <div className="row justify-content-center">
      {PricingContent.map((val, i) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDelay}
          key={i}
        >
          <div className={`pr-table-wrapper ${val.activeClass}`} style={{ backgroundColor: "white" }}>
          <div className="classes" style={{ color: "Green", background: val.bgColor }}>{val.durationNumber}</div>
            <div className="pack-name">{val.packName}</div>
            <div className="pack-details">{val.packDetails}</div>
            <div className="classes" style={{ color: "navy" }}>
                {val.facility}
            </div> 
            
            <div
              className="top-banner d-md-flex"
              style={{ background: val.bgColor }}
            >
              <div className="price">
                <sup className="price-line">₹1000</sup>
                {val.price}
              </div>
            </div>
            
             
            {/* /.top-banner */}
            <ul className="pr-feature">
              {val.features.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
            <ul className="pr-non">
              {val.non.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
            <a href="https://demo.edurific.com" className="trial-button">
              Book a free class
            </a>
            <div className="trial-text"><a href="https://edurific.com/music.pdf">View Curriculum</a></div>
          </div>
          {/* /.pr-table-wrapper */}
        </div>
      ))}
    </div>
  );
};

export default PricingYearly;
