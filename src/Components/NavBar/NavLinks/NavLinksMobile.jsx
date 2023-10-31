import "./NavLinksMobile.css";
import { Link } from "react-router-dom";
export function NavLinksMobile({ isClicked, isClickedLanguage, method }) {
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

  const NavClassName = isClicked ? "linkMobile-clicked" : "linkMobile-notClicked";
  const NavContainerRoutesClassName = isClicked
    ? "navLinkMobile-clicked"
    : "navLinkMobile-notClicked";
  return (
    <>
      <section className={NavContainerRoutesClassName}>
        <Link className={NavClassName} to="/" onClick={method}>
          {NavContentSelected.home}
        </Link>
        <Link className={NavClassName} to="/about" onClick={method}>
          {NavContentSelected.aboute}
        </Link>
        <Link className={NavClassName} to="/blog" onClick={method}>
          {NavContentSelected.blog}
        </Link>
        <Link className={NavClassName} to="/contact" onClick={method}>
          {NavContentSelected.contact}
        </Link>
      </section>
    </>
  );
}
