import { Badge, Button, Col, Row, Space } from "antd"
import LandingPageLayout from "../../layout"
import bannerBG from "../../assets/images/bannerBg.svg"
import bannerImg from "../../assets/images/bannerImg.svg"
import metreIcon from "../../assets/images/metre.svg"
import qrIcon from "../../assets/images/qr.svg"
import receivePaymentImg from "../../assets/images/receivePayment.svg"
import receiveQR from "../../assets/images/receiveQR.svg"
import withdrawImg from "../../assets/images/withdraw.svg"
import getPaidImg from "../../assets/images/getPaid.svg"
import withdrawIcon from "../../assets/images/withdrawIcon.svg"
import securityIcon from "../../assets/images/security.svg"
import supportIcon from "../../assets/images/supportIcon.svg"
import customerSupport from "../../assets/images/customerSupport.svg"
import {ArrowRightOutlined} from "@ant-design/icons"

const HomePage = () => {
    const style = {
        heroHeader: {
            fontFamily: "BaseNeue-SemiBold",
            fontSize:"65px",
            width:"95%",
            lineHeight:"70px"
        },
        primaryBtn: {
            backgroundColor:"#1C70EB", 
            color:"white", 
            border:"none"
        },
        pill: {
            padding:"10px 30px", 
            background:"#eaf3fd", 
            color:"#163e90", 
            borderRadius:"20px", 
            fontSize:"19px"
        },
        hero: {
            backgroundImage:`url(${bannerBG})`,
            backgroundSize:"cover", 
            backgroundPosition:"center", 
            backgroundRepeat:"no-repeat", 
            paddingTop:"5em", 
            paddingBottom:"5em"
        },
        offerHeading: {
            fontSize:"23px", 
            fontWeight:"800"
        },
        whyHeading: {
            width:"50%", 
            fontWeight:"800", 
            color:"#163e90", 
            lineHeight:"1.4"
        },
        btnSpacing: {
            height:"3.5em",
            paddingLeft:"3em", 
            paddingRight:"3em", 
            marginTop:"3em",
            fontWeight:"600"
        },
        processHeader: {
            fontSize: "40px",
            fontWeight: "400",
            lineHeight: "54px",
            textAlign: "left",
            fontFamily:"R-Regular",
            marginTop:"0.6em",
            color:"#0B2253"
        },
        processText: {
            fontFamily: "R-Light",
            fontSize: "22px",
            lineHeight: "32px",
            textAlign: "left",
            color:"#909090"

        }
    }
    return(
        <>
        <LandingPageLayout>
          <Row style={style.hero}>
            <Col span={13} style={{padding:"8em", color:"white"}}>
                <h1 style={{...style.heroHeader}}>
                    Switch to the crypto-side of Payments
                </h1>
                <p className="mt-2" style={{width:"85%", color:"white", fontSize:"22px", fontWeight:"800"}}>
                    Give your customers a better and more secured payment option. 
                    Get paid in crypto, receive the payments as fiat money. It’s fast and easy.
                </p>
                <Button size="large" style={{...style.primaryBtn, ...style.btnSpacing}}>Get Started <ArrowRightOutlined color="white" width={"50"} /></Button>
            </Col>
            <Col span={8}>
                <img src={bannerImg} />
            </Col>
          </Row>

          {/* Our Offer Section */}
          <div >
          <Row style={{margin:"8em"}}>
            <Col span={11}>
                <span className="pill" style={style.pill}>Our Offer</span> 
                <div className="mt-2" style={{width:"90%"}}>
                <span className="h1" style={{color:"#4d4d4d"}}>
                    Experience the future of<span style={{color:"#1c70eb"}}> digital payments</span>
                </span>
                </div>
            </Col>
            <Col span={11}>
                <Space direction="vertical">
                    <Space size={45}>
                        <img src={metreIcon} /> 
                        <div>
                            <p style={{...style.offerHeading}}>Better and faster payment alternative</p>
                            <p className="mt-1 sm">Quickly receive & withdraw funds to your local bank account. No delays, No hassles.</p>
                        </div>
                    </Space>
                    <Space size={50} className="mt-4">
                        <img src={qrIcon} style={{paddingLeft:"10px"}}/> 
                        <div>
                            <p style={{...style.offerHeading}}>Easy and direct process</p>
                            <p className="mt-1 sm">Our QR scan-and-pay model makes payment very easy for your patrons.</p>
                        </div>
                    </Space>

                    <Space size={50} className="mt-4">
                        <img src={securityIcon} style={{paddingLeft:"10px"}}/> 
                        <div>
                            <p style={{...style.offerHeading}}>Security & anonymity</p>
                            <p className="mt-1 sm">Enjoy our hi-tech security features that keeps your account and money safe and secure.</p>
                        </div>
                    </Space>

                </Space>
            </Col>
          </Row>
          </div>
        
         {/* Why Choose Ludopay */}
          <div style={{display:"grid", placeItems:"center"}}>
                <span style={{...style.pill}}> Why choose Ludopay? </span>
                    <p className="h2 mt-2" style={{...style.whyHeading}}>
                        <center> <span style={{color:"#1c70eb"}}>Exploring new </span> possibilities in payments for Africans</center>
                    </p>
                    <p className="mt-2" style={{width:"60%", textAlign:"center", lineHeight:"2"}}>
                        We believe that using the Ludopay platform will bring great ease to how businesses can receive 
                        payments for their products and services, hence exposing more businesses to possibilities that 
                        lies in how payments can be made in Africa. 
                    </p>
                    <Button style={{...style.primaryBtn, ...style.btnSpacing}}>Get Started</Button>
            </div>

            {/* Process Section */}
            <div>
                <div style={{margin:"8em"}}>
                    <Row >
                        <Col span={12}>
                            <img src={receivePaymentImg} />
                        </Col>
                        <Col span={11}>
                            <img src={receiveQR} />
                            <div style={{...style.processHeader}}>
                                Get to receive payments in BTC, USDT, DOGE and a host of other cryptocurrencies.
                            </div>
                            <p style={style.processText} className="mt-2"> Enjoy our platform as we support multiple payment 
                                cryptocurrency options all on Ludopay
                            </p>
                            <Button style={{...style.primaryBtn, ...style.btnSpacing}}>Get Started</Button>
                        </Col>
                    </Row>

                    <Row className="mt-l">
                        <Col span={11}>
                            <div style={{width:"95%"}}>
                                <img src={withdrawIcon} />
                                <div style={{...style.processHeader}}>
                                Send / withdraw your money to any local bank account of your choice.
                                </div>
                                <p style={style.processText} className="mt-2"> Easitly get to use our platform to receive crypto
                                payments from your vendor and send out payment to any bank of your choice. This is fast 
                                and seamless 
                                </p>
                            
                                <Button style={{...style.primaryBtn, ...style.btnSpacing}}>Get Started</Button>
                            </div>
                        </Col>
                        <Col span={12}>
                            <img src={withdrawImg} />
                        </Col>
                    </Row>

                    <Row className="mt-l">
                        <Col span={12}>
                            <img src={customerSupport} />
                        </Col>
                        <Col span={11}>
                            <img src={supportIcon} />
                            <div style={{...style.processHeader}}>
                                Get help when you need it with Ludopay’s customer support. 
                            </div>
                            <p style={style.processText} className="mt-2"> 
                                Reach out to us via email, hotline or chat. Our customer supports are available round the clock, 24/7   
                            </p>
                            <Button style={{...style.primaryBtn, ...style.btnSpacing}}>Get Started</Button>
                        </Col>
                    </Row>
                </div>
            </div>
         
            {/* How to get Paid with LudoPay */}
            <div style={{backgroundColor:"#0b2253"}}>
                <Row style={{margin:"8em"}}>
                    <Col span={11}>
                        <h3 className="" style={{color:"#fff", fontSize:"40px", fontFamily:""}}>
                            How to get paid with Ludopay
                        </h3>
                    </Col>
                    <Col span={11}>
                        <img src={getPaidImg} width={"80%"} />
                    </Col>
                </Row>
            </div>
        </LandingPageLayout>
           
        </>
    )
}

export default HomePage