import "./button.css";

export default function Button({ value, style = 0 }) {
  let full = false;
  if (style === 10) {
    style = 0;
    full = true;
  } else if (style === 11) {
    style = 1;
    full = true;
  }
  return (
    <input
      type="button"
      className={`Button Button${style} ${full && "Button-full"}`}
      value={value}
    />
  );
}
