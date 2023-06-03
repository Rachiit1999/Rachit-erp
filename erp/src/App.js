import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { Form } from "./components/Form";

function App() {


  return (
    <BrowserRouter >
      <Form/>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
        <Route/>
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
