import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "../Motor.css";

const Motor: FC = () => {
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
    <>
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
                            <img src="img/motor.png" width="120" alt="Fire Insurance" />
                        </div>
                        <h3>ประกันภัยรถยนต์ (Motor Insurance)</h3>
                        <p>การประกันภัยรถยนต์ คือการประกันความสูญเสียหรือเสียหายที่เกิดกับรถยนต์ รวมถึงความสูญเสียหรือเสียหายที่รถยนต์ก่อให้เกิดขึ้นแก่ชีวิตร่างกาย และทรัพย์สินของบุคคลภายนอกตลอดจนบุคคลที่โดยสารอยู่ในรถยนต์นั้นด้วย</p>

                        <h4>โดยบริษัทประกันจะชดใช้ค่าสินไหมทดแทนให้แก่ผู้เอาประกันภัยเมื่อเกิดความเสียหายขึ้นตามเงื่อนไขที่ระบุไว้ในกรมธรรม์</h4>
                        {/* <ul>
                            <li><strong>ประกันอัคคีภัย (Fire Insurance):</strong> คุ้มครองความเสียหายจากไฟไหม้ ฟ้าผ่า ระเบิด และภัยเสริมอื่นๆ</li>
                            <li><strong>ประกันภัยบ้านและที่อยู่อาศัย:</strong> คุ้มครองบ้านพักอาศัยและทรัพย์สินภายในบ้านจากความเสียหายที่ระบุไว้</li>
                            <li><strong>ประกันภัยโรงงาน/อาคารพาณิชย์:</strong> คุ้มครองทรัพย์สินในเชิงธุรกิจ</li>
                        </ul> */}

                        <h4>การประกันภัยรถยนต์ภาคสมัครใจ</h4>
                        <ul>
                            <li>การประกันภัยที่สามารถเลือกซื้อความคุ้มครองความรับผิดต่อบุคคลภายนอก ความเสียหาย/สูญหายของตัวรถคันเอาประกันภัย และการประกันอุบัติเหตุส่วนบุคคล</li>
                            {/* <li>เพิ่มความอุ่นใจในการใช้ชีวิตหรือดำเนินธุรกิจ</li> */}
                        </ul>

                        <h3>การประกันภัยรถยนต์ภาคบังคับ</h3>
                        <p>การประกันภัยภาคบังคับ หรือที่เรียกกันว่า “ประกันภัย พ.ร.บ.” คือ การทำประกันภัยตามพระราชบัญญัติคุ้มครองผู้ประสบภัยจากรถ พ.ศ. 2535</p>
                    </div>

                   
                </div>

                {/* Footer */}
                <div className="footer">
                    <h2>CAR INSURANCE จัดทำโดย นายจตุรงค์ ผาสุข</h2>
                    <p>เพื่อการศึกษาระหว่างฝึกงานอยู่ ไอโออิ กรุงเทพ ประกันภัย (มหาชน)</p>
                </div>
            </div>
      </div>
    </>
  );
};

export default Motor;