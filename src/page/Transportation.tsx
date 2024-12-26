import { FC  } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Transportation.css';

const Transportation: FC = () => {
    const navigate = useNavigate();

    const whenClick = () => {
        navigate("/login");
    }
    const whenClickToHome = () => {
        navigate("/home");
    }
    const whenClickToClaim = () => {
        navigate("/claim");
    }
    const whenClickToSuggestions = () => {
        navigate("/suggestions");
    }

    return (
        <div className="container">
            {/* Sidebar */}
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
            <div className="main-content">
                <div className="top-header">
                    <h2 className="header-text">ผลิตภัณฑ์</h2>
                    {/* <div className="top-logo">
                        <img src="img/โลโก้ประกันยานยนต์.jpg" alt="Logo" />
                    </div> */}
                </div>

                <div className="product-title">
                    <h2>ประกันภัยสินค้าทางทะเลและขนส่ง</h2>
                </div>

                <div className="content-section">
                    <div className="content-description">
                        <div className="image-center">
                            <img src="img/transportation.png" width="120" alt="Transportation Insurance" />
                        </div>
                        <h4>ประกันภัยสินค้าทางทะเลและขนส่ง (Marine and Cargo Insurance)</h4>
                        <br/>
                        <p>ประกันภัยสินค้าทางทะเลและขนส่ง:<br />
                            สินค้าทุกชนิดที่นำเข้าหรือส่งออก ไม่ว่าจะโดยทางทะเลหรือทางอากาศ สามารถทำประกันภัยได้ เช่น สินค้าประเภทเครื่องจักร สิ่งทอ เสื้อผ้าสำเร็จรูป เครื่องหนัง ของเด็กเล่น เครื่องไฟฟ้า อาหารทะเลแช่แข็ง อาหารกระป๋อง โลหะภัณฑ์ อุปกรณ์อิเล็กทรอนิกต่าง ๆ เป็นต้น
                        </p>

                        <h3>พร้อมให้บริการด้วยความใส่ใจ</h3>
                        <p>ออกกรมธรรม์รวดเร็วทันใจภายใน 1 วัน</p>

                        <h3>ประกันภัยขนส่งระหว่างประเทศ</h3>
                        <button className="insurance-btn">ใบคำขอเอาประกันภัย</button><br /><br />

                        <h3>ประกันภัยขนส่งภายในประเทศ</h3>
                        <button className="insurance-btn">ใบคำขอเอาประกันภัย</button><br /><br />

                        <h3>ประกันภัยความรับผิดชอบ</h3>
                        <button className="insurance-btn">ใบคำขอเอาประกันภัย</button><br /><br />
                    </div>
                </div>

                {/* Footer */}
                <div className="footer">
                    <h2>CAR INSURANCE จัดทำโดย นายจตุรงค์ ผาสุข</h2>
                    <p>เพื่อการศึกษาระหว่างฝึกงานอยู่ ไอโออิ กรุงเทพ ประกันภัย (มหาชน)</p>
                </div>
            </div>
        </div>
    );
}

export default Transportation;