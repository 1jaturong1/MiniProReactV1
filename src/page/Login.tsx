import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Login: FC = () => {
    const navigate = useNavigate();

    const whenClick = () => {
        navigate("/home");
    }

    return <>
        <h2 style={{ textAlign: "center" , backgroundColor : "#e40dad", padding: "10px" ,borderRadius:"16px" }}>CAR INURANCE INSURANCE</h2>

        <form action="/action_page.php" method="post">
            <div className="MID">
                <div className="MID-img"style={{ textAlign: "center" }}>
                    <img src="โลโก้ประกันยานยนต์.jpg" width='450' height='auto' alt="image left"  />
                    <div className="MID-box-login">
                        <div className="MID-login-toppic">
                            <h2 style={{ textAlign: "center" , backgroundColor : "#e8c6dd", padding: "10px" ,borderRadius:"16px" }}>Login</h2>
                        </div>

                        <div >
                            <div className="boxlogin">
                                <label htmlFor="username" >User Id</label>
                                {/* <img src="profile.png" width='60' height='60' /> */}
                                <input type="text" id="username" name="username" placeholder="Enter your username" required />
                            </div>
                            <div className="bigboxlogin">
                                <label htmlFor="password">Password</label>
                                {/* <img src="password.png" width='60' height='60' /> */}
                                <input type="password"  id="password" name="password" placeholder="Enter your password" required />
                            </div>

                            <button onClick={whenClick}>Login </button>
                        </div>
                        <a href="" className="register-link">Create account now</a>
                    </div>
                </div>
            </div>

        </form>
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