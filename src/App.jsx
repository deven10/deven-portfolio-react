import "./App.css";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Skills } from "./components/Skills";

function App() {
  return (
    <main className="container">
      <Header />
      <Intro />
      <hr className="divider" />
      <Skills />
    </main>
  );
}

export default App;
