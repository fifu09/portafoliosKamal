import "./NavLinks.css";
import { useState } from 'react'
import { Link } from "react-router-dom";
export function NavLinks({ isClickedLanguage }) {
  const [isClickedHome, setClickedHome] = useState(false);
  const [isClickedAbout, setClickedAbout] = useState(false);
  const [isClickedBlog, setClickedBlog] = useState(false);
  const [isClickedContact, setClickedContact] = useState(false);
  const resetHovers = () => {
    setClickedHome(false);
    setClickedAbout(false);
    setClickedBlog(false);
    setClickedContact(false);
  }
  const handleCaseHome = () => {
    resetHovers();
    setClickedHome(true);
  }
  const handleCaseAbout = () => {
    resetHovers();
    setClickedAbout(true);
  }
  const handleCaseBlog = () => {
    resetHovers();
    setClickedBlog(true);
  }
  const handleCaseContact = () => {
    resetHovers();
    setClickedContact(true);
  }
  const NavContent = {
    es: {
      home: "Inicio",
      aboute: "Sobre mi",
      blog: "Casos clinicos",
      contact: "Contacto",
    },
    en: {
      home: "Home",
      aboute: "About",
      blog: "Clinical Cases",
      contact: "Contact",
    },
  };
  const NavContentSelected = isClickedLanguage ? NavContent.en : NavContent.es;

  const NavClassHome = isClickedHome ? "link-clicked" : "";
  const NavClassAbout = isClickedAbout ? "link-clicked" : "";
  const NavClassBlog = isClickedBlog ? "link-clicked" : "";
  const NavClassContact = isClickedContact ? "contactClicked" : "";
  return (
    <>
      <section className='navLink'>
        <Link className={'link'+' '+NavClassHome} to="/" onClick={handleCaseHome}>
          {NavContentSelected.home}
        </Link>
        <Link className={'link'+' '+NavClassAbout} to="/about" onClick={handleCaseAbout}>
          {NavContentSelected.aboute}
        </Link>
        <Link className={'link'+' '+NavClassBlog} to="/blog" onClick={handleCaseBlog}>
          {NavContentSelected.blog}
        </Link>
        <Link className={NavClassContact} to="/contact" onClick={handleCaseContact}>
          <span>{NavContentSelected.contact}</span>
        </Link>
      </section>
    </>
  );
}
