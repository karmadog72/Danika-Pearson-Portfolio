import React, { useState } from "react";
import Modal from "../Modal/index";

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: "Project",
      description:
        "Welcome to SYNTAX! Hire, Connect & Collaborate in our world of coding!",
      caption: "SYNTAX ↗",
      github: "https://github.com/karmadog72/Syntax",
      deployment: "https://syntax-uofu.herokuapp.com",
      photo: "syntax.jpg",
    },

    {
      name: "Project",
      description:
        "AL-Together helps people with memory loss navigate daily life, with use of our website.",
      caption: "AL-Together ↗",
      github: "https://github.com/karmadog72/AL-together",
      deployment: "https://lannylopez.github.io/AL-together/",
      photo: "al-together.jpg",
    },
    {
      name: "Project",
      description:
        "A user-friendly allergen filtered grocery application created for those who struggle with finding grocery products excluding their allergies",
      caption: "Allergy Finder ↗",
      github: "https://github.com/karmadog72/Allergy-Finder",
      deployment: "https://whispering-chamber-78611.herokuapp.com/",
      photo: "allergy-finder.jpg",
    },
    {
      name: "Project",
      description:
        "A tech blog to publish articles, comment on / post thoughts, opinions and general information",
      caption: "CMS Blog ↗",
      github: "https://github.com/karmadog72/CMS-BLOG",
      deployment: "https://murmuring-meadow-54235.herokuapp.com/",
      photo: "cms-blog.jpg",
    },
    {
      name: "Project",
      description: "An app to help people generate a random password.",
      caption: "Generator ↗",
      github: "https://github.com/karmadog72/JavaScript-Password-Challenge-",
      deployment:
        "https://github.com/karmadog72/JavaScript-Password-Challenge-",
      photo: "pswd-gen.jpg",
    },
    {
      name: "Project",
      description: "My 1st ever web developer portfolio.",
      caption: "Portfolio ↗",
      github: "https://github.com/karmadog72/portfolio-challenge-",
      deployment: "https://karmadog72.github.io/portfolio-challenge-/",
      photo: "portfolio-challenge.jpg",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const [currentPhoto, setCurrentPhoto] = useState();

  // const toggleModal = (image, i) => {
  //   setCurrentPhoto({ ...image, index: i });
  //   setIsModalOpen(!isModalOpen);
  // };

  return (
    <section>
      <div>
        {isModalOpen && (
          <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
        )}
      </div>
      <div className="project-row">
        {photos.map((image, i) => (
          <div className="project-img" key={i}>
            <p className="project-name" onClick={() => toggleModal(image, i)}>
              {image.caption}
            </p>
            <img
              src={require(`../../assets/large/portfolio/${image.photo}`)}
              alt={image.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoList;
