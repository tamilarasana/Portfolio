import React from "react";
import "./ProjectContainer.css";
import { Element } from "react-scroll";
import Project from "../Project/Project";

const ProjectContainer = () => {
  const projects = [
    {
      img: "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg",
      title: "Instagrem",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, laboriosam!",
      link:"www.instagram",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWPrM9cBliDy1Ckb3THIeim9NquAEbNS2mfg&usqp=CAU",
      title: "Facebook",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, laboriosam!",
      link:"www.facebook.com"
    },
    {
      img: "https://images.hdqwalls.com/wallpapers/spiderman-no-way-home-4k-tf.jpg",
      title: "Whats App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, laboriosam!",
      link:"www.whatsapp.com",
    },
    {
      img: "https://images8.alphacoders.com/712/712496.jpg",
      title: "Twitter",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, laboriosam!",
      link:"www.twitter.com",
    },
    {
      img: "https://images.hdqwalls.com/wallpapers/spiderman-no-way-home-4k-tf.jpg",
      title: "why so serious",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, laboriosam!",
      link:"www.whysoserious.com",
    },
  ];
  return (
    <div>
      <Element className="projectcontainer" id="projects">
        <h1>Project</h1>
        <p>
          Here are some projects which I done for making lives of pepole easy
        </p>
        <div className="projectcontainer__projects">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                img={project.img}
                title={project.title}
                desc={project.desc}
                link={project.link}
              />
            );
          })}
        </div>
      </Element>
    </div>
  );
};

export default ProjectContainer;
