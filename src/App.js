import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Welcome from "./pages/welcomePage/Welcome";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register /> }/>
      </Routes>
    </div>
  );
}

export default App;
