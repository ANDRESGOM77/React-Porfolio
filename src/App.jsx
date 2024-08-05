import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "./common/ThemeContext.jsx";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
