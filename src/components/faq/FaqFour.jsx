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
    title: "Does Edurific provide group courses?",
    desc: `Yes! While we have 1:1 courses, we also provide short group courses where your child learns with students of similar age groups. Please chat with us for further details on the course`,
    expand: "a",
  },
  {
    title: "Is there a pre-requisite for my child to enroll ?",
    desc: `No, we provide courses for the very beginner. We also launch seasonal courses for
    intermediate levels and that will have some pre-requisites as per the needs of the course`,
    expand: "b",
  },
  {
    title: "Are the timings flexible?",
    desc: `Yes, the classes are scheduled according to the teacher and students availability. If your child
    needs to cancel the class, the parent needs to inform us 24 hours prior to the class. In case of
    an emergency the class can be rescheduled after having a conversation with the personal
    teacher and your point of contact`,
    expand: "c",
  },
  {
    title: "Does my child need an instrument to enroll for the guitar course?",
    desc: `If your child is learning an instrument, they will need it to practice at home. This is because
    the class lasts for 45 mins- 1hour but to develop muscle memory the student needs daily
    reminders or practice sessions.
    60% fun practices, 30% class learning, 10% listening to music, this is our formula`,
    expand: "d",
  },
  {
    title: "What's the refund policy?",
    desc: `Stay tension-free once you enroll because there's a 100% refund on all pending classes.
    However, the sessions that were left unattended by the student without prior information will not
    be refunded. We wish to be fair to our tutors and pay for their valuable time`,
    expand: "e",
  },
  {
    title: "What if there are technical difficulties during the session?",
    desc: `If there are any technical difficulties for more than 30% of the session,
    then the session will be ended and will be rescheduled according to the student and teacher's
    availability`,
    expand: "f",
  },
];

const FaqFour = () => {
  return (
    <div
      className="accordion-style-four"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="faq-wrraper">
        <Accordion preExpanded={["b"]} allowZeroExpanded>
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

export default FaqFour;
