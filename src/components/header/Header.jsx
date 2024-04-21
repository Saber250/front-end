import Button from "../button/Button.jsx";
// this batman image is used as a placeholder for the user's prfile picture
import batman from "../../assets/batman.png";
import "./header.css";

export default function Header({ search = false, connected = false }) {
  return (
    <header>
      <a href="#">
        <img src={batman} alt="batman" />
      </a>
      {!connected && (
        <div className="right">
          <Button value="Connecter" style={1} />
          <Button value="Créer un compte" />
        </div>
      )}
    </header>
  );
}
