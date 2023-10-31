import "./OneCase.css";
import { BackArrow } from "../../BackArrow/BackArrow";
export function OneCase({ clinicalCase }) {
  return (
    <>
      <section className="OneCase">
        <BackArrow route="/blog" />
        <h2>{clinicalCase.title}</h2>
        <p className="OneCase-date">{clinicalCase.date}</p>
        <div className="OneCase-body">
          {clinicalCase.story}
          <section className="OneCase-body-images">
            <div>
              <h3>Antes</h3>
              <img src={clinicalCase.beforeImg}></img>
            </div>
            <div>
              <h3>Después</h3>
              <img src={clinicalCase.afterImg}></img>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
