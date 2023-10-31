import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./BackArrow.css";

export function BackArrow({route}) {
  return (
    <>
      <Link className="BackArrow" to={route}>
        <AiOutlineArrowLeft />
      </Link>
    </>
  );
}
