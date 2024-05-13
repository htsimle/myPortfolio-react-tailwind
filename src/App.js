import Navbar from "./components/navbar";
import Home from "./components/home";
import Sidebar from "./components/sidebar";
import About from "./components/about";
import Project from "./components/project";
export default function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Home />
      <About/>
      <Project/>
    </div>
  );
}
