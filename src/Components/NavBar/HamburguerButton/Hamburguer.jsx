import "./Hamburguer.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
export function Hamburguer({ isClicked, method }) {

  const hamburguerClassName = isClicked
    ? "navBar-hamburguer-clicked"
    : "navBar-hamburguer-notClicked";
  const xClassName = isClicked ? "navBar-x-clicked" : "navBar-x-notClicked";

  return (
    <>
      <section className="navBarMobile-container-hamburguer">
          <div className="navBar-container-hamburguer-button" onClick={method}>
            <FaBars className={hamburguerClassName} />
            <AiOutlineClose className={xClassName} />
          </div>
        </section>
    </>
  );
}
