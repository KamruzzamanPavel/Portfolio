// import { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import ProjectCard from "./ProjectcCard";

// const Projects = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   const projectData = [
//     {
//       name: "My Awesome Project",
//       description: "A brief description of what my awesome project does. ",
//       image: "pro2.png", // URL to the project image (ensure correct path)
//       liveDemo: "https://example.com/live-demo",
//       github: "https://github.com/username/repository",
//     },
//     {
//       name: "My Awesome Project 2",
//       description:
//         "A brief description of what my second awesome project does.",
//       image: "pro3.png",
//       liveDemo: "https://example.com/live-demo",
//       github: "https://github.com/username/repository",
//     },
//     {
//       name: "My Awesome Project 3",
//       description:
//         "This project showcases some interesting features and a modern design.",
//       image: "pro4.png",
//       liveDemo: "https://example.com/live-demo",
//       github: "https://github.com/username/repository",
//     },
//     {
//       name: "My Awesome Project 4",
//       description:
//         "A unique project with a focus on design and user experience.",
//       image: "https://example.com/path/to/project-image.jpg",
//       liveDemo: "https://example.com/live-demo",
//       github: "https://github.com/username/repository",
//     },
//   ];

//   // Detect screen width on mount and resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 480);
//     };

//     // Check the window size on initial load
//     handleResize();

//     // Add event listener to track window resize
//     window.addEventListener("resize", handleResize);

//     // Clean up the event listener
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const shouldShowNavigation = projectData.length > 3;

//   return (
//     <section
//       id="projects"
//       className="my-2 md:my-4 bg-white dark:bg-black rounded text-black dark:text-white py-5"
//     >
//       <div className="flex flex-col md:flex-row justify-center items-center">
//         <h3 className="text-sm md:text-3xl font-bold m-1 md:mb-4 text-center text-slate-400 md:py-2 ">
//           Explore My Recent
//         </h3>
//         <span className="text-xl md:text-3xl font-bold  mb-2 md:mb-4 text-center py-1 md:py-2 ">
//           Projects
//         </span>
//       </div>

//       {/* Conditionally render Swiper or a simple list based on screen size */}
//       {!isMobile ? (
//         <Swiper
//           modules={[Pagination, shouldShowNavigation ? Navigation : null]}
//           spaceBetween={20}
//           slidesPerView={3}
//           pagination={{ clickable: true }}
//           navigation={shouldShowNavigation}
//           breakpoints={{
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//             500: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             300: {
//               slidesPerView: 1,
//               spaceBetween: 10,
//             },
//           }}
//           className="px-4"
//         >
//           {projectData.map((project, index) => (
//             <SwiperSlide key={index}>
//               <ProjectCard project={project} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <div className="grid grid-cols-1 gap-6 px-4">
//           {projectData.map((project, index) => (
//             <div key={index}>
//               <ProjectCard project={project} />
//             </div>
//           ))}
//         </div>
//       )}
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
      description: " It showcases cool features and has a sleek design.",
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

  const shouldShowNavigation = projectData.length > 3;

  return (
    // <section className="my-10 bg-white dark:bg-black  text-black dark:text-white pb-5">
    //   {/* <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2> */}
    //   <div className="flex flex-col md:flex-row justify-center items-center py-2">
    //     <span className="text-sm md:text-3xl font-bold m-1 md:mb-4 text-center   ">
    //       Explore My Recent
    //     </span>
    //     <span className="text-xl md:text-3xl font-bold  mb-2 md:mb-4 text-center text-blue-500  ">
    //       Projects
    //     </span>{" "}
    //   </div>
    //   <Swiper
    //     modules={[Pagination, shouldShowNavigation ? Navigation : null]}
    //     spaceBetween={20} // Adjust space between slides for better layout on smaller screens
    //     slidesPerView={3}
    //     pagination={{ clickable: true }}
    //     navigation={shouldShowNavigation}
    //     breakpoints={{
    //       1024: {
    //         slidesPerView: 3,
    //         spaceBetween: 30, // More space between cards on larger screens
    //       },
    //       768: {
    //         slidesPerView: 2, // 2 slides for medium-sized screens
    //         spaceBetween: 20,
    //       },
    //       480: {
    //         slidesPerView: 1, // Single slide on small screens
    //         spaceBetween: 10,
    //       },
    //       320: {
    //         slidesPerView: 1, // Adjust for extra small screens
    //         spaceBetween: 5,
    //       },
    //     }}
    //     className="px-4"
    //   >
    //     {projectData.map((project, index) => (
    //       <SwiperSlide key={index}>
    //         <ProjectCard project={project} />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </section>

    <section className="my-10 bg-white dark:bg-black text-black dark:text-white pb-5">
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-center items-center py-2">
        <span className="text-2xl md:text-4xl font-bold m-1 md:mb-4 text-center">
          Explore My Recent
        </span>
        <span className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-center text-green-600 dark:text-green-500">
          Projects
        </span>
      </div>

      {/* Swiper for Projects */}
      <Swiper
        modules={[Pagination, shouldShowNavigation ? Navigation : null]}
        spaceBetween={20} // Adjust space between slides for better layout on smaller screens
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation={shouldShowNavigation}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30, // More space between cards on larger screens
          },
          768: {
            slidesPerView: 2, // 2 slides for medium-sized screens
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1, // Single slide on small screens
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1, // Adjust for extra small screens
            spaceBetween: 5,
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
    </section>
  );
};

export default Projects;
