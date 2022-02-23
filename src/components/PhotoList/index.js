import React, { useState } from "react";
import Modal from "../Modal/index";

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: "project",
      description: "lorem ipsum",
      caption: "SYNTAX",
      github: "https://github.com/",
      deployment: "https://github.com/",
      photo: "syntax.jpg",
    },

    {
      name: "project",
      description: "lorem ipsum",
      caption: "Al-Together",
      github: "https://github.com/karmadog72/AL-together",
      deployment: "https://lannylopez.github.io/AL-together/",
      photo: "al-together.jpg",
    },
    {
      name: "project",
      description: "lorem ipsum",
      caption: "Allergy Finder",
      github: "https://github.com/karmadog72/Allergy-Finder",
      deployment: "https://whispering-chamber-78611.herokuapp.com/",
      photo: "allergy-finder.jpg",
    },
    {
      name: "project",
      description: "lorem ipsum",
      caption: "CMS Blog",
      github: "https://github.com/karmadog72/CMS-BLOG",
      deployment: "https://murmuring-meadow-54235.herokuapp.com/",
      photo: "cms-blog.jpg",
    },
    {
      name: "project",
      description: "lorem ipsum",
      caption: "Password Generator",
      github: "https://github.com/karmadog72/JavaScript-Password-Challenge-",
      deployment:
        "https://github.com/karmadog72/JavaScript-Password-Challenge-",
      photo: "pswd-gen.jpg",
    },
    {
      name: "project",
      description: "lorem ipsum",
      caption: "Portfolio Challenge",
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
