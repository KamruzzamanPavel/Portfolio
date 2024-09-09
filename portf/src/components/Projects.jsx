// // import React from "react";
// import ProjectCard from "./ProjectcCard";

// const Projects = () => {
//   const projectData = [
//     { name: "Project 1", description: "This is project 1", link: "#" },
//     { name: "Project 2", description: "This is project 2", link: "#" },
//     { name: "Project 3", description: "This is project 3", link: "#" },
//     { name: "Project 4", description: "This is project 4", link: "#" },
//     // Add more projects as needed
//   ];

//   return (
//     <section className="my-8">
//       <h2 className="text-3xl font-bold mb-4">Projects</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {projectData.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProjectCard from "./ProjectcCard";

const Projects = () => {
  const projectData = [
    {
      name: "My Awesome Project",
      description:
        "A brief description of what my awesome project does. It showcases cool features and has a sleek design.",
      image: "pro2.png", // URL to the project image
      liveDemo: "https://example.com/live-demo", // URL to the live demo
      github: "https://github.com/username/repository", // URL to the GitHub repository
    },
    {
      name: "My Awesome Project",
      description:
        "A brief description of what my awesome project does. It showcases cool features and has a sleek design.",
      image: "pro3.png", // URL to the project image
      liveDemo: "https://example.com/live-demo", // URL to the live demo
      github: "https://github.com/username/repository", // URL to the GitHub repository
    },
    {
      name: "My Awesome Project",
      description:
        "A brief description of what my awesome project does. It showcases cool features and has a sleek design.",
      image: "pro4.png", // URL to the project image
      liveDemo: "https://example.com/live-demo", // URL to the live demo
      github: "https://github.com/username/repository", // URL to the GitHub repository
    },
    {
      name: "My Awesome Project",
      description:
        "A brief description of what my awesome project does. It showcases cool features and has a sleek design.",
      image: "https://example.com/path/to/project-image.jpg", // URL to the project image
      liveDemo: "https://example.com/live-demo", // URL to the live demo
      github: "https://github.com/username/repository", // URL to the GitHub repository
    },
    // Add more projects as needed
  ];

  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 1,
          },
        }}
      >
        {projectData.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
