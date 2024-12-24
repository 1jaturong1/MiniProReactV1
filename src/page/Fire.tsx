import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import React, { useState } from 'react';


const Fire: FC = () => {

    const navigate = useNavigate();

    const whenClick = () => {
        navigate("/login");
    }
    const whenClickToHome = () => {
        navigate("/home");
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

    return <>

        <div className="box">
            <div className='top-header'>
                <h2 className='TOP-text' style={{ textAlign: "center" }}  >CAR INURANCE INSURANCE</h2>
                <div className='top-logo'>
                    <img src='img/โลโก้ประกันยานยนต์.jpg' alt='Logo' />
                </div>
                <div className="logout">
                    <button onClick={whenClick}>Logout</button>
                </div>
            </div>
            <div style={{ marginTop: "130px" }}>
                <button onClick={whenClickToHome}>ผลิตภัณฑ์</button>
            </div>
            <div style={{ textAlign: "center", background: "#e29acb", height: "50px" }}><h1>ผลิตภัณฑ์</h1></div>
            <div className="content" >
                <div className="top-text" >

                    <img src='img/fire.png' alt="Logo"
                        width={100}
                        style={{
                            float: "left", // ใช้ float สำหรับจัดตำแหน่งซ้าย
                            paddingRight: "0px",
                            marginRight: "8px",
                        }} />
                    <h3>ประกันทรัพย์สิน (Property Insurance)</h3>
                    <div>
                        <h2>ความหมาย:</h2>
                        <p>
                            ให้ความคุ้มครองทรัพย์สินต่างๆ เช่น บ้าน อาคาร โรงงาน หรือสิ่งของต่างๆ
                            จากความเสียหายที่เกิดจากไฟไหม้ น้ำท่วม ภัยธรรมชาติ การโจรกรรม หรืออุบัติเหตุอื่นๆ
                        </p>

                        <h2>ประเภทหลัก:</h2>
                        <ul>
                            <li><strong>ประกันอัคคีภัย (Fire Insurance):</strong> คุ้มครองความเสียหายจากไฟไหม้ ฟ้าผ่า ระเบิด และภัยเสริมอื่นๆ</li>
                            <li><strong>ประกันภัยบ้านและที่อยู่อาศัย:</strong> คุ้มครองบ้านพักอาศัยและทรัพย์สินภายในบ้านจากความเสียหายที่ระบุไว้</li>
                            <li><strong>ประกันภัยโรงงาน/อาคารพาณิชย์:</strong> คุ้มครองทรัพย์สินในเชิงธุรกิจ</li>
                        </ul>

                        <h2>ประโยชน์:</h2>
                        <ul>
                            <li>ช่วยลดความเสี่ยงจากความสูญเสียทรัพย์สินมูลค่าสูง</li>
                            <li>เพิ่มความอุ่นใจในการใช้ชีวิตหรือดำเนินธุรกิจ</li>
                        </ul>
                        <h3>ประกันบ้าน ประกันอัคคีภัย สำหรับที่อยู่อาศัย</h3>
                        <h2>ทำประกันบ้าน ประกันอัคคีภัย ที่ CAR INURANCE INSURANCE รับส่วนลดพิเศษ เช็คราคา สั่งซื้อออนไลน์ได้เลย!</h2>
                        <p>
                            บ้านคือวิมาน -- นอกจากนี้ยังเป็นทรัพย์สินหลักของความมั่งคั่งของเรา การทำประกันเพื่อปกป้องบ้านและทรัพย์สินจึงมีความสำคัญอย่างยิ่ง เพื่อช่วยบรรเทาความสูญเสียจากภัยต่างๆ
                        </p>
                        <li><strong>ประกันบ้าน</strong>/<strong>ประกันอัคคีภัย</strong>ทุกแพกเกจมีความคุ้มครองพื้นฐาน ได้แก่ ไฟไหม้ ฟ้าผ่า และภัยระเบิดจากก๊าซหุงต้มภายในบ้าน โดยจะแตกต่างออกไปในส่วนของความคุ้มครองเพิ่มเติมอื่นๆ ที่อาจจัดพ่วงมาในแพกเกจด้วย เช่น ภัยธรรมชาติ ภัยน้ำท่วม โจรกรรม ความรับผิดต่อบุคคลภายนอก เป็นต้น</li>

                    </div>
                </div>
            </div>
            <div style={{ maxWidth: '650px', margin: '20px auto', padding: '20px solid green ', border: '20px solid #e29acb', borderRadius: "16px" }}>
                <h3>เช็คเบี้ยประกันบ้าน ประกันอัคคีภัย จากบริษัทชั้นนำ กรอกแบบฟอร์มข้างล่าง</h3>
                <h2>กรอกข้อมูลลูกค้า</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="name">ชื่อ:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ width: '97%', padding: '8px', margin: '5px 0' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="email">อีเมล:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ width: '97%', padding: '8px', margin: '5px 0' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="phone">เบอร์โทรศัพท์:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            style={{ width: '97%', padding: '8px', margin: '5px 0' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="address">ที่อยู่:</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            style={{ width: '97%', padding: '8px', margin: '5px 0' }}
                        />
                    </div>
                    <button type="submit" style={{ padding: '10px 20px', background: '#e40dad', color: '#fff', border: 'none', cursor: 'pointer' }}>
                        ส่งข้อมูล
                    </button>
                </form>

            </div>
            <div className='footer' style={{ textAlign: "center", background: "#e29acb" }}>

                <h2 >CAR INURANCE INSURANCE จัดทำโดย นายจตุรงค์ ผาสุข</h2>
                <p>เพื่อการศึกษาระหว่างฝึกงานอยู่ ไอโออิ กรุงเทพ ประกันภัย (มหาชน)</p>

            </div>
        </div>

    </>
}













export default Fire;