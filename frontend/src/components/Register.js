import React, {useState} from "react";
import styles from './Reg.module.css';
import RegImg from './img/Register.svg';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();

   const [user, setUser] = useState({
       name:"", email: "", password: "", conpassword: ""
   });
   
   let name, value;
   const handleInputs = (e) =>{
       console.log(e);
       name = e.target.name;
       value = e.target.value;

       setUser({ ...user, [name]:value});
   }

   const sendData = async (e) => {
          e.preventDefault();

          const {name, email, password, conpassword} = user;
          const res = await fetch("/register", {
              method: "POST",
              headers:{
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                name, email, password, conpassword
              })
          });

          const data = await res.json();
           if(data.error){
             window.alert("Registration Failed!");
           }else{
            window.alert("Registration Successful!");
            navigate("/Login");
           }

   }

    return (
        <div>
          <div className={styles.container}>
            <div className="forms-box">
              <div className="login-register">
                <form method="POST" className="register">
                  <h2 className="title">Register</h2>
                  <div className="input-field">
                    <i className="fa fa-user" aria-hidden="true" />
                    <input name="name" type="text" autoComplete="off" placeholder="Name" required value={user.name} onChange={handleInputs}/>
                  </div>
                  <div className="input-field">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <input name="email" type="email" autoComplete="off" placeholder="Email" required value={user.email} onChange={handleInputs}/>
                  </div>
                  <div className="input-field">
                    <i className="fa fa-key" aria-hidden="true" />
                    <input name="password" type="text" autoComplete="off" placeholder="Password" required value={user.password} onChange={handleInputs}/>
                  </div>
                  <div className="input-field">
                    <i className="fa fa-key" aria-hidden="true" />
                    <input name="conpassword" type="text" autoComplete="off" placeholder="Confirm Password" required value={user.conpassword} onChange={handleInputs}/>
                  </div>
                  <input type="submit" className="btn" defaultValue="Register" onClick={sendData}/>
                  <p className="social-text">Or you can join with</p>
                  <div className="social-media">
                    <a href="/" className="social-icon">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fa fa-google" aria-hidden="true" />
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="panel">
            <div className="panel_right">
              <div className="content">
                <h3>Welcome Back :)</h3>
                <p>
                  Glad to see you again!
                </p>
                <a href="/"><button className="btn transparent" id="signin_btn" >Sign In</button></a>
              </div>
              <img src={RegImg} alt="" className="image" />
            </div>
          </div>
        </div>
      );
}

export default Register;