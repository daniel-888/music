import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title></title>
        <meta property="og:site_name" content="Music by Edurific" />
        <meta
          property="og:url"
          content="https://music.edurific.com/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Music Classes for kids by Experts of Edurific"
        />
        <meta
          name="keywords"
          content="Music, Guitar, Vocals, Disney Songs, Musical, Classes, Music Online classes, Learn Music Online, Learn Guitar Online, Learn Singing Online, Music Courses, Singing Courses, Guitar Courses, Music Tutors, Best place to learn Music online, Best Music Classes for kids, Free Music Class, Music for Kids, Kids online Music Classes, Kids online Guitar Classes, Learn Musical Instruments Online, Kids online Singing Classes, Live Music Classes, Live Music one on one classes, Whitehat jr subsitute"
        />
        <meta
          name="description"
          content="Edurific Music Classes"
        />
        <meta name="description" content="Music Classes for Kids by Edurific" />
      </Helmet>
      {/* End Seo Helmt */}

      <ScrollToTop />
      <Routes />
     
    </>
  );
};

export default App;
