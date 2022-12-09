import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Navigation from "../src/pages/HomePage/Navigation";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import Sell from "./pages/Products/Sell"
import Products from "./pages/Products/Products"
import ProductDetail from "./pages/Products/ProductDetail";
import MyList from "./pages/ProfilePage/MyList";
import ProductEdit from "./pages/Products/ProductEdit";

function App() {


  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<IsPrivate> <ProfilePage /> </IsPrivate>} />
        <Route path="/messages" element={<IsPrivate><ProfilePage /></IsPrivate>} />
        <Route path="/favorites" element={<IsPrivate><ProfilePage /></IsPrivate>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path="/product/new" element={<IsPrivate><Sell /></IsPrivate>} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/detail/:productId" element={<IsPrivate><ProductDetail /></IsPrivate>} />
        <Route path="/mylist" element={<IsPrivate> <MyList /> </IsPrivate>} />
        <Route path="/product/:productId/edit" element={<IsPrivate><ProductEdit /></IsPrivate>} />

      </Routes>
    </div>
  );
}

export default App;
