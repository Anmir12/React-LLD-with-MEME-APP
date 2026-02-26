import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter, Routes,Route } from 'react-router'
import About from "./components/About";
import Testing from "./components/Testing";
import ProtectedRoute from "./components/ProtectedRoute";
import { LangProvider } from "./Context/LangContext";

const App = () => {
  return (
    <LangProvider>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Body />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/testing" element={<Testing />}></Route>
            </Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </LangProvider>
  );
};

export default App;
