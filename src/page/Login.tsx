import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login.css';

const Login: FC = () => {
  const navigate = useNavigate();

  const whenClickToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="crypto-container">
        {/* Header */}
        <header className="crypto-header">
          <div className="crypto-header-content">
            <h1>CAR INSURANCE SYSTEM</h1>
            <p>พันธมิตรประกันภัยที่คุณไว้วางใจ</p>
          </div>
        </header>

        {/* Main Section */}
        <main className="crypto-main">
          <div className="crypto-grid">
            {/* Feature Section 1 */}
            <div className="crypto-feature">
              <img
                src="img/โลโก้ประกันยานยนต์.jpg"
                alt="Insurance Logo"
                className="crypto-feature-img"
              />
              <h2>Welcome to the Insurance</h2>
              <p>
                สัมผัสประสบการณ์บริการประกันภัยที่ราบรื่นและปลอดภัยซึ่งปรับแต่งให้ตรงกับความต้องการของคุณ.
              </p>
              <button className="btn-primary" onClick={whenClickToHome}>
                เข้าสู่เว็บไซต์
              </button>
            </div>

            {/* Feature Section 2
            <div className="crypto-feature">
              <img
                src="img/feature-1.jpg"
                alt="Feature 1"
                className="crypto-feature-img"
              />
              <h2>บริการครบวงจร</h2>
              <p>
                เราให้บริการที่ครอบคลุมทั้งการประกันภัยรถยนต์ การเคลมประกัน และการแนะนำข้อเสนอที่ดีที่สุด.
              </p>
            </div>

            {/* Feature Section 3 */}
            {/* <div className="crypto-feature">
              <img
                src="img/feature-2.jpg"
                alt="Feature 2"
                className="crypto-feature-img"
              />
              <h2>ทีมงานมืออาชีพ</h2>
              <p>
                ทีมงานของเราพร้อมให้คำแนะนำและสนับสนุนคุณตลอดทุกขั้นตอน.
              </p>
            </div>  */}
          </div>
        </main>

        {/* Footer */}
        <footer className="crypto-footer">
          <p>
            © 2024 CAR INSURANCE SYSTEM. Developed by นายจตุรงค์ ผาสุข MDT-63120501041 for
            internship at ไอโออิ กรุงเทพ ประกันภัย (มหาชน).
          </p>
        </footer>
      </div>
    </>
  );
};

export default Login;