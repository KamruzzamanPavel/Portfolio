import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProjectCard from "./ProjectcCard";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  const projectData = [
    {
      name: "My Awesome Project",
      description: "A brief description of what my awesome project does. ",
      image: "pro2.png", // URL to the project image (ensure correct path)
      liveDemo: "https://example.com/live-demo",
      github: "https://github.com/username/repository",
    },
    {
      name: "My Awesome Project 2",
      description:
        "A brief description of what my second awesome project does.",
      image: "pro3.png",
      liveDemo: "https://example.com/live-demo",
      github: "https://github.com/username/repository",
    },
    {
      name: "My Awesome Project 3",
      description:
        "This project showcases some interesting features and a modern design.",
      image: "pro4.png",
      liveDemo: "https://example.com/live-demo",
      github: "https://github.com/username/repository",
    },
    {
      name: "My Awesome Project 4",
      description:
        "A unique project with a focus on design and user experience.",
      image: "https://example.com/path/to/project-image.jpg",
      liveDemo: "https://example.com/live-demo",
      github: "https://github.com/username/repository",
    },
  ];

  // Detect screen width on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    // Check the window size on initial load
    handleResize();

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shouldShowNavigation = projectData.length > 3;

  return (
    <section
      id="projects"
      className="my-4 bg-white dark:bg-black rounded text-black dark:text-white py-12"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>

      {/* Conditionally render Swiper or a simple list based on screen size */}
      {!isMobile ? (
        <Swiper
          modules={[Pagination, shouldShowNavigation ? Navigation : null]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation={shouldShowNavigation}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          className="px-4"
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-1 gap-6 px-4">
          {projectData.map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
