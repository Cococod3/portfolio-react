import "./Input.css";
function Input(props) {
  return (
    <input
      onChange={props.onHandleChange}
      type={props.type}
      name={props.name}
      className="login"
    ></input>
  );
}

export default Input;
