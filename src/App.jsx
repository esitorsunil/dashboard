import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';

import Navbar from './pages/landingpage/NavBar';
import Home from './pages/landingpage/Home';
import About from './pages/landingpage/About';
import Contact from './pages/landingpage/Contact';
import Login from './pages/landingpage/Login';
import Dashboard from './pages/dashboard/Dashboard';
import RouteGuard from './components/Routeguard';
import ScrollToTop from './components/Scrolltotop';
import { Provider } from 'react-redux';
import store from './Redux/store';


import Profile from './pages/dashboard/Profile';
import Settings from './pages/dashboard/Settings';
import EditReport from './pages/dashboard/EditReport';
import AddReport from './pages/dashboard/addReport';
import Tasks from './pages/dashboard/task';
import EditTask from './pages/dashboard/Edittask';
import NotFound from './pages/landingpage/NotFound';
import SkeletonLoader from './components/ShimmerUI';
import AddUser from './pages/dashboard/addUser';

const Report = lazy(() => import('./pages/dashboard/Reports'));
const UserList = lazy(() => import('./pages/dashboard/UserList'));
const UserDetails = lazy(() => import('./pages/dashboard/UserDetails'));
const Overview = lazy(() => import('./pages/dashboard/Overview'));
const ProductAnalysis = lazy(() => import('./pages/dashboard/ProductAnalysis'));
const Messages = lazy(() => import('./pages/dashboard/Message'));


const AppRoutes = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Navbar />}
      <div className={!isDashboard ? "container mt-4" : ""}>
      <Suspense fallback={<SkeletonLoader />}>
          <Routes>
           
            {!isDashboard && (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
              </>
            )}

            <Route
              path="/dashboard"
              element={
                <RouteGuard>
                    <Dashboard /> 
                </RouteGuard>
              }
            >
              <Route index element={<Navigate to="profile" />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="reports" element={<Report />} />
              <Route path="reports/:id" element={<EditReport />} />
              <Route path="reports/add" element={<AddReport />} />
              <Route path="users/add" element={<AddUser />} />
              <Route path="users" element={<UserList />} />
              <Route path="users/:id" element={<UserDetails />} />
              <Route path="overview" element={<Overview />} />
              <Route path="product-analysis" element={<ProductAnalysis />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="tasks/:id" element={<EditTask />} />
              <Route path="messages" element={<Messages />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </Provider>
  );
}

export default App;
