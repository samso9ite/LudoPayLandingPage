import {MailFilled} from "@ant-design/icons"
import { Button, Space, Input, Row, Col } from "antd";
import { useMediaQuery } from 'react-responsive';
import { style } from "../../pages/Home/style";
import mobileImg from "../../assets/images/mobileImg.svg"
import googleBtn from "../../assets/images/googleBtn.svg"
import appleBtn from "../../assets/images/appleBtn.svg"

const SignupComp = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return(
        <Row style={{ backgroundColor:"#1C70EB", borderRadius:"10px", }}>
                <Col xl={11} md={11} sm={24} style={{paddingTop:"3.5em", paddingBottom:"3.5em",
                     paddingLeft:"6em", ...(isMobile ? {paddingRight:"2em", paddingLeft:"2em"} : {}) }}>
                    <p className="mt-2 txt-white" style={{...style.signUp.txt, ...(isMobile ? { fontSize:"25px", 
                        lineHeight:"1.3em", 
                        textAlign:"center", 
                        width: isMobile ? "100%" : "72%", 
                        margin:"0px auto"} : {}), }}>
                        Sign up on Ludopay and get a welcome gift
                    </p>
                    <p className="mt-2 txt-white" style={{fontWeight:"600", fontFamily:"R-Regular", ...(isMobile ? {fontSize:"19px", textAlign:"center", lineHeight:"1.4em"} : {})}}>
                        Switch to the crypto-side of payments with Ludopay!
                        Get paid in cryptocurrency, receive the funds in your local currency. Transfer or send money to any local bank account. 
                        All on Ludopay.
                    </p>
                    <p className="mt-2 txt-white" style={{fontWeight:"600", fontFamily:"R-Regular", ...(isMobile ? {textAlign:"center", fontSize:"20px"} : {})}}>
                        Get the app now:
                    <div className="mt-2" style={isMobile ? {placeItems:"center", marginTop:"1.4em"} : {}}>
                        <img src={appleBtn} style={isMobile ? {width:"45%"} : {}} /> <img src={googleBtn} style={isMobile ? {width:"45%"} : {}}/>
                    </div>
                    </p>
                </Col>
                <Col span={3}>
                </Col>
                <Col
                    xl={10}
                    md={10}
                    sm={24}
                    style={{
                        display: "flex",
                        justifyContent: isMobile ? "center" : "flex-end",
                        alignItems: "center",
                    }}
                >
                    <img src={mobileImg} width="70%" />
                </Col>

            </Row>
    )
}

export default SignupComp