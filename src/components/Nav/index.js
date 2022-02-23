import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
// import coverImage from "../../assets/cover/cover-image.jpg";

const Nav = (props) => {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    // setAboutSelected
    setContactSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      {/* <img
        src={coverImage}
        className="my-2"
        style={{ width: "120px", height: "120px" }}
        alt="cover"
      /> */}
      <h2>
        <a data-testid="link" href="/">
          Danika Pearson
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              ABOUT ME
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>CONTACT</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
