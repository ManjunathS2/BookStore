import { useContext } from "react";
import Signup from "./Components/Signup";
import Courses from "./Course/Courses";
import Home from "./Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/authProvider";
import About from "./Components/About";

function App() {
  const [authUser, setauthUser] = useAuth();
  console.log(authUser);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Course"
          element={authUser ?<Courses/>:<Navigate to= "/signup" />}/>
        <Route path="/Signup" element={<Signup />} />
        <Route path ="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
