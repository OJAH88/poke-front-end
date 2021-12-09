// import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Feed from "./components/feed/Feed"
import Topbar from "./components/topbar/Topbar"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react'
import React, { useHistory, useParams } from "react-router"
// import useFetch from "./useFetch"



function App() {
// const {error, isLoading, data} = useFetch('http://localhost:3000/', {withCredentials: true})
const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
  <BrowserRouter>
    <div className="App">
      <Topbar user={user} setUser={setUser} />
      <main>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/me" element={<Profile />} />
        </Routes>
        </div>
        </main>
        </div>
  </BrowserRouter>
  )}

export default App;
