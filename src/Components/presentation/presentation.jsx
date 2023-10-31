import { CardLogo } from "../CardLogo/CardLogo.jsx";
import "./presentation.css";
import { servicesLoader } from "./servicesLoader.jsx";

const descriptionObject = {
  en: "Hello, I'm Kamal, a passionate dentist dedicated to your dental well-being.",
  es: "Hola, soy Kamal, un apasionado odontólogo comprometido con tu bienestar dental.",
};

export function Presentation({ isClicked }) {
  const description = isClicked ? descriptionObject.en : descriptionObject.es;
  const serviciesTitle = isClicked ? 'Servicies' : 'Servicios'
  const services = isClicked ? servicesLoader("EN") : servicesLoader("ES");
  return (
    <>
      <section className="presentation">
        <CardLogo text={description} img="presentation-logo" />
        <h2 className="presentation-services-title">{serviciesTitle}</h2>
        <div className="presentation-services">
          {services}
        </div>
        
      </section>
    </>
  );
}
