import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "tailwindcss/tailwind.css"
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import AuthProvider from './context/AuthProvider';
import About from './pages/About/About';
import AdminDashboard from './pages/Admin/AdminDashBoard/AdminDashBoard';
import ManageOrders from './pages/Admin/ManageOrder/ManageOrders';
import ManagePackage from './pages/Admin/ManagePackage/ManagePackage';
import UpdateAction from './pages/Admin/Update/UpdateAction';
import UpdatePackage from './pages/Admin/Update/UpdatePackage';
import Blogs from './pages/Blogs/Blogs';
import Booking from './pages/Booking/Booking';
import MyOrder from './pages/Booking/MyOrder';
import Contact from './pages/Contact/Contact';
import Guides from './pages/Guide/Guides';
import Home from './pages/Home/Home/Home';
import Allpackages from './pages/Home/Home/TourPackage/AllPackage/Allpackages';
import Login from './pages/Logins/Login/Login';
import PrivateRoute from './pages/Logins/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
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

            <PrivateRoute exact path='/admin'>
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>

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

            <Route exact path='/tourpackage/update/:id'>
              <UpdatePackage></UpdatePackage>
            </Route>

            <PrivateRoute exact path='/myOrders'>
              <MyOrder></MyOrder>
            </PrivateRoute>

            <Route exact path="/action/update/:id">
              <UpdateAction></UpdateAction>
            </Route>

            <Route exact path='/blogs'>
              <Blogs></Blogs>
            </Route>

            <Route exact path='/guide'>
              <Guides></Guides>
            </Route>

            <PrivateRoute exact path='/manageOrder'>
              <ManageOrders></ManageOrders>
            </PrivateRoute>

            <PrivateRoute exact path='/managePackage'>
              <ManagePackage></ManagePackage>
            </PrivateRoute>

            <Route exact path='/about'>
              <About></About>
            </Route>

            <Route exact path='/contact'>
              <Contact></Contact>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;