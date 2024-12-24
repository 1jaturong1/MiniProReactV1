import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Login: FC = () => {
    const navigate = useNavigate();

    const whenClickToHome = () => {
        navigate("/home");
    }

    return <>
        <h2 style={{ textAlign: "center" , backgroundColor : "#e40dad", padding: "10px" ,borderRadius:"16px" }}>CAR INURANCE INSURANCE</h2>

        
            <div className="MID">
                <div className="MID-img">
                    <img src="img/โลโก้ประกันยานยนต์.jpg" width='450' height='auto' alt="image left"  />
                    
                    <div className="MID-box-login">
                        

                        <div style={{ textAlign: "center", padding: "10px"}}>
                           

                            <button onClick={whenClickToHome}>เข้าสู่ไซต์ </button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='footer' style={{ textAlign: "center",background:"#e29acb"}}>
                
                    <h2 >CAR INURANCE INSURANCE จัดทำโดย นายจตุรงค์ ผาสุข</h2>
                    <p>เพื่อการศึกษาระหว่างฝึกงานอยู่ ไอโออิ กรุงเทพ ประกันภัย (มหาชน)</p>
                
            </div>

       
        {/* <h1 style={{ textAlign: "center" }} >Login </h1>
            <div>
                <div className="imgcontainer">
                    <img src="Insurance.png" alt="image left" width='auto' height='500' className="avatar"></img>
                </div>


                <div className="container">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname"></input>

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw"></input>

                    <button onClick={whenClick}>Login</button>
                </div>

                <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot<a href="#">password</a></span>
                </div>
            </div>  */}

        {/* <h2 style={{ textAlign: "center" }}>Login Form</h2>

        <div>
            <div className="imgcontainer">
                <img src="http://dev-abis-x.aioibkkins.co.th/ABIS-X-Logo.svg" alt="Avatar" className="avatar"></img>
            </div>

            <div className="container">
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname"></input>

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw"></input>

                <button onClick={whenClick}>Login</button>
            </div>

            <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </div> */}
    </>
}

export default Login;