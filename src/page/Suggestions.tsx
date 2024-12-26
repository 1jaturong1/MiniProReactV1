import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Suggestions.css';

const Suggestions: FC = () => {
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
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("ฟอร์มส่งเรียบร้อย! แต่ข้อมูลจะไม่ถูกบันทึกใน State");
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
                    <h2 className="header-text">เสนอแนะ</h2>
                </div>

                <div className="form-section">
                    <div className="form-container">
                        <h2 className="form-title"> ข้อเสนอแนะ</h2>
                        <form onSubmit={handleSubmit} className="suggestion-form">
                            {/* Topic Field */}
                            <div className="form-group">
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

                            {/* Message Field */}
                            <div className="form-group">
                                <label htmlFor="message">ข้อความ:</label>
                                <textarea id="message" name="message" rows={5} required placeholder="กรุณาใส่ข้อความของคุณ"></textarea>
                            </div>

                            {/* Name Field */}
                            <div className="form-group">
                                <label htmlFor="name">ชื่อ:</label>
                                <input type="text" id="name" name="name" required placeholder="ชื่อของคุณ" />
                            </div>

                            {/* Email Field */}
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

export default Suggestions;