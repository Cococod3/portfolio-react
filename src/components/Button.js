import "./Button.css";

function Button(props) {
  return (
    <div>
      <button className="log-button" onClick={props.onClick}>{props.children}</button>
    </div>
  );
}

export default Button;
