import "./App.css";
import UserForm from "./components/userForm.tsx";
import imagen from "./images/logop.png";
import logoLetras from "./images/logopletras.png";

function App() {
  return (
    <div className="App">
      <div>
        <img
          src={imagen}
          alt="Descripción"
          className="logo-psi , elemento-rotativo"
        />
        <img src={logoLetras} alt="Descripción" className="letras-psi " />
      </div>
      <UserForm className="userForm "></UserForm>
    </div>
  );
}

export default App;
