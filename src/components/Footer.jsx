import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="flex justify-center flex-wrap">
        <ul className="w-64 md:80 my-5 text-center text-lg md:text-xl">
          <li>Facebook</li>
          <li>Linkedin</li>
          <li>Github</li>
          <li>Gmail</li>
          <li>Instagram</li>
        </ul>
        <ul className="w-64 md:80 my-5 text-center text-lg md:text-xl">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
        <ul className="w-64 md:80 my-5 text-center text-lg md:text-xl">
          <li>Cairo</li>
          <li>Giza</li>
          <li>Alex</li>
          <li>Aswan</li>
          <li>Luxur</li>
        </ul>
        <ul className="w-64 md:80 my-5 text-center text-lg md:text-xl">
          <li>Team</li>
          <li>Support</li>
          <li>Markting</li>
          <li>Jobs</li>
          <li>Freelance</li>
        </ul>
      </div>
      <p className="py-2 flex justify-center">
        <a href="https://www.linkedin.com/in/ahmed-hussein-23b95b1b8">
          <i class="fa-brands fa-linkedin text-2xl mx-2 mb-3"></i>
        </a>
        <a href="https://github.com/ahmedhussein74">
          <i class="fa-brands fa-square-github text-2xl mx-2 mb-3"></i>
        </a>
        <a href="https://www.facebook.com/AhmedHusein22/">
          <i class="fa-brands fa-square-facebook text-2xl mx-2 mb-3"></i>
        </a>
        <a href="mailto:ahmedhusseinofficial22@gmail.com">
          <i class="fa-solid fa-envelope text-2xl mx-2 mb-3"></i>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
