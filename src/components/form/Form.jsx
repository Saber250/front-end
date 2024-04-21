import Text from "../text/Text";
// This image is a placeholder for the application's logo
import batman from "../../assets/batman.png";
import "./form.css";

export default function Form({ children, logo = true, title, text }) {
  return (
    <form className="Form">
      {logo && (
        <div className="center">
          <img className="logo-form" src={batman} alt="Batman" />
        </div>
      )}
      <Text title={title} text={text} />
      {children}
    </form>
  );
}
