import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Dashboard from "./components/dashboards/Dashboard.js";
import Charts from "./components/Charts.js";
import Tables from "./components/Tables.js";
import Buttons from "./components/buttons/Buttons.js";
import Cards from "./components/buttons/Cards.js";
import Color from "./components/utilities/Color.js";
import Border from "./components/utilities/Border.js";
import Animation from "./components/utilities/Animation.js";
import Other from "./components/utilities/Other.js";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ForgotPassword from "./components/ForgotPassword";
import Error404 from "./components/Error404";
import BlankPage from "./components/BlankPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/" element={<MainPage />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/components/buttons" element={<Buttons />} />
            <Route path="/components/cards" element={<Cards />} />
            <Route path="/utilities/color" element={<Color />} />
            <Route path="/utilities/border" element={<Border />} />
            <Route path="/utilities/animation" element={<Animation />} />
            <Route path="/utilities/other" element={<Other />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="/blankpage" element={<BlankPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;