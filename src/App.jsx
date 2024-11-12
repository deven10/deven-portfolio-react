import "./App.css";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main className="container mx-auto">
      <Header />
      <Intro />
      <hr className="divider" />
      <Skills />
      <Projects />
      <Contact />
      <hr className="divider mb-10" />
      <Header />
      <Toaster />
    </main>
  );
}

export default App;
