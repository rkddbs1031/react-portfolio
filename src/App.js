import React from "react";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";
import Script from "./components/pages/Script";
import Ani from "./components/pages/Ani";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
      
    <Router>
       <Route path="/" exact component={Main} />
       <Route path="/about" exact component={About} />
       <Route path="/projects" exact component={Projects} />
       <Route path="/project" exact component={Project} />
       <Route path="/script" exact component={Script} />
       <Route path="/ani" exact component={Ani} />
       <Route path="/contact" exact component={Contact} />
     </Router>
  );
}

export default App;