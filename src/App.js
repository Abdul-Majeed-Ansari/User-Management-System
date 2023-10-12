import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loginpage from "./Components/Pages/Loginpage";
import Homepage from "./Components/Pages/Homepage";
import Userslist from "./Components/Pages/Userslist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/profile" element={<Homepage />} />
        <Route path="/users" element={<Userslist />} />
      </Routes>
    </>
  );
}

export default App;
