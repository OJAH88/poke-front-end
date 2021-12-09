import "./register.css"
import { useState } from "react"
import React, { useParams } from "react-router"
import useFetch from "../../useFetch"
import { useNavigate } from "react-router-dom"; 


const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();  
    const newUser = { username, email, password, passwordAgain}

const handleSubmit = (e) => {
    e.preventDefault()
    setErrors([])
    setIsLoading(true);
    setTimeout(() => {
        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        }).then(() => {
            console.log("New User Added")
            console.log(newUser)
            setIsLoading(false)
            navigate('/');
        })
    },600)}


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Pokebook</h3>
          <span className="loginDesc">
            Connect with like minded individuals and poke'em!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Username"
                className="loginInput"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />{" "}
              <br />
              <input
                placeholder="Email"
                className="loginInput"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />{" "}
              <br />
              <input
                placeholder="Password"
                className="loginInput"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
              <br />
              <input
                placeholder="Confirm Password"
                className="loginInput"
                type="password"
                required
                value={passwordAgain}
                onChange={(e) => setPasswordAgain(e.target.value)}
              />{" "}
              <br />
              <button className="loginButton">Sign Up</button><br />
              <button className="loginRegisterButton">Log into Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
