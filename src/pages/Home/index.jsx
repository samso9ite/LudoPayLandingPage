import { Avatar, Button, Card, Carousel, Col, Collapse, Rate, Row, Space } from "antd"
import LandingPageLayout from "../../layout"
import bannerBG from "../../assets/images/bannerBg.svg"
import bannerImg from "../../assets/images/bannerImg.svg"
import metreIcon from "../../assets/images/metre.svg"
import qrIcon from "../../assets/images/qr.svg"
import receivePaymentImg from "../../assets/images/receivePayment.svg"
import receiveQR from "../../assets/images/receiveQR.svg"
import withdrawImg from "../../assets/images/withdraw.svg"
import getPaidImg from "../../assets/images/getPaid.svg"
import getPaidLImg from "../../assets/images/getPaidLImg.svg"
import getPaidRImg from "../../assets/images/getPaidBgR.svg"
import map from "../../assets/images/map.svg"
import withdrawIcon from "../../assets/images/withdrawIcon.svg"
import securityIcon from "../../assets/images/security.svg"
import supportIcon from "../../assets/images/supportIcon.svg"
import faqBtn from "../../assets/images/faqBtn.svg"
import processBg from "../../assets/images/processBg.svg"
import mobileImg from "../../assets/images/mobileImg.svg"
import googleBtn from "../../assets/images/googleBtn.svg"
import appleBtn from "../../assets/images/appleBtn.svg"
import headerGif from "../../assets/images/headerImg.gif"
import customerSupport from "../../assets/images/customerSupport.svg"
import {ArrowRightOutlined, MailFilled} from "@ant-design/icons"
import Input from "antd/es/input/Input"
import testimonialImg from "../../assets/images/testimonialImg.svg"
import testimonialImg2 from "../../assets/images/testimonialImg2.svg"
import testimonial3 from "../../assets/images/testimonial3.svg"
import { processData, getItems, items } from "../../data"
import { style } from "./style"

