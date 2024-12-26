import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Fire.css';

const Fire: FC = () => {
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

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('ข้อมูลที่กรอก: ' + JSON.stringify(formData, null, 2));
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
                    <div className="top-logo">
                        {/* <img src="img/โลโก้ประกันยานยนต์.jpg" alt="Logo" /> */}
                    </div>
                </div>

                <div className="product-title">
                    <h1>ประกันทรัพย์สิน</h1>
                </div>

                <div className="content-section">
                    <div className="content-description">
                        <div className="image-center">
                            <img src="img/fire.png" width="120" alt="Fire Insurance" />
                        </div>
                        <h3>ประกันทรัพย์สิน (Property Insurance)</h3>
                        <p>ให้ความคุ้มครองทรัพย์สินต่างๆ เช่น บ้าน อาคาร โรงงาน หรือสิ่งของต่างๆ จากความเสียหายที่เกิดจากไฟไหม้ น้ำท่วม ภัยธรรมชาติ การโจรกรรม หรืออุบัติเหตุอื่นๆ</p>

                        <h4>ประเภทหลัก:</h4>
                        <ul>
                            <li><strong>ประกันอัคคีภัย (Fire Insurance):</strong> คุ้มครองความเสียหายจากไฟไหม้ ฟ้าผ่า ระเบิด และภัยเสริมอื่นๆ</li>
                            <li><strong>ประกันภัยบ้านและที่อยู่อาศัย:</strong> คุ้มครองบ้านพักอาศัยและทรัพย์สินภายในบ้านจากความเสียหายที่ระบุไว้</li>
                            <li><strong>ประกันภัยโรงงาน/อาคารพาณิชย์:</strong> คุ้มครองทรัพย์สินในเชิงธุรกิจ</li>
                        </ul>

                        <h4>ประโยชน์:</h4>
                        <ul>
                            <li>ช่วยลดความเสี่ยงจากความสูญเสียทรัพย์สินมูลค่าสูง</li>
                            <li>เพิ่มความอุ่นใจในการใช้ชีวิตหรือดำเนินธุรกิจ</li>
                        </ul>

                        <h3>ทำประกันบ้าน ประกันอัคคีภัย ที่ CAR INSURANCE</h3>
                        <p>บ้านคือทรัพย์สินหลักของความมั่งคั่งของเรา การทำประกันเพื่อปกป้องบ้านและทรัพย์สินจึงมีความสำคัญอย่างยิ่ง เพื่อช่วยบรรเทาความสูญเสียจากภัยต่างๆ</p>
                    </div>

                    {/* Form Section */}
                    <div className="form-section">
                        <h3>เช็คเบี้ยประกันบ้าน ประกันอัคคีภัย</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="input-field">
                                <label htmlFor="name">ชื่อ:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="กรอกชื่อ"
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="email">อีเมล:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="กรอกอีเมล"
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="phone">เบอร์โทรศัพท์:</label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="กรอกเบอร์โทรศัพท์"
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="address">ที่อยู่:</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="กรอกที่อยู่"
                                />
                            </div>
                            <button type="submit">ส่งข้อมูล</button>
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

export default Fire;