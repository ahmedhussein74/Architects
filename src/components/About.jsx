import React from "react";
import img1 from "../images/team1.jpg";
import img2 from "../images/team2.jpg";
import img3 from "../images/team3.jpg";
import img4 from "../images/team4.jpg";

const About = () => {
  const team = [
    {
      title: "John Doe",
      img: img2,
      role: "CEO & Founder",
    },
    {
      title: "Jane Doe",
      img: img1,
      role: "Architect",
    },
    {
      title: "Mike Ross",
      img: img3,
      role: "Architect",
    },
    {
      title: "Dan Star",
      img: img4,
      role: "Architect",
    },
  ];
  return (
    <section className="pt-12">
      <h1 className="w-32 md:w-48 text-center text-lg md:text-2xl mx-auto border-b-4 border-sky-500">
        About
      </h1>
      <div className="py-6 flex justify-center flex-wrap">
        {team.map((element, index) => (
          <div key={index} className="w-60 md:w-72 m-5 shadow-lg">
            <img src={element.img} />
            <h2 className="text-xl font-bold my-1 pl-2">{element.title}</h2>
            <span className="text-gray-500 pl-2">{element.role}</span>
            <p className="pb-2 pl-2">
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
