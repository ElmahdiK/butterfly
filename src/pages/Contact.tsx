import "../assets/styles/contact.scss";
import CONTACT_INFOS from "../assets/data/contact.json";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Me contacter</h1>
      <p>
        Vous avez des questions sur les papillons, souhaitez en savoir plus sur
        mon travail, ou êtes intéressé par une collaboration ou un projet web ?
        N'hésitez pas à me contacter !<br />
        <br />
        Je suis également à la recherche de nouvelles opportunités
        professionnelles dans le développement web. Si vous êtes à la recherche
        d'un développeur passionné, créatif et rigoureux, je serais ravi
        d'échanger 😊
        <br />
        <br />
        Vous pouvez me joindre par e-mail ou linkedin via les liens ci-dessous.
        <br />
        <br />
        Bonne visite !
      </p>
      <ul>
        {CONTACT_INFOS.map((info, index) => (
          <li key={index}>
            <Link to={info.link} target="_blank" rel="noopener noreferrer">
              <span>{info.title} :</span> {info.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
