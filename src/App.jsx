import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Navigation from '../src/components/Navbar/Navigation';
import IsPrivate from './components/IsPrivate/IsPrivate';
import IsAnon from './components/IsAnon/IsAnon';
import Sell from './pages/Products/Sell';
import Products from './pages/Products/Products';
import ProductDetail from './pages/Products/ProductDetail';
import MyList from './pages/MyItems/mylist';
import ProductEditParentComponent from './pages/Products/ProductEditParentComponent';
import ProfileEdit from './pages/ProfilePage/ProfileEdit';
import NotFound from './slices/NotFound';
import Orders from './pages/Products/Orders';
import ComingSoon from './slices/ComingSoon';
import AboutMe from './pages/About/AboutMe';
import Footer from './components/Footer/Footer'
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />

        <Route
          path="/profile/:userId"
          element={
            <IsPrivate>
              {' '}
              <ProfilePage />{' '}
            </IsPrivate>
          }
        />
        <Route
          path="/profile/:userId/edit"
          element={
            <IsPrivate>
              {' '}
              <ProfileEdit />{' '}
            </IsPrivate>
          }
        />

        <Route
          path="/messages"
          element={
            <IsPrivate>
              <ComingSoon />
            </IsPrivate>
          }
        />
        <Route
          path="/favorites"
          element={
            <IsPrivate>
              <ComingSoon />
            </IsPrivate>
          }
        />
        <Route
          path="/follow"
          element={
            <IsPrivate>
              <ComingSoon />
            </IsPrivate>
          }
        />

        <Route
          path="/product/new"
          element={
            <IsPrivate>
              <Sell />
            </IsPrivate>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route
          path="/product/detail/:productId"
          element={
            <IsPrivate>
              <ProductDetail />
            </IsPrivate>
          }
        />
        <Route
          path="/mylist"
          element={
            <IsPrivate>
              <MyList />
            </IsPrivate>
          }
        />
        <Route
          path="/product/:productId/edit"
          element={
            <IsPrivate>
              <ProductEditParentComponent />
            </IsPrivate>
          }
        />

        <Route path="/orders" element={<Orders />} />

        <Route path="/aboutme" element={<AboutMe />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
