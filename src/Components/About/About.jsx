import "./About.css";
import { descriptionES } from "./descriptionES";
import { descriptionEN } from "./descriptionEN";
export function About({ isClickedLanguage }) {
  const description = isClickedLanguage 
    ? descriptionEN()
    : descriptionES();
  return (
    <>
      {description}
    </>
  )
}
