import "./landing.css";

export default function Landing({ nombreOffres }) {
  return (
    <div className="landing">
      <h1 className="slogan">Notre slogan doit être ici!</h1>
      <p className="sous-slogan">
        Parmi plus de{" "}
        <span className="nombre-offres">{nombreOffres} offres d'emploi</span>{" "}
        disponibles
      </p>
    </div>
  );
}
