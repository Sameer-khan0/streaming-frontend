import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import LandingScreen from "./Screens/LandingScreen";
import Navbar from "./Components/Navbar";
import ProfileBox from "./Components/ProfileBox";
import HomeScreen from "./Screens/HomeScreen";
import AuthScreen from "./Screens/AuthScreen";

function App() {
  const user = {
    name: "John Doe",
    facebookApi: "https://facebook.com/your-facebook-page",
    youtubeApi: "https://youtube.com/channel/your-channel-id",
    twitterApi: "https://twitter.com/your-twitter-handle",
  };

  return (
    <>
      <Router>
        <div className="flex justify-center">
          <div className="container">
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingScreen />} />
              <Route path="/authentication" element={<AuthScreen />} />
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/profile" element={<ProfileBox user={user} />} />
            </Routes>
          </div>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
