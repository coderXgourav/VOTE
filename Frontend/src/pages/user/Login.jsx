import React from "react";
import Header from "../../components/user/Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Header />
      <div>
        <div style={{ }}>
            <p className="subTitle" style={{ fontSize: "32px",textAlign:"center" }}>
              Signup Now
            </p>
            <form action="" style={{textAlign:"center"}}>
              <input type="text" placeholder="Username or Email" style={{width:"50%",padding:"15px",marginTop:"10px",borderRadius:"5px",outline:"none",border:"0px"}}/>
              <input type="text" placeholder="Password" style={{width:"50%",padding:"15px",marginTop:"10px",borderRadius:"5px",outline:"none",border:"0px"}}/>
          <div> <br />
          <button style={{padding:"10px 50px",backgroundColor:"white",color:"black",border:"0px",outline:"none",borderRadius:"5px" }}>Login</button>
          </div>

            </form>
        </div>
      </div>
    </>
  );
};

export default Login;
