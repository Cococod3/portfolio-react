import Button from "./Button";
import { useState } from "react";
import Input from "./Input";
import "./LoginForm.css";

function LoginForm(props) {
  const [userData, setUserData] = useState({
    username: "",
    userpass: "-1",
  });
  const [error, setError] = useState(null);

  const data = {
    username: "a@gmail.com",
    userpass: "1234",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    if (
      userData.username == data.username &&
      userData.userpass == data.userpass
    ) {
      props.onHandleLogin(true);
      setError(null);
    } else {
      props.onHandleLogin(false);
      if (userData.username.trim() == "" || userData.userpass.trim() == "") {
        setError("Please fill in all fields");
      } else {
        setError("Incorrect user or password");
      }
    }
  };
  const handleChange = (e) => {
    let value = e.target.value;
    let inputName = e.target.name;

    setUserData((prevState) => {
      return {
        ...prevState,
        [inputName]: e.target.value,
      };
    });
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="error-message">{error !== null && <p>{error}</p>}</div>
      <Input onHandleChange={handleChange} type="email" name="username" />
      <Input onHandleChange={handleChange} type="password" name="userpass" />
      <Button>{(!props.logged && "Login") || "Log out"}</Button>
    </form>
  );
}

export default LoginForm;
