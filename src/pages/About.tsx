import "../assets/styles/about.scss";

export default function About() {
  return (
    <div className="about">
      <h1>Bienvenue sur Butterfly ! 🦋</h1>
      <p>
        <b>Butterfly</b> est une application web développée avec React, Vite et
        TypeScript, qui a pour but d'afficher des papillons sur une interface
        moderne et épurée.
        <br />
        <br />
        Le projet est structuré en composants React, ce qui permet une gestion
        claire et modulable du code. Côté design, j'ai choisi d'utiliser SCSS
        pour une gestion élégante des styles et des animations.
        <br />
        <br />
        Le projet inclut également une barre de recherche permettant aux
        utilisateurs de filtrer et de trouver facilement des papillons en
        fonction de leurs préférences.
        <br />
        <br />
        Bonne visite !
      </p>

      <p className="p-author">
        <b>Elmahdi KORFED</b>
        <br />
        <span>Développeur Web</span>
      </p>
      <a
        href="https://github.com/ElmahdiK/butterfly"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pour plus d'infos cliquez-ici !
      </a>
    </div>
  );
}
