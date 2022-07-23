import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = [
  {
    title: "Multi-genre learning",
    desc: ` Different styles, genres, languages under one module to broaden the learner's musicality`,
    expand: "a",
  },
  {
    title: "Age-appropriate",
    desc: ` Even after having knowledge-packed modules, age-appropriate content is one of our top priorities, age group differently`,
    expand: "b",
  },
  {
    title: "Exploratory",
    desc: ` The nature of our course is to build awareness and curiosity in our learners for music and help them build their own style`,
    expand: "c",
  },
  {
    title: "1:1 live session",
    desc: `A personal course that is also modified according to the taste and capabilities of each learner`,
    expand: "d",
  },
  {
    title: "Masterclasses with maestros",
    desc: `Practical tools to pursue music`,
    expand: "e",
  },
  {
    title: "Performance-oriented lessons",
    desc: `80% practical class and 20% theory are our learning ratios for vocals classes. 60% practice, 30% class learning, 10% ear training are the ratios for all instrument classes`,
    expand: "f",
  },
];

const Faq = () => {
  return (
    <div className="accordion-style-two pr-5">
      <div className="faq-wrraper">
        <Accordion preExpanded={["a"]} allowZeroExpanded>
          {FaqContent.map((item, i) => (
            <AccordionItem className="card" key={i} uuid={item.expand}>
              <AccordionItemHeading className="card-header">
                <AccordionItemButton>
                  <h5 className="mb-0">
                    <button className="btn btn-link">{item.title}</button>{" "}
                  </h5>
                </AccordionItemButton>
              </AccordionItemHeading>
              {/* Accordion Heading */}
              <AccordionItemPanel className="card-body fadeInUp">
                <p>{item.desc}</p>
              </AccordionItemPanel>
              {/* Accordion Body Content */}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
