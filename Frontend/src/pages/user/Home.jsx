import React from 'react';
import Header from '../../components/user/Header';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <>
      <Header/>
        <div style={{display:"flex", alignItems:"center"}}>
          <div><img src="https://img.freepik.com/free-vector/flat-design-international-day-democracy-background-with-voting_23-2148607147.jpg?t=st=1734262261~exp=1734265861~hmac=cc0cf503b0bb16fd2d2157a546600db8cc8e1183ab7c121176dc0620de449e58&w=740" alt="voting" style={{width:"75%",borderRadius:"5px"}} /></div>
          <div style={{textAlign:"center",margin:"auto"}}>
            <p className='subTitle' style={{fontSize:"32px"}}>Be A Part Of Decision</p>
            <h1 className='title'  style={{fontSize:"40px"}}>VOTE NOW</h1>
            <div>
            <Link to="/signup"><button style={{backgroundColor:"black",color:"white",padding:"10px 20px",outline:"none",border:"0px"}}>Signup</button></Link>
            <button style={{backgroundColor:"green",color:"white",padding:"10px 20px",outline:"none",border:"0px"}}> Contact Us</button>
          </div>
          </div>

          
        </div>
       
      </>
    );
}

export default Home;
