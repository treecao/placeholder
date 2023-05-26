import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonials";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}



// import Navigation from "./Components/Navigation";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import "./App.scss"


// setting the header in footer in the components file for my dynamic editing
// function App() {
//   return (
//     <div>
//       <Navigation />
//       {/* <Header /> */}
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default App;