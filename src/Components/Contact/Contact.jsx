import "./Contact.css"
import { ContactEN } from "./ContactEN";
import { ContactES } from "./ContactES";

export function Contact ({isClickedLanguage}) {
    const contact = isClickedLanguage 
    ? ContactEN()
    : ContactES();
    return (
        <section className="Contact">
            {contact}
        </section>
    )
}