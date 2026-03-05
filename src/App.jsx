import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter, Routes,Route } from 'react-router'
import About from "./components/About";
import Testing from "./components/Testing";
import ProtectedRoute from "./components/ProtectedRoute";
import { LangProvider } from "./Context/LangContext";
import ImageSlider from "./components/ImageSlider";
import Comments from "./components/Comments";
import { COMMENT_DATA } from "./utils/constants";
import PaginationUI from "./components/Pagination/PaginationUI";

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
            <Route path="/images" element={<ImageSlider />}></Route>
            <Route path="/comments" element={<Comments comments={COMMENT_DATA} />}></Route>
            <Route path="/pagination" element={<PaginationUI />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </LangProvider>
  );
};

export default App;
