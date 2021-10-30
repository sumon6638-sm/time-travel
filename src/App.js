import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "tailwindcss/tailwind.css"
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import AuthProvider from './context/AuthProvider';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Booking from './pages/Booking/Booking';
import Contact from './pages/Contact/Contact';
import Guides from './pages/Guide/Guides';
import Home from './pages/Home/Home/Home';
import Allpackages from './pages/Home/Home/TourPackage/AllPackage/Allpackages';
import Login from './pages/Logins/Login/Login';
import PrivateRoute from './pages/Logins/PrivateRoute/PrivateRoute';
import HillTours from './pages/TourPackage/HillTours/HillTours';
import OceanTours from './pages/TourPackage/OceanTours/OceanTours';


function App() {
  return (
    <div className="">
      
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path= '/'>
              <Home></Home>
            </Route>

            <Route exact path='/home'>
              <Home></Home>
            </Route>

            <Route exact path='/login'>
              <Login></Login>
            </Route>

            <Route exact path='/tourpackage'>
              <Allpackages></Allpackages>
            </Route>

            <PrivateRoute exact path = '/tourpackage/:booking'>
              <Booking></Booking>
            </PrivateRoute>

            <Route exact path='/hilltours'>
              <HillTours></HillTours>
            </Route>

            <Route exact path='/oceantours'>
              <OceanTours></OceanTours>
            </Route>

            <Route exact path='/blogs'>
              <Blogs></Blogs>
            </Route>

            <Route exact path='/guide'>
              <Guides></Guides>
            </Route>

            <Route exact path='/about'>
              <About></About>
            </Route>

            <Route exact path='/contact'>
              <Contact></Contact>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;