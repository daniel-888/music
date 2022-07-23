import React from "react";

const About = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
        <img src="images/media/illustration.svg" alt="about" className="m-auto" />
      </div>
      {/* End .col */}

      <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200">
        <div className="text-wrapper">
          <div className="title-style-five">
            <h2>
            <span>Music</span> is the shorthand of emotion.
            </h2>
          </div>
          <p className="font-rubik">
          Edurific's music curriculum and seasoned faculty members help your child discover their inner artist with practical lessons, fun activities, and quizzes. Your child not only learns the fundamentals of mainstream music genres but also explores different styles of music in the world.
          </p>
          <p className="font-rubik">
          We not only prepare your child for the stage, but also for the recording studio.
          </p>
          <div className="name font-slab">Prabhakar Nadar</div>
        </div>
        {/* /.text-wrapper */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default About;
