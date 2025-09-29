import React, { useRef } from "react";
import Marquee from "react-fast-marquee";

const CollegeAchievements = () => {
  const headerRef = useRef(null);

  const achievements = [
    {
      id: 1,
      title: "Top-Rated Library",
      image: "/campus/Library.jpeg",
      color: "#00BA59",
      description:
        "Ranked as the top library in the state for its vast resources and innovative student support.",
      year: "2024",
      category: "Library Excellence",
    }
    ,

    {
      id: 2,
      title: "Drone Innovation Award",
      image: "/campus/drone.jpeg",
      color: "#FF6463",
      description: "Recognized for excellence in student-built drone technology.",
      year: "2024",
      category: "Innovation",
    },

    {
      id: 3,
      title: "GATE 2023 Achievement",
      image: "/Achievements/pranesh.png", // Replace with actual path if hosting the image
      color: "#FECF54",
      description: "Pranesh Pandey secured AIR 494 in GATE 2023 and is pursuing M.Tech in Civil Engineering at IIT Bombay.",
      year: "2023",
      category: "Student Success",
    },
    {
      id: 4,
      title: "CSVTU Affiliation",
      image: "/herosection/building.jpg", // Official CSVTU logo (publicly available)
      color: "#0EA5E9", // Blue tone for educational/official theme
      description: "Affiliated with CSVTU, ensuring quality academics and curriculum.",
      year: "Ongoing",
      category: "Affiliation",
    },
    {
      id: 5,
      title: "Alumni Success",
      image:
        "/events/event2.jpeg",
      color: "#00BA59",
      description: "95% of graduates employed within 6 months of graduation",
      year: "2024",
      category: "Career Outcomes",
    },
   
  ];

  return (
    <section
      className=" py-18 px-4 bg-gradient-to-br from-gray-50 to-blue-50/20"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <span className="text-xs font-semibold text-blue-800 tracking-widest uppercase mb-2 block font-lato">
            Celebrating Excellence
          </span>
          <h2
            className="text-5xl lg:text-6xl font-bold mb-6 py-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            College Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Recognized for excellence in education, research, and student success.
            Our commitment to innovation and quality continues to set new standards.
          </p>
        </div>

        {/* Infinite Marquee */}
        <Marquee
          pauseOnHover={true}
          gradient={false}
          speed={40}
          className=""
        >
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform perspective-1000 w-80 flex-shrink-0 mr-4"
              style={{ height: "24rem" }}
            >
              <div className="relative w-full h-full">
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(45deg, ${achievement.color}40, transparent)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl">
                  <div className="flex items-center mb-3">
                    <div
                      className="w-3 h-3 rounded-full mr-3"
                      style={{ backgroundColor: achievement.color }}
                    />
                    <span
                      className="text-sm font-semibold tracking-wider uppercase"
                      style={{ color: achievement.color }}
                    >
                      {achievement.category}
                    </span>
                    <span className="text-white/60 mx-2">•</span>
                    <span className="text-white/80 text-sm">{achievement.year}</span>
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-3 leading-tight transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    {achievement.title}
                  </h3>
                  <div className="overflow-hidden">
                    <p className="text-white/90 text-base leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 max-h-20">
                      {achievement.description}
                    </p>
                  </div>
                  <button
                    className="inline-flex items-center px-5 py-2.5 rounded-full font-semibold text-white border-2 border-white/30 hover:border-white/60 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 hover:pl-6 w-fit"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className="absolute inset-0 border-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    borderColor: achievement.color,
                    boxShadow: `inset 0 0 0 3px ${achievement.color}`,
                  }}
                />
                <div
                  className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-white/20 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: achievement.color }}
                >
                  {achievement.id}
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default CollegeAchievements;
