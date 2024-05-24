import { Col, Row, Space } from "antd"
import footerLogo from "../../assets/images/footerLogo.svg"
import {PhoneOutlined, ClockCircleOutlined, MailOutlined,
    LinkedinFilled, FacebookFilled, InstagramFilled, XOutlined } from "@ant-design/icons"

const FooterComp = () => {

    const style = {
        icons: {
            color:"#00c4f5", 
            paddingRight:"10px", 
            fontSize:"24px"   
        },
        text: {
            fontSize:"18px"
        }
    }
    const currentYear = new Date().getFullYear();

    return(
        <>
        <Row style={{margin:"3em", paddingBottom:"3em"}}>
            <Col span={11}>
                <img src={footerLogo} />
                <p className="txt-white mt-2" style={{lineHeight:"30px", width:"80%"}}>
                        Ludopay is a financial technology company that’s passionate about revolutionizing 
                        how crypto payments work within Africa, for Africans
                </p>
            </Col>
            <Col span={4}>
                <h5 style={{fontSize:"20px", color:"white", fontFamily:" R-Regular"}}>Our Products</h5>
                <p className="mt-4 txt-white" style={style.text}>Exchanges</p>
            </Col>
            <Col span={3}>
                <h5 style={{fontSize:"20px", color:"white", fontFamily:" R-Regular"}}>Pages</h5>
                <p className="mt-4 txt-white" style={style.text}>Features</p>
                <p className="mt-1 txt-white" style={style.text}>Services</p>
                <p className="mt-1 txt-white" style={style.text}>FAQs</p>
            </Col>

            <Col span={4}>
                <h5 style={{fontSize:"20px", color:"white", fontFamily:" R-Regular"}}>Contact</h5>
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
            <Col span={11} className="txt-white">
                <span>Privacy & Terms </span> <span style={{paddingLeft:"2em"}}>Contact Us</span>
            </Col>
            <Col span={9} className="txt-white">
                Ludopay - Copyright @ {currentYear}
            </Col>
            <Col span={4} className="txt-white" style={{display:"flex", justifyContent:"flex-end"}}>
              <span>  <Space size={7}> <LinkedinFilled /> <FacebookFilled /> <InstagramFilled /> <XOutlined /></Space></span>
            </Col>
        </Row>
        </>
    )
}

export default FooterComp