import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Cam from './components/cam/Cam';
import Camera from './components/spec_cam/Camera';
import AddCam from './components/add/AddCam';
import Bug from './components/bug/Bug';
import Alerts from './components/alerts/Alerts';
import Auth from './components/auth/Auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Header /> */}
      {/* <Alerts /> */}
      {/* <Auth /> */}
      {/* <AddCam /> */}
      {/* <Cam /> */}
      {/* <Bug /> */}
      {/* <Camera /> */}
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path='/' />
          <Route element={<Alerts />} path='/alerts' />
          <Route element={<Auth />} path='/auth' />
          <Route element={<AddCam />} path='/add-cam' />
          <Route element={<Cam />} path='/cam' />
          <Route element={<Bug />} path='/bug-report' />
          <Route element={<Camera />} path="/cam/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
