import "./NavBar.css";
import { NavLinks } from "./NavLinks/NavLinks";
import { KamalName } from "./kamalName/KamalName";

export function NavBar({ isClickedLanguage }) {
  return (
    <>
      <nav className="navBar">
        <KamalName/>
        <NavLinks isClickedLanguage={isClickedLanguage}/>
      </nav>
    </>
  );
}