const HomePage = () => {
  
    const panelStyle = {
        marginBottom: 18,
        backgroundColor:"#f4fafd",
        border: '1px solid #BDBDBD',
        borderRadius:"10px",
        padding:"0.7em"
      };
    
     
    const chunkArray = (array, chunkSize) => {
        const results = [];
        while (array.length) {
          results.push(array.splice(0, chunkSize));
        }
        return results;
      };
      const chunkedItems = chunkArray([...items], 3);
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
            <div style={{backgroundImage:`url(${processBg})`}}>
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
                  <Row  style={{paddingTop:"7em", paddingBottom:"7em"}}>
                        <Col span={14} className="txt-white" style={{...style.processCol, backgroundImage:`url(${getPaidLImg})`}} >
                            <h3 style={{fontSize:"45px", fontFamily:"BaseNeue-ExpSemiBsd", width:"70%"}}>
                                How to get paid with Ludopay
                            </h3>
                            <p  className="txt-white mt-2"  style={{width:"70%", fontSize:"22px"}}>
                                Want to receive payment using Ludopay, well heres the easy step to go about it</p>
                            <div className="mt-5">
                                {processData.map(item => (
                                    <span style={style.processPill}> <span style={style.pillCount}>{item.count}</span> {item.title}  </span>
                                ))
                                
                                }
                            </div>
                        </Col>
                        <Col span={10} style={{...style.processCol, backgroundImage:`url(${getPaidRImg})`}}>
                            <img src={getPaidImg} width={"100%"} />
                        </Col>
                    </Row>
           
            {/* Vision Section */}
            <div>
                <Row style={{margin:"8em"}}>
                    <Col span={11}>
                        <span className="pill" style={style.pill}>Our Vision</span> 
                        <p className="h2 mt-2" style={{...style.whyHeading, width:"90%", lineHeight:"50px", color:"#1c70eb"}}>
                            A world of diversity in payments
                        </p>
                        <p className="mt-2" style={{textAlign:"justify", lineHeight:"30px"}}>
                            We understand how important revenue is to the smooth running of businesses. We envision a world where businesses
                            are not tethered to any payment system or model, a world where payments can be made through diverse means
                        </p>
                    </Col>
                    <Col span={11}>
                        <img src={map} />
                    </Col>
                </Row>
          </div>

          <div style={{backgroundColor:"#F5FAFE"}}>
            <div  style={{ display:"grid", placeItems:"center", paddingBottom:"5em"}}>
                <span style={{...style.pill, color:"#1C70EB", backgroundColor:"white"}} className="mt-5"> Testimonials </span><br />
                <span style={{...style.processHeader, fontSize:"30px", marginTop:"0px"}}>
                   What our customers had to say
                </span>
                <center>
                <div className="mt-4">
                <Carousel autoplay
                    arrows
                    dotPosition="left"
                    // effect="scrolly"
                            infinite="true"
                    >
                    {chunkedItems.map((chunk, index) => (
                        <div key={index}>
                        <Row gutter={35} style={{ width:"70%", display:"flex"}}>
                            {chunk.map(item => (
                            <Col key={item.id} span={8}>
                                <Card style={{border:"1px solid #1C70EB", 
                                    backgroundColor:"transparent", height:"320px"}}>
                                        <center><Avatar src={testimonialImg} size={75} /></center>
                                        <p className="mt-1" style={{color:"#0B2253"}}>{item.name}</p>
                                        <div className="mt-1">
                                            <Rate defaultValue={3} allowClear={false} style={{color:"#1C70EB"}}/>
                                        </div>
                                    <div className="mt-1">{item.content}</div>
                                </Card>
                            </Col>
                            ))}
                        </Row>
                        </div>
                    ))}
                    </Carousel>
                </div>
                </center>
            </div>
          </div>

          <div style={{margin:"8em"}}>
            <Row style={{display:"grid", placeItems:"center"}}>
                <p style={{...style.processHeader, fontSize:"31px", fontWeight:"800", color:"#153E90"}}> Frequently Asked Questions</p>

                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <img src={faqBtn} style={{marginTop:"1em"}}/>}
                    style={{
                        marginTop:"3em",
                        width: "80%"
                    }}
                    items={getItems(panelStyle)}
                    expandIconPosition="end"
                />
            </Row>
          </div>

          <div style={{margin:"8em"}}>
            <Row style={{ backgroundColor:"#1C70EB",borderRadius:"10px"}}>
                <Col span={11} style={{paddingTop:"3.5em",paddingBottom:"3.5em", paddingLeft:"6em"}}>
                    <p className="mt-2 txt-white" style={{lineHeight:"50px", fontSize:"35px",fontWeight:"700", fontFamily:"BaseNeue-ExpSemiBsd"}}>
                        Sign up on Ludopay and get a welcome gift
                    </p>
                    <p className="mt-2 txt-white" style={{fontWeight:"600", fontFamily:"R-Regular"}}>Switch to the crypto-side of payments with Ludopay!
                        Get paid in cryptocurrency, receive the funds in your local currency. Transfer or send money to any local bank account. 
                        All on Ludopay.
                    </p>
                    <p className="mt-2 txt-white" style={{fontWeight:"600", fontFamily:"R-Regular"}}>
                        Get the app now:
                    <div className="mt-2">
                        <img src={appleBtn} /> <img src={googleBtn} />
                        </div>
                    </p>
                </Col>
                <Col span={3}>
                </Col>
                <Col span={10} style={{display:"flex",  alignItems: 'right'}}>
                    <img src={mobileImg} width={"100%"} />
                </Col>
            </Row>
               
               {/* Newsletter */}
               <div style={{margin:"8em"}}>
                    <Row style={{display:"grid", placeItems:"center"}}>
                        <span style={{...style.processHeader, fontSize:"40px"}}>
                            Want Our Latest Updates ?
                        </span>
                        <p className="mt-1" style={{color:"#0B2253"}}>Input your email to get update from us</p>
                            <Space direction="vertical" size="middle" className="mt-2">
                                <Space.Compact style={{ width: '100%' }}>
                                    <Input prefix={<MailFilled color="#183b56" />} style={{width:"35em", height:"50px"}} placeholder="Your email" />
                                    <Button type="primary" style={{height:"50px", width:"10em"}}>Submit</Button>
                                </Space.Compact>
                            </Space>
                    </Row>
               </div>
          </div>
        </LandingPageLayout>
           
        </>
    )
}

export default HomePage