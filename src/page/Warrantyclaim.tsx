import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Warrantyclaim.css';

const Warrantyclaim: FC = () => {
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
    const whenClickToWarrantycaimFrom = () => {
        navigate("/warrantyclaimfrom");
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
                    <h2 className="header-text">ขั้นตอนการเคลม</h2>
                    {/* <div className="top-logo">
                        <img src="img/โลโก้ประกันยานยนต์.jpg" alt="Logo" />
                    </div> */}
                </div>

                <div className="product-title">
                    <h1>ขั้นตอนการเคลมประกัน</h1>
                </div>

                <div className="content-section">
                    <div className="content-description">
                        <p><b>1.แจ้งบริษัทประกันภัย</b></p>
                        <ul>
                            <li>ติดต่อบริษัทประกันภัยผ่านช่องทางที่กำหนด เช่น โทรศัพท์ อีเมล หรือแอปพลิเคชัน</li>
                            <li>แจ้งเหตุการณ์ที่เกิดขึ้น พร้อมรายละเอียด</li>
                        </ul>

                        <p><b>2.เตรียมเอกสาร</b></p>
                        <ul>
                            <li>เอกสารที่ต้องใช้มักประกอบด้วย:</li>
                            <ul>
                                <li>สำเนากรมธรรม์ประกันภัย</li>
                                <li>บัตรประชาชน</li>
                                <li>ใบแจ้งความ (ถ้ามี)</li>
                                <li>หลักฐานการเกิดเหตุ เช่น รูปภาพ หรือใบรับรองแพทย์</li>
                            </ul>
                        </ul>

                        <p><b>3.ตรวจสอบและประเมินความเสียหาย</b></p>
                        <ul>
                            <li>บริษัทประกันภัยอาจส่งเจ้าหน้าที่มาตรวจสอบสถานการณ์หรือทรัพย์สินที่เสียหาย</li>
                        </ul>

                        <p><b>4.รอการอนุมัติ</b></p>
                        <ul>
                            <li>บริษัทประกันภัยจะพิจารณาว่าเหตุการณ์ที่เกิดขึ้นอยู่ในเงื่อนไขที่คุ้มครองหรือไม่</li>
                        </ul>

                        <p><b>5.รับเงินชดเชยหรือบริการ</b></p>
                        <ul>
                            <li>เมื่อการเคลมได้รับการอนุมัติ คุณจะได้รับค่าชดเชยตามวงเงินในกรมธรรม์ หรือรับบริการซ่อมแซม</li>
                        </ul>

                        <p><b>เคล็ดลับเกี่ยวกับการเคลม</b></p>
                        <ul>
                            <li>อ่านเงื่อนไขกรมธรรม์ให้ละเอียด เพื่อทราบสิทธิ์ของตนเอง</li>
                            <li>เก็บหลักฐานที่เกี่ยวข้อง เช่น รูปภาพหรือใบเสร็จ</li>
                            <li>แจ้งเหตุทันทีที่เกิดเหตุการณ์ เพื่อให้กระบวนการดำเนินไปได้เร็ว</li>
                        </ul>

                        <button onClick={whenClickToWarrantycaimFrom}>ฟอร์มแจ้งเคลม</button>
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

export default Warrantyclaim;