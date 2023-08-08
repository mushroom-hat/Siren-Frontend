import './App.css';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import MissingPage from "./pages/Missing";
import HomePage from "./pages/Home";
import Unauthorized from './pages/Unauthorized';
import AdminPage from './pages/Admin';
import RequireAuth from './components/RequireAuth';
import PersistLogin from './components/PersistLogin';

const ROLES = {
  'Admin' : 1,
  'Alumni' : 2,
  'User': 3
}

// #F0F5F6
// #9495B1
// #7473D3
// #777C7C
function App() {
  console.log("remember to change axios.js")
  console.log(process.env.REACT_APP_API_BASE_URL)
  return (
    // <div className="min-h-full bg-gray-100 h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    // <div className="max-w-md w-full space-y-8">
    <div className="overscroll-none overflow-hidden min-h-full bg-gray-100">
    <Routes>
      <Route element={<PersistLogin/>}>
      {/* public routes */}
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/unauthorized" element={<Unauthorized/>} />
    
      {/* private routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]}/>}>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/files" element={<HomePage/>} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]}/>}>
          <Route path="/admin" element={<AdminPage/>} />
        </Route>
      </Route>

      {/* catch all routes */}
      <Route path="*" element={<MissingPage />} />

    </Routes>
  </div>
  // </div>
  );
}

export default App;
