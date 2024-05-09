import FormField from "./Pages/FormField";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path='form' element={<FormField />}></Route>
      </Routes>
    </>
  );
}

export default App;
