import React, { useRef, useEffect } from "react";
import Herosection from "../components/Herosection";
import PlacementPartners from "../components/PlacementPartners";
import AchievementsMarquee from "../components/AchievementsMarquee";
import NoticeBoard from "../components/NoticeBoard";
import CoursesOffered from "../components/CoursesOffered";
import AboutSection from "../components/AboutSection";
import Leadership from "../components/Leadership";
import AlumniSection from "../components/alumni";
import UniversitySection from "../components/UniversitySection";
import AchievementsSection from "../components/AchievementsSection";
import SkillDevelopment from "../components/SkillDevelopment";
import Super40CTA from "../components/Super40CTA";

const Home = () => {


  const newsRef = useRef(null);

  // Scroll on page load if URL has hash
  useEffect(() => {
    if (window.location.hash === "#news-events") {
      newsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);


  return (
    <div>
      <Herosection />
      <CoursesOffered />
      <AchievementsSection/>
      <AchievementsMarquee />
      {/* <UniversitySection/> */}
      <Leadership />
      <AlumniSection />
      <PlacementPartners />
      <Super40CTA/>
      <NoticeBoard ref={newsRef} />
      <SkillDevelopment/>
      <AboutSection />
     
     
    </div>
  );
};

export default Home;
