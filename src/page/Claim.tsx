import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Claim.css';

const Claim: FC = () => {
    const navigate = useNavigate();

    const whenClick = () => {
        navigate("/login");
    };
    const whenClickToHome = () => {
        navigate("/home");
    };
    const whenClickToClaim = () => {
        navigate("/claim");
    };
    const whenClickToWarrantycaim = () => {
        navigate("/warrantyclaim");
    };
    const whenClickToSuggestions = () => {
        navigate("/suggestions");
    };

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
                    <h2 className="header-text">เคลม</h2>
                    {/* <div className="top-logo">
                        <img src="img/โลโก้ประกันยานยนต์.jpg" alt="Logo" />
                    </div> */}
                </div>

                <div className="product-title">
                    <h1>ประเภทของการเคลม</h1>
                </div>

                <div className="content-section">
                    <div className="content-description">
                        <p><b>1.เคลมประกันรถยนต์</b></p>
                        <ul>
                            <li>การขอค่าชดเชยสำหรับความเสียหายที่เกิดกับรถยนต์ เช่น การชน การถูกขโมย หรือความเสียหายจากภัยธรรมชาติ</li>
                            <li>ตัวอย่าง:</li>
                            <ul>
                                <li>เคลมประกันชั้น 1: คุ้มครองทั้งรถเราและคู่กรณี</li>
                                <li>เคลมประกันชั้น 3: คุ้มครองเฉพาะคู่กรณี</li>
                            </ul>
                        </ul>

                        <p><b>2.เคลมประกันสุขภาพ</b></p>
                        <ul>
                            <li>การขอชดเชยค่ารักษาพยาบาล เช่น ค่าห้อง ค่ายา หรือค่าผ่าตัด</li>
                            <li>ตัวอย่าง: ใช้บัตรประกันสุขภาพในการสำรองจ่ายค่ารักษาพยาบาล</li>
                        </ul>

                        <p><b>3.เคลมประกันชีวิต</b></p>
                        <ul>
                            <li>การขอรับเงินชดเชยในกรณีที่เกิดเหตุการณ์ตามที่ระบุในกรมธรรม์ เช่น การเสียชีวิต หรือการสูญเสียอวัยวะ</li>
                        </ul>

                        <p><b>4.เคลมประกันทรัพย์สิน</b></p>
                        <ul>
                            <li>การขอชดเชยความเสียหายต่อทรัพย์สิน เช่น บ้านที่ถูกไฟไหม้ หรือทรัพย์สินที่ถูกขโมย</li>
                        </ul>

                        <br />
                        <button onClick={whenClickToWarrantycaim}>ขั้นตอนการเคลมประกัน</button>
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

export default Claim;