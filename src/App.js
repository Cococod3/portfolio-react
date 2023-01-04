import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import LoginForm from "./components/LoginForm";
import Button from "./components/Button";
import SocialMedia from "./components/SocialMedia";

function App() {
  const [logged, setIsLogged] = useState(false);
  // const [title, setTitle] = useState(false);

  const handleLogin = (isLogged) => setIsLogged(isLogged);
  // const handleTitle = () => {
  //   setTitle.document.title = "Hello World!";
  // };
  return (
    <div className="App">
      <Title logged={logged} />
      <LoginForm onHandleLogin={handleLogin} logged={logged} />
      <Button
        onClick={() => {
          document.title = "Hello World!";
        }}
      >
        Hello World
      </Button>
      <SocialMedia></SocialMedia>
    </div>
  );
}

export default App;
