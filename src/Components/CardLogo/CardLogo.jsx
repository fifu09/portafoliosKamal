import "./CardLogo.css";
import logo from "./logoInternacional.jpg";
export function CardLogo({ text, img }) {

  const classImage = img == undefined ? "WithouImg" : "cardLogo-container-img";
  return (
    <>
      <section className="cardLogo">
        <div className={classImage}>
          <div className="cardLogo-background"></div>
          <img src={logo} />
        </div>
        <div className="cardLogo-container-text">{text}</div>
      </section>
    </>
  );
}
