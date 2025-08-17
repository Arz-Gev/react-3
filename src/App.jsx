import Context from "./components/context/ContextProvider";
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import LoginForm from "./components/loginForm/LoginForm";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <Context>
      <Header />
      <main className="main">
        <Welcome />
        <LoginForm />
        <Dashboard />
      </main>
    </Context>
  );
}

export default App;
