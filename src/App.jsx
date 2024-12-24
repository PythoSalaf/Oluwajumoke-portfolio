import { Footer, Navbar } from "./Components";
import {
  About,
  Contact,
  Home,
  Projects,
  Services,
  Testimonial,
} from "./Sections";

function App() {
  return (
    <div className="flex flex-col relative min-h-screen">
      <div className="w-full fixed z-40">
        <Navbar />
      </div>
      <div className="flex-grow pt-[4rem]">
        <Home />
        <About />
        <Services />
        <Projects />
        <Testimonial />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
