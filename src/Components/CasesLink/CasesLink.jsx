import './CasesLink.css'
import { Link } from "react-router-dom";
export function CasesLink({img, title, date, link}) {
  return (
    <>
      <Link className="cases" to={link}>
        <div className="cases-container-icon">
          <img src={img}/>
        </div>
        <div className="cases-container-links">
          <span>{title}</span>
          <p>{date}</p>
        </div>
      </Link>
    </>
  );
}
