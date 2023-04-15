import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login_page";
import DashContainer from "./pages/Dashboard_page";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboardpage" element={<DashContainer />} />
      </Routes>
    </div>
  );
}

export default App;
