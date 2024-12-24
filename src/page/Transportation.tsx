import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';


const Transportation: FC = () => {

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
            <div className="content" >
                <div className="top-text" >

                    <img src='img/transportation.png' width='120' />
                    <h3>ประกันภัยสินค้าทางทะเลและขนส่ง (Marine and Cargo Insurance)</h3>
                    <p>ประกันภัยสินค้าทางทะเลและขนส่ง:<br />
                        สินค้าทุกชนิดที่นำเข้าหรือส่งออก ไม่ว่าจะโดยทางทะเลหรือทางอากาศ สามารถทำประกันภัยได้ เช่น สินค้าประเภทเครื่องจักร สิ่งทอ เสื้อผ้าสำเร็จรูป เครื่องหนัง ของเด็กเล่น เครื่องไฟฟ้า อาหารทะเลแช่แข็ง อาหารกระป๋อง โลหะภัณฑ์ อุปกรณอิเล็กทรอนิคต่าง ๆ เป็นต้น
                        <br />

                        <h3>พร้อมให้บริการด้วยความใส่ใจ</h3>
                        ออกกรมธรรม์รวดเร็วทันใจภายใน 1</p><br />
                        
                    <h3>ประกันภัยขนส่งระหว่างประเทศ</h3>
                    
                    <button>ใบคำขอเอาประกันภัย</button><br /><br />

                    <h3>ประกันภัยขนส่งภายประเทศ</h3>
                    
                    <button>ใบคำขอเอาประกันภัย</button><br /><br />

                    <h3>ประกันภัยความรับผิดชอบ</h3>
                    
                    <button>ใบคำขอเอาประกันภัย</button><br /><br />
                    

                   

                </div> 
                <div className='footer' style={{ textAlign: "center",background:"#e29acb" }}>

                        <h2 >CAR INURANCE INSURANCE จัดทำโดย นายจตุรงค์ ผาสุข</h2>
                        <p>เพื่อการศึกษาระหว่างฝึกงานอยู่ ไอโออิ กรุงเทพ ประกันภัย (มหาชน)</p>

                </div>
            </div>
        </div>
    </>












}
export default Transportation;