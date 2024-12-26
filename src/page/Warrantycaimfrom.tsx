import { FC, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../WarrantycaimFrom.css';

const WarrantycaimFrom: FC = () => {
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

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("ข้อมูลการเคลมถูกส่งเรียบร้อย!");
        if (formRef.current) {
            formRef.current.reset();
        }
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
                    <h2 className="header-text">การเคลม</h2>
                </div>

                <div className="form-section">
                    <div className="form-container">
                        <h2 className="form-title">ฟอร์มแจ้งเคลม</h2>
                        <form ref={formRef} onSubmit={handleSubmit} className="claim-form">
                            {/* Claim Type */}
                            <div className="form-group">
                                <label htmlFor="claimType">ประเภทของการเคลม:</label>
                                <select id="claimType" name="claimType" required>
                                    <option value="">-- กรุณาเลือก --</option>
                                    <option value="vehicle">เคลมประกันรถยนต์</option>
                                    <option value="health">เคลมประกันสุขภาพ</option>
                                    <option value="life">เคลมประกันชีวิต</option>
                                    <option value="property">เคลมประกันทรัพย์สิน</option>
                                    <option value="other">อื่น ๆ</option>
                                </select>
                            </div>

                            {/* Claim Details */}
                            <div className="form-group">
                                <label htmlFor="details">รายละเอียด:</label>
                                <textarea id="details" name="details" rows={5} required placeholder="อธิบายเหตุการณ์หรือความเสียหาย"></textarea>
                            </div>

                            {/* Name */}
                            <div className="form-group">
                                <label htmlFor="name">ชื่อผู้แจ้ง:</label>
                                <input type="text" id="name" name="name" required placeholder="ชื่อของคุณ" />
                            </div>

                            {/* Phone */}
                            <div className="form-group">
                                <label htmlFor="phone">เบอร์โทรศัพท์:</label>
                                <input type="tel" id="phone" name="phone" required placeholder="เบอร์โทรศัพท์ของคุณ" />
                            </div>

                            {/* Email */}
                            <div className="form-group">
                                <label htmlFor="email">อีเมล:</label>
                                <input type="email" id="email" name="email" required placeholder="อีเมลของคุณ" />
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="submit-button">
                                ส่งข้อมูล
                            </button>
                        </form>
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

export default WarrantycaimFrom;