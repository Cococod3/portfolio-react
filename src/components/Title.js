import "./Title.css";
function Title(props) {
  return <h1>{(!props.logged && 'Not logged') || 'Logged in'}</h1>;
}

export default Title;
