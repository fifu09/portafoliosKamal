import "./NavBarMobile.css";
import { Hamburguer } from "./HamburguerButton/Hamburguer";
import { NavLinksMobile } from "./NavLinks/NavLinksMobile";
import { KamalName } from "./kamalName/KamalName";

export function NavBarMobile({ isClicked, isClickedLanguage, method }) {
  return (
    <>
      <nav className="navBarMobile">
        <KamalName/>
        <Hamburguer isClicked={isClicked} method={method}/>
        <NavLinksMobile isClicked={isClicked} method={method} isClickedLanguage={isClickedLanguage}/>
      </nav>
    </>
  );
}
