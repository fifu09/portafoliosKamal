import { CasesLink } from "../CasesLink/CasesLink";
import clinicalCasesLinkES from "./ClinicalCasesLinkES";
import clinicalCasesLinkEN from "./ClinicalCasesLinkEN";
import { hashIndex } from "../../helpers/hashIndex";
import "./Blog.css";
import { Route } from 'react-router-dom'

export function getCases(category) {
  return category.cases.map((value, index) => {
    return (
      <CasesLink
        key={category.caseCategory + index}
        img={category.img}
        title={value.title}
        date={value.date}
        link={value.id}
      />
    );
  });
}

export function Blog({ isClickedLanguage }) {
  let ClinicalCasesLink = undefined;
  // ENGLISH
  if (isClickedLanguage) {
    ClinicalCasesLink = clinicalCasesLinkEN.map((value) => {
      return (
        <li key={value.caseCategory}>
          <h2>{value.caseCategory}</h2>
          {getCases(value)}
        </li>
      );
    });
  }
  // SPANISH
  else {
    ClinicalCasesLink = clinicalCasesLinkES.map((value) => {
      return (
        <li key={value.caseCategory}>
          <h2>{value.caseCategory}</h2>
          {getCases(value)}
        </li>
      );
    });
  }
  return (
    <>
      <section className="blog">
        <ul>{ClinicalCasesLink}</ul>
      </section>
    </>
  );
}
