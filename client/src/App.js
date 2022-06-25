import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Front from "./components/Front";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Front />} />
          {/* <Route path="/" exact element={<Header setValue={0} />} /> */}
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
        {/* <Header setValue={0} /> */}
      </Container>
    </BrowserRouter>
  );
};

export default App;
