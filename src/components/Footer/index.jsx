import { Col, Row, Space } from "antd"
import footerLogo from "../../assets/images/footerLogo.svg"
import {PhoneOutlined, ClockCircleOutlined, MailOutlined,
    LinkedinFilled, FacebookFilled, InstagramFilled, XOutlined } from "@ant-design/icons"
import { useMediaQuery } from 'react-responsive';

const FooterComp = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
   

    const style = {
        icons: {
            color:"#00c4f5", 
            paddingRight: isMobile ? "20px" : "10px", 
            fontSize: isMobile ? "50px" : "24px"   
        },
        text: {
            fontSize: isMobile ? '40px' : "18px",
            width: isMobile && "100%"
        }
    }
    const currentYear = new Date().getFullYear();

    
    return(
        <>
        <Row style={{margin:"3em", paddingBottom:"3em"}}>
            <Col xl={11} md={11} sm={24}>
                <img src={footerLogo} width={isMobile && "50%"}/>
                <p className="txt-white mt-2" style={{lineHeight:"30px", width: isMobile ? "90%" : "80%", 
                    ...(isMobile ? {fontSize:'45px', lineHeight:"1.3em"} : '') }}>
                        Ludopay is a financial technology company that’s passionate about revolutionizing 
                        how crypto payments work within Africa, for Africans
                </p>
            </Col>
            <Col xl={4} md={4} sm={24} style={isMobile ? {width:"100%"} : ''}>
                <h5 style={{fontSize: "20px", color:"white", fontFamily:" R-Regular", 
                    ...(isMobile ?{fontSize:"45px", marginTop:"1.5em",} : "")}}>Our Products
                </h5>
                <p className="mt-4 txt-white" style={style.text}>Exchanges</p>
            </Col>
            <Col xl={3} md={3} sm={24} style={isMobile ? {width:"100%"} : ''}>
                <h5 style={{fontSize:"20px", color:"white", fontFamily:" R-Regular",
                     ...(isMobile ?{fontSize:"45px", marginTop:"1.5em",} : "")
                }}>Pages</h5>
                <p className="mt-4 txt-white" style={style.text}>Features</p>
                <p className="mt-1 txt-white" style={style.text}>Services</p>
                <p className="mt-1 txt-white" style={style.text}>FAQs</p>
            </Col>

            <Col xl={4} md={4} sm={24} style={isMobile ? {width:"100%"} : ''}>
                <h5 style={{fontSize:"20px", color:"white", fontFamily:" R-Regular",
                     ...(isMobile ?{fontSize:"45px", marginTop:"1.5em",} : "")
                }}>Contact</h5>
                <p className="mt-4 txt-white"> 
                    <PhoneOutlined rotate={90} style={style.icons} /> <span style={style.text}>(234) 8112417073 </span>
                </p>
                <p className="mt-1 txt-white">
                    <ClockCircleOutlined style={style.icons} /> <span style={style.text}> Mon - Fri: 9am - 11pm </span>
                </p>
                <p className="mt-1 txt-white">
                    <MailOutlined style={style.icons} /> <span style={style.text}> support@ludopay.ng</span>
                </p>
            </Col>
            
        </Row>
        <hr style={{border:"0.1px solid #3b4f74"}}/>
        <Row className="mt-4" style={{marginLeft:"3em", marginRight:"3em"}}>
            <Col span={11} className="txt-white" style={isMobile ? {fontSize:"43px"} : {}}>
                <span>Privacy & Terms </span> <span style={{paddingLeft:"2em"}}>Contact Us</span>
            </Col>
            <Col span={9} className="txt-white" style={isMobile ? {fontSize:"43px"} : {}}>
               Copyright @ {currentYear}
            </Col>
            <Col span={4} className="txt-white" style={{display:"flex", justifyContent:"flex-end", fontSize: isMobile ? "43px" : ''}}>
              <span>  <Space size={7}> <LinkedinFilled /> <FacebookFilled /> <InstagramFilled /> <XOutlined /></Space></span>
            </Col>
        </Row>
        </>
    )
}

export default FooterComp