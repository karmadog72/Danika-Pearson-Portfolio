import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="container">
      <div>
        <h1>ABOUT ME </h1>
        <img
          src={coverImage}
          className="my-2"
          style={{ width: "140px", height: "160px" }}
          alt="cover"
        />
        <p>
          I've recently earned a certificate in full stack Web Development from
          the University of Utah, through their Boot Camp Program for Computer
          Coding. I’ve acquired newly developed skills in JavaScript, HTML, CSS,
          MySQL, NoSQL, Handlebars.js, MERN, and responsive web design. I'm an
          analytical and innovative problem solver, that’s passionate about
          developing apps. I have applied aspects of UX/UI and MERN development
          in recent projects that I’ve worked on, with a team of 2-4 people each
          time. I’m excited to leverage my skills as part of a fast-paced,
          quality-driven team to build better experiences on the web.
        </p>
      </div>
    </section>
  );
}

export default About;
