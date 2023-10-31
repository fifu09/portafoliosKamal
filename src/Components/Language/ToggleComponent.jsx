
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import "./ToggleComponent.css";
export function ToggleComponent({ isClicked, method }) {
  const classNameToggleOff = isClicked
    ? "BsToggleOff-stateOff"
    : "BsToggleOff-stateOn";
  const classNameToggleOn = isClicked
    ? "BsToggleOn-stateOn"
    : "BsToggleOn-stateOff";
  return (
    <>
      <section className="BsToggle">
        <span className="BsToggle-language">ES</span>
        <div className={classNameToggleOff} onClick={method}>
          <BsToggleOff />
        </div>
        <div className={classNameToggleOn} onClick={method}>
          <BsToggleOn />
        </div>
        <span className="BsToggle-language">EN</span>
      </section>
    </>
  );
}
