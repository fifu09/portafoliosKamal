import "./App.css";
import { useState } from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import { NavBarMobile } from "./Components/NavBar/NavBarMobile";
import { Presentation } from "./Components/presentation/presentation";
import { ToggleComponent } from "./Components/Language/ToggleComponent";
import { Route, Routes } from "react-router-dom";
import { Blog } from "./Components/Blog/Blog";
import clinicalCasesLinkEN from "./Components/Blog/ClinicalCasesLinkEN";
import clinicalCasesLinkES from "./Components/Blog/ClinicalCasesLinkES";
import { OneCase } from "./Components/Blog/OneCase/OneCase";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";

function App() {
  const [isClickedLanguage, setClickedLanguage] = useState(false);
  const handleClickLanguage = () => {
    setClickedLanguage(!isClickedLanguage);
  };
  const [isClickedHamburguer, setClickedHamburguer] = useState(false);
  const handleClickHamburguer = () => {
    setClickedHamburguer(!isClickedHamburguer);
  };
  function renderCasesLink(languagueCases) {
    return languagueCases.map((value) => {
      return value.cases.map((value, index) => {
        return (
          <Route
            key={index}
            path={"/blog/" + value.id}
            element={<OneCase clinicalCase={value} />}
          />
        );
      });
    });
  }
  return (
    <>
      <section className="header">
        <NavBar
          isClicked={isClickedHamburguer}
          isClickedLanguage={isClickedLanguage}
          method={handleClickHamburguer}
        />
        <NavBarMobile
          isClicked={isClickedHamburguer}
          isClickedLanguage={isClickedLanguage}
          method={handleClickHamburguer}
        />
      </section>
      <section className="body">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ToggleComponent
                  isClicked={isClickedLanguage}
                  method={handleClickLanguage}
                />
                <Presentation
                  isClicked={isClickedLanguage}
                  method={handleClickHamburguer}
                />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <ToggleComponent
                  isClicked={isClickedLanguage}
                  method={handleClickLanguage}
                />
                <About isClickedLanguage={isClickedLanguage} />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <ToggleComponent
                  isClicked={isClickedLanguage}
                  method={handleClickLanguage}
                />
                <Blog isClickedLanguage={isClickedLanguage} />
              </>
            }
          />
          {renderCasesLink(clinicalCasesLinkEN)}
          {renderCasesLink(clinicalCasesLinkES)}
          <Route
            path="/contact"
            element={
              <>
                <ToggleComponent
                  isClicked={isClickedLanguage}
                  method={handleClickLanguage}
                />
                <Contact isClickedLanguage={isClickedLanguage}/>
              </>
            }
          />
        </Routes>
      </section>
        
    </>
  );
}

export default App;
