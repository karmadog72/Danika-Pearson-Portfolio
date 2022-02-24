import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

import Footer from "./components/Footer";

function App() {
  const [categories] = useState([
    {
      name: "PORTFOLIO",
      description: "All my work",
    },
    {
      name: "RESUME",
      description:
        "https://docs.google.com/document/d/10TNbdwt8S-v5pynfZDL_FST3l9nKzCNbYUIo45Ey65I/edit?usp=sharing",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(true);

  return (
    <div>
      <Nav
        categories={categories}
        // aboutSelected={aboutSelected}
        // setAboutSelected={setAboutSelected}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <About></About>
        {/* <Resume></Resume> */}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}

        <div className="App">
          <h1></h1>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
