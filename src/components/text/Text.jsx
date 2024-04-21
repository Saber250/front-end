import "./text.css";

export default function Text({ title = "", text = "" }) {
  return (
    <div className="text">
      <p className="text-p">{text}</p>
      <h1 className="text-h1">{title}</h1>
    </div>
  );
}
