import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">ABOUT ME </h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "300px" }}
        alt="cover"
      />
    </section>
  );
}

export default About;
