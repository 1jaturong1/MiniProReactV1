import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Miscellaneous.css';

const Miscellaneous: FC = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page refresh
        setIsSubmitting(true);
        alert("ฟอร์มส่งเรียบร้อย! แต่ข้อมูลจะไม่ถูกบันทึกใน State");
        setIsSubmitting(false);
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
                    <h2 className="header-text">ผลิตภัณฑ์</h2>
                    {/* <div className="top-logo">
                        <img src="img/โลโก้ประกันยานยนต์.jpg" alt="Logo" />
                    </div> */}
                </div>

                <div className="header">
                    <h2>ประกันภัยเบ็ดเตล็ด</h2>
                </div>

                <div className="main-section">
                    <div className="section-title">
                        <h3>ประกันภัยเบ็ดเตล็ด (Miscellaneous Insurance)</h3>
                    </div>

                    <div className="content-description">
                        <p>
                            ประกันภัยที่ครอบคลุมความเสี่ยงอื่นๆ ซึ่งไม่จัดอยู่ในหมวดหมู่หลัก เช่น อุบัติเหตุ การโจรกรรม สุขภาพ หรือความเสี่ยงเฉพาะทาง
                        </p>

                        <h4>ตัวอย่างความคุ้มครอง:</h4>
                        <ul>
                            <li><strong>ประกันภัยอุบัติเหตุส่วนบุคคล (PA Insurance):</strong> คุ้มครองค่ารักษาพยาบาล การเสียชีวิต หรือทุพพลภาพจากอุบัติเหตุ</li>
                            <li><strong>ประกันภัยการโจรกรรม:</strong> คุ้มครองความสูญหายหรือเสียหายจากการถูกขโมย</li>
                            <li><strong>ประกันภัยเงินและทรัพย์สิน (Money Insurance):</strong> คุ้มครองเงินสดและทรัพย์สินในระหว่างการขนย้ายหรือจัดเก็บ</li>
                            <li><strong>ประกันสุขภาพ (Health Insurance):</strong> คุ้มครองค่ารักษาพยาบาลทั้งผู้ป่วยในและผู้ป่วยนอก</li>
                            <li><strong>ประกันภัยความรับผิด (Liability Insurance):</strong> คุ้มครองความรับผิดชอบทางกฎหมายต่อความเสียหายที่เกิดกับบุคคลอื่น</li>
                        </ul>

                        <h4>ประโยชน์:</h4>
                        <ul>
                            <li>ให้ความคุ้มครองเฉพาะตามความต้องการของผู้ทำประกัน</li>
                            <li>ช่วยจัดการความเสี่ยงในสถานการณ์ที่หลากหลาย</li>
                        </ul>
                    </div>

                    {/* Form Section */}
                    <div className="form-section">
                        <h4>แบบสอบถามข้อมูล / ข้อเสนอแนะ</h4>
                        <br/>
                        <form onSubmit={handleSubmit}>
                            <div className="input-field">
                                <label htmlFor="topic">เรื่อง:</label>
                                <select id="topic" name="topic" required>
                                    <option value="">-- กรุณาเลือก --</option>
                                    <option value="insurance_car">สนใจทำประกันภัยรถยนต์</option>
                                    <option value="insurance_other">สนใจทำประกันภัยอื่นๆ</option>
                                    <option value="claim_car">สินไหมรถยนต์</option>
                                    <option value="claim_general">สินไหมทั่วไป</option>
                                    <option value="complaint">ร้องเรียน</option>
                                    <option value="suggestion">ข้อเสนอแนะ</option>
                                </select>
                            </div>

                            <div className="input-field">
                                <label htmlFor="message">ข้อความ:</label>
                                <textarea id="message" name="message" rows={5} required></textarea>
                            </div>

                            <div className="input-field">
                                <label htmlFor="name">ชื่อ:</label>
                                <input type="text" id="name" name="name" required />
                            </div>

                            <div className="input-field">
                                <label htmlFor="email">อีเมล:</label>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <button type="submit" className="submit-button" disabled={isSubmitting}>ส่งข้อมูล</button>
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

export default Miscellaneous;