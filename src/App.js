import React from "react";

import { About, Contact, Footer, Header, Services } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Services />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
