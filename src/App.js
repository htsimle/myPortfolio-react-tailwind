import Navbar from "./components/navbar";
import Home from "./components/home";
import Sidebar from "./components/sidebar";
import About from "./components/about";
import Project from "./components/project";
import Experience from "./components/experience";
import Contact from "./components/contact";
export default function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Home />
      <About/>
      <Project/>
      <Experience/>
      <Contact/>
    </div>
  );
}
