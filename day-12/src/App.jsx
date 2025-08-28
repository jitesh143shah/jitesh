import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import FunctionCom from "./component/FunctionCom";
import Home from "./component/Home";
import ProductData from "./component/ProductData";
import FormSubmit from "./hook/FormSubmit";
import UseEffect from "./hook/UseEffect";
import ClassCom from "./component/ClassCom";
import PageNotFound from "./component/PageNotFound";
import Redux from "./component/Redux";
// import Usestate from "./hook/Usestate";

function App() {
  return (
    <>
      {/* <Usestate /> */}
      {/* <FormSubmit /> */}
      {/* <UseEffect /> */}
      {/* <ProductData /> */}
      <Routes>
        {/* <Route path="/" element={<Home />}> */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/function" element={<FunctionCom />} />
          <Route path="/class" element={<ClassCom name="clouds" />} />
          <Route path="*" element={<PageNotFound />} /> */}
          <Route path="/" element={<Redux />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
