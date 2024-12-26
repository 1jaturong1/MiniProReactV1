import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "../Home.css";

const Home: FC = () => {
  const navigate = useNavigate();

  const whenClick = () => navigate("/login");
  const whenClickToMotor = () => navigate("/motor");
  const whenClickToFire = () => navigate("/fire");
  const whenClickToMiscellaneous = () => navigate("/miscellaneous");
  const whenClickToTransportation = () => navigate("/transportation");
  const whenClickToClaim = () => navigate("/claim");
  const whenClickToHome = () => navigate("/home");
  const whenClickToSuggestions = () => navigate("/suggestions");

  return (
    <>
      <div className="home-container">
        {/* Header */}
        <div className="sidebar">
                <div className="logo">
                    <img src="img/โลโก้ประกันยานยนต์.jpg" alt="Logo" />
                    {/* <h3>CAR INSURANCE</h3> */}
                </div>
                <div className="nav-items">
                    <button className="nav-item" onClick={whenClickToHome}>ผลิตภัณฑ์</button>
                    <button className="nav-item" onClick={whenClickToClaim}>เคลม</button>
                    <button className="nav-item" onClick={whenClickToSuggestions}>เสนอแนะ</button>
                    <button className="nav-item" onClick={whenClick}>Logout</button>
                </div>
            </div>

        

        {/* Main Content */}
        <main className="home-main">
        <div className="top-header">
                    <h2 className="header-text">ผลิตภัณฑ์</h2>
                    <div className="top-logo">
                        {/* <img src="img/โลโก้ประกันยานยนต์.jpg" alt="Logo" /> */}
                    </div>
                </div>
          <div className="products-grid">
            <div className="product-card">
              <h3>ประกันภัยรถยนต์</h3>
              <img src="img/motor.png" alt="Motor Insurance" />
              <p>ให้ความคุ้มครองเกี่ยวกับรถยนต์และอุบัติเหตุ</p>
              <button className="btn-primary" onClick={whenClickToMotor}>
                รายละเอียด
              </button>
            </div>
            <div className="product-card">
              <h3>ประกันทรัพย์สิน</h3>
              <img src="img/fire.png" alt="Property Insurance" />
              <p>คุ้มครองทรัพย์สินจากภัยธรรมชาติและอุบัติเหตุ</p>
              <button className="btn-primary" onClick={whenClickToFire}>
                รายละเอียด
              </button>
            </div>
            <div className="product-card">
              <h3>ประกันภัยสินค้าทางทะเลและขนส่ง</h3>
              <img src="img/transportation.png" alt="Marine Insurance" />
              <p>คุ้มครองสินค้าระหว่างการขนส่ง</p>
              <button
                className="btn-primary"
                onClick={whenClickToTransportation}
              >
                รายละเอียด
              </button>
            </div>
            <div className="product-card">
              <h3>ประกันภัยเบ็ดเตล็ด</h3>
              <img src="img/miscellaneous.png" alt="Miscellaneous Insurance" />
              <p>ครอบคลุมความเสี่ยงอื่นๆ</p>
              <button
                className="btn-primary"
                onClick={whenClickToMiscellaneous}
              >
                รายละเอียด
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="home-footer">
          <p>CAR INSURANCE SYSTEM จัดทำโดย นายจตุรงค์ ผาสุข</p>
          <p>เพื่อการศึกษาระหว่างฝึกงาน ไอโออิ กรุงเทพ ประกันภัย (มหาชน)</p>
        </footer>
      </div>
    </>
  );
};

export default Home;