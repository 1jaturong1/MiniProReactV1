import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';


const Miscellaneous: FC = () => {

    const navigate = useNavigate();

    const whenClick = () => {
        navigate("/login");
    }
    const whenClickToHome = () => {
        navigate("/home");
    }
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
            <div className="content" style={{ position: "absolute" }}>
                <div className="top-text" >

                    <img src='img/miscellaneous.png' width='120' />
                    <h3>ประกันภัยเบ็ดเตล็ด (Miscellaneous Insurance)</h3>
                    <div>
                        <h2>ความหมาย:</h2>
                        <p>
                            ประกันภัยที่ครอบคลุมความเสี่ยงอื่นๆ ซึ่งไม่จัดอยู่ในหมวดหมู่หลัก เช่น อุบัติเหตุ การโจรกรรม สุขภาพ หรือความเสี่ยงเฉพาะทาง
                        </p>

                        <h2>ตัวอย่างความคุ้มครอง:</h2>
                        <ul>
                            <li><strong>ประกันภัยอุบัติเหตุส่วนบุคคล (PA Insurance):</strong> คุ้มครองค่ารักษาพยาบาล การเสียชีวิต หรือทุพพลภาพจากอุบัติเหตุ</li>
                            <li><strong>ประกันภัยการโจรกรรม:</strong> คุ้มครองความสูญหายหรือเสียหายจากการถูกขโมย</li>
                            <li><strong>ประกันภัยเงินและทรัพย์สิน (Money Insurance):</strong> คุ้มครองเงินสดและทรัพย์สินในระหว่างการขนย้ายหรือจัดเก็บ</li>
                            <li><strong>ประกันสุขภาพ (Health Insurance):</strong> คุ้มครองค่ารักษาพยาบาลทั้งผู้ป่วยในและผู้ป่วยนอก</li>
                            <li><strong>ประกันภัยความรับผิด (Liability Insurance):</strong> คุ้มครองความรับผิดชอบทางกฎหมายต่อความเสียหายที่เกิดกับบุคคลอื่น</li>
                        </ul>

                        <h2>ประโยชน์:</h2>
                        <ul>
                            <li>ให้ความคุ้มครองเฉพาะตามความต้องการของผู้ทำประกัน</li>
                            <li>ช่วยจัดการความเสี่ยงในสถานการณ์ที่หลากหลาย</li>
                        </ul>
                        <div className='footer' style={{ textAlign: "center",background:"#e29acb" }}>

                            <h2 >CAR INURANCE INSURANCE จัดทำโดย นายจตุรงค์ ผาสุข</h2>
                            <p>เพื่อการศึกษาระหว่างฝึกงานอยู่ ไอโออิ กรุงเทพ ประกันภัย (มหาชน)</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>












}
export default Miscellaneous;