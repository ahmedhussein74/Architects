import React from "react";
import img1 from "../images/house1.jpg";
import img2 from "../images/house2.jpg";
import img3 from "../images/house3.jpg";
import img4 from "../images/house4.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Summer House",
      img: img1,
    },
    {
      title: "Brick House",
      img: img2,
    },
    {
      title: "Renovated",
      img: img3,
    },
    {
      title: "Barn House",
      img: img4,
    },
    {
      title: "Barn House",
      img: img4,
    },
    {
      title: "Renovated",
      img: img3,
    },
    {
      title: "Brick House",
      img: img2,
    },
    {
      title: "Summer House",
      img: img1,
    },
  ];
  return (
    <section className="projects pt-12">
      <h1 className="w-32 md:w-48 text-center text-lg md:text-2xl mx-auto border-b-4 border-sky-500">
        Projects
      </h1>
      <div className="projectsContainer py-6">
        {projects.map((element, index) => (
          <div
            key={index}
            className="shadow-lg"
            style={{ backgroundImage: `url(${element.img})` }}
          >
            <span className="w-32 py-1 block bg-slate-900 text-white text-center">
              {element.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
