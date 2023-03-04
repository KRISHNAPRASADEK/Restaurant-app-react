import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import RestaurantView from "./components/RestaurantView";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-restaurant/:id" element={<RestaurantView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
