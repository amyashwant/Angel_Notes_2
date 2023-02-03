import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";


function App() {
  // const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setTimeout(() => {
     
    }, 3000);
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is Personal Notes Website" />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              />
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/About" element={<About />} />
              <Route
                exact
                path="/login"
                element={<Login showAlert={showAlert} />}
              />
              {/* <Route
                exact
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              /> */}
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
