import { Avatar, Button, Card, Carousel, Col, Collapse, Rate, Row, Space } from "antd"
import LandingPageLayout from "../../layout"
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
import customerSupport from "../../assets/images/customerSupport.svg"
import {ArrowRightOutlined, MailFilled} from "@ant-design/icons"
import Input from "antd/es/input/Input"
import testimonialImg from "../../assets/images/testimonialImg.svg"
import { processData, getItems, items } from "../../data"
import { style } from "./style"
import styled from 'styled-components';
import { useEffect, useState } from "react"
import { useMediaQuery } from 'react-responsive';


const HomePage = () => {
 const isMobile = useMediaQuery({ maxWidth: 767 });
    
    const panelStyle = {
        marginBottom: 18,
        backgroundColor:"#f4fafd",
        border: '1px solid #BDBDBD',
        borderRadius:"10px",
        padding:"0.7em",
        fontSize: isMobile ? "85px" : ''
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
            <Col
        xxl={13}
        xl={13}
        md={13}
        sm={24}
        style={{ padding:isMobile ? "2em" : "8em", color: "white" }}
    >
        <h1 style={isMobile ? style.heroHeader.mobile : style.heroHeader.base}>
            Switch to the crypto-side of Payments
        </h1>
        <p
            className="mt-2"
            style={isMobile ? style.heroHeaderDescription.mobile : style.heroHeaderDescription.base}
        >
            Give your customers a better and more secured payment option. 
            Get paid in crypto, receive the payments as fiat money. It’s fast and easy.
        </p>
        <div
            style={{
                display: isMobile ? "flex" : "block",
                justifyContent: isMobile ? "center" : "flex-start",
            }}
        >
            <Button
                size="large"
                style={{
                    ...style.primaryBtn,
                    ...style.btnSpacing,
                    ...(isMobile ? style.btnMobile : {}),
                    fontSize: isMobile ? "20px" : '',
                    borderRadius: isMobile ? "20px" : ''
                }}
            >
                        Get Started <ArrowRightOutlined color="white" width={"50"} />
                    </Button>
                </div>
            </Col>
            <Col
                xxl={8}
                xl={8}
                sm={24}
                style={isMobile ? style.heroImg : ''}
            >
                <img src={bannerImg}  width={ isMobile && "70%"} />
            </Col>
        </Row>


          {/* Our Offer Section */}
          
          <div style={{backgroundColor:"#F5FAFE"}}>
            <Row style={{padding: isMobile ? "3em" : "8em"}}>
                <Col xl={11} md={11} sm={24}>
                    <span className="pill" style={{...style.pill, ...(isMobile && style.pillBtn.mobile )}}>Our Offer</span> 
                    <div className="mt-2" style={{ width:"90%"}}>
                        <span className="h1" style={{color:"#4d4d4d", ...(isMobile && style.mobileH1)}}>
                            Experience the future of <span style={{color:"#1c70eb"}}> digital payments</span>
                        </span>
                    </div>
                </Col>
                <Col xl={11} md={11} sm={24} style={isMobile ? {marginTop:"1.5em"} : {}}>
                    <Space direction="vertical">
                        <Space size={45}>
                        <img src={metreIcon} style={isMobile ? { width: '90px' } : {}} />
                            <div style={{width:"80%"}}>
                                <p style={{...style.offerHeading, ...(isMobile && {fontSize:"20px"})}}>Better and faster payment alternative</p>
                                <p className="mt-1 sm" style={isMobile ? {fontSize:"17px"} : {}}> Quickly receive & withdraw funds to your local bank account. No delays, No hassles.</p>
                            </div>
                        </Space>
                        <Space size={45} className="mt-4" style={isMobile ? {marginTop:'3em'} : ''}>
                            <img src={qrIcon} style={{paddingLeft:"10px", ...(isMobile ? { width: '90px' } : {})}}/> 
                            <div style={{width:"80%"}}>
                                <p style={{...style.offerHeading, ...(isMobile && {fontSize:"20px"})}}>Easy and direct process</p>
                                <p className="mt-1 sm" style={isMobile ? {fontSize:"17px"} : {}}>Our QR scan-and-pay model makes payment very easy for your patrons.</p>
                            </div>
                        </Space>

                        <Space size={45} className="mt-4"  style={isMobile ? {marginTop:'4em'} : ''}>
                            <img src={securityIcon} style={{paddingLeft:"10px", ...(isMobile ? { width: '90px' } : {})}}/> 
                            <div>
                                <p style={{...style.offerHeading, ...(isMobile && {fontSize:"20px"})}}>Security & anonymity</p>
                                <p className="mt-1 sm" style={isMobile ? {fontSize:"17px"} : {}}>Enjoy our hi-tech security features that keeps your account and money safe and secure.</p>
                            </div>
                        </Space>
                    </Space>
                </Col>
            </Row>
          </div>
        
         {/* Why Choose Ludopay */}
         <div style={{ ...(isMobile ? {padding:"3em"} : style.whyContainer)}}>
            <span style={{...style.pill, ...(isMobile && style.pillBtn.mobile )}}> Why choose Ludopay? </span>
                <p className = {`${isMobile ? 'h1' : 'h2'} mt-2`} style={isMobile ? style.mobileH1 : style.whyHeading.base}>
                    <span style={{color:"#1c70eb"}}>Exploring new </span> possibilities in payments for Africans
                </p>
                <p className="mt-2" style={isMobile ? {fontSize:'20px', lineHeight:"1.4"} : {width:"60%", textAlign:"center", lineHeight:"2"}}>
                    We believe that using the Ludopay platform will bring great ease to how businesses can receive 
                    payments for their products and services, hence exposing more businesses to possibilities that 
                    lies in how payments can be made in Africa. 
                </p>
                <Button  style={{...style.primaryBtn, ...style.btnSpacing, ...(isMobile ? style.btnMobile : '')}}>Get Started</Button>
            </div>

            {/* Process Section */}
            <div style={{backgroundImage:`url(${processBg})`}}>
                <div style={{margin: isMobile ? '3em' : "8em"}}>
                    <Row>
                        <Col xl={12} md={12} sm={24}>
                            <img src={receivePaymentImg}  style={isMobile ? style.mobileImg : {}} />
                        </Col>
                        <Col  xl={12} md={12} sm={24}>
                            <img src={receiveQR} style={isMobile ? {width:"40px"} : {}} />
                            <div style={{...style.processHeader.base, ...(isMobile ? style.processHeader.mobile : {})}}>
                                Get to receive payments in BTC, USDT, DOGE and a host of other cryptocurrencies.
                            </div>
                            <p style={{...style.processHeader.text, ...(isMobile ? {fontSize:"20px", lineHeight:"1.3em"} : {}) }}className="mt-2"> Enjoy our platform as we support multiple payment 
                                cryptocurrency options all on Ludopay
                            </p>
                            <Button style={{...style.primaryBtn, ...style.btnSpacing, ...(isMobile ? style.btnMobile : '')}}>Get Started</Button>
                        </Col>
                    </Row>

                    <Row className="mt-l">
                <Col
                    xl={11}
                    md={11}
                    sm={24}
                    style={{ order: isMobile ? 2 : 1 }}
                >
                    <div style={{ width: "95%" }}>
                        <img src={withdrawIcon} style={isMobile ? {width:"45px"} : {}} />
                        <div style={{...style.processHeader.base, ...(isMobile ? style.processHeader.mobile : {})}}>
                            Send / withdraw your money to any local bank account of your choice.
                        </div>
                    <p style={{...style.processHeader.text, ...(isMobile ? {fontSize:"20px", lineHeight:"1.3em"} : {}) }} className="mt-2">
                        Easily get to use our platform to receive crypto
                        payments from your vendor and send out payment to any bank of your choice. This is fast 
                        and seamless
                    </p>
                    <Button
                        style={{
                        ...style.primaryBtn,
                        ...style.btnSpacing,
                        ...(isMobile ? style.btnMobile : {})
                        }}
                    >
                        Get Started
                    </Button>
                    </div>
                </Col>
                <Col
                    xl={12}
                    sm={24}
                    md={12}
                    style={{ order: isMobile ? 1 : 2 }}
                >
                    <img src={withdrawImg} style={isMobile ? style.mobileImg : {}} />
                </Col>
                </Row>

                    <Row className="mt-l">
                        <Col xl={12} md={12} sm={24}>
                            <img src={customerSupport}  style={isMobile ? style.mobileImg : {}} />
                        </Col>
                        <Col xl={11} md={11} sm={24}>
                            <img src={supportIcon} style={isMobile ? {width:"45px"} : {}} />
                            <div  style={{...style.processHeader.base, ...(isMobile ? style.processHeader.mobile : {})}}>
                                Get help when you need it with Ludopay’s customer support. 
                            </div>
                            <p style={{...style.processHeader.text, ...(isMobile ? {fontSize:"20px", lineHeight:"1.3em"} : {}) }} className="mt-2"> 
                                Reach out to us via email, hotline or chat. Our customer supports are available round the clock, 24/7   
                            </p>
                            <Button
                                style={{
                                ...style.primaryBtn,
                                ...style.btnSpacing,
                                ...(isMobile ? style.btnMobile : {})
                                }}
                            >
                                Get Started
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
         
            {/* How to get Paid with LudoPay */}
                   <Row  style={{paddingTop: isMobile ? "4em" : "7em", paddingBottom: isMobile ? "4em": "7em"}}>
                        <Col xl={14} md={14} sm={24} className="txt-white" 
                            style={{...style.processCol, backgroundImage:`url(${getPaidLImg})` , padding: isMobile ? "3em" : "8em"}} 
                        >
                            <h3 style={{fontSize:"45px", fontFamily:"BaseNeue-ExpSemiBsd", width: isMobile ? "90%" : "70%", ...(isMobile ? {fontSize:'32px'} : {})}}>
                                How to get paid with Ludopay
                            </h3>
                            <p className="txt-white mt-2"  style={{fontSize:"22px", ...(isMobile ? {fontSize:"20px", width:"100%"} : {width:"70%"})}}>
                                Want to receive payment using Ludopay, well here are the easy step to go about it</p>
                            <div className="mt-5">
                                {processData.map(item => (
                                    <span style={{...style.processPill, ...(isMobile ? {fontSize:"20px"} : '')}}> <span style={style.pillCount}>{item.count}</span> {item.title}  </span>
                                ))
                                
                                }
                            </div>
                        </Col>
                      {!isMobile &&  
                        <Col xl={10} md={10} sm={24} style={{...style.processCol, backgroundImage:`url(${getPaidRImg})`}}>
                            <img src={getPaidImg} width={"100%"} />
                        </Col>
                        }
                    </Row>
           
            <div>
                <Row style={{margin: isMobile ? "0 3em" : "8em",}}>
                    <Col xl={11} sm={24} md={11}>
                        <span className="pill"  style={{...style.pill, ...(isMobile && style.pillBtn.mobile )}}>Our Vision</span> 
                        <p className={`${isMobile ? 'h1' : 'h2'} mt-2`} style={{...style.whyHeading, 
                            ...style.vision, ...(isMobile ?  style.mobileH1 : {})}}>
                            A world of diversity in payments
                        </p>
                        <p className="mt-2" style={{textAlign:"justify", ...(isMobile ? {fontSize:"20px", lineHeight:"1.3em"} : {lineHeight:"30px"})}}>
                            We understand how important revenue is to the smooth running of businesses. We envision a world where businesses
                            are not tethered to any payment system or model, a world where payments can be made through diverse means
                        </p>
                    </Col>
                    <Col xl={11} sm={24} md={11}>
                        <img src={map} style={isMobile ? {width:"100%", marginTop:"2em"} : {}} />
                    </Col>
                </Row>
          </div>

         { !isMobile && <div style={{backgroundColor:"#F5FAFE"}}>
            <div  style={{ display:"grid", placeItems:"center", paddingBottom:"5em"}}>
                <span style={{...style.pill, color:"#1C70EB", backgroundColor:"white", ...(isMobile ? {fontSize:"25px"} : '')}} className="mt-5"> Testimonials </span><br />
                <span style={{...style.processHeader, fontSize: isMobile ? "25px" : "30px", marginTop:"0px"}}>
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
          </div>}

         {!isMobile && <div style={{margin:"8em"}}>
            <Row style={{display:"grid", placeItems:"center"}}>
                <p style={{...style.processHeader,  ...style.faq.base, ...(isMobile ? {fontSize:"55px"} : {})}}> Frequently Asked Questions</p>
                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <img src={faqBtn} style={{marginTop:"1em"}}/>}
                    style={{
                        marginTop:"3em",
                        width: "80%",
                        fontSize: isMobile ? "90px" : ''
                    }}
                    items={getItems(panelStyle)}
                    expandIconPosition="end"
                    // style={}
                />
            </Row>
          </div>}

          <div style={{margin: isMobile ? '3em' : "8em"}}>
            <Row style={{ backgroundColor:"#1C70EB", borderRadius:"10px", }}>
                <Col xl={11} md={11} sm={24} style={{paddingTop:"3.5em", paddingBottom:"3.5em",
                     paddingLeft:"6em", ...(isMobile ? {paddingRight:"2em", paddingLeft:"2em"} : {}) }}>
                    <p className="mt-2 txt-white" style={{...style.signUp.txt, ...(isMobile ? { fontSize:"28px", 
                        lineHeight:"1.3em", 
                        textAlign:"center", 
                        width: isMobile ? "100%" : "72%", 
                        margin:"0px auto"} : {}), }}>
                        Sign up on Ludopay and get a welcome gift
                    </p>
                    <p className="mt-2 txt-white" style={{fontWeight:"600", fontFamily:"R-Regular", ...(isMobile ? {fontSize:"20px", textAlign:"center", lineHeight:"1.4em"} : {})}}>
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
               
               {/* Newsletter */}
               <div style={{margin: isMobile ? "3em" : "8em"}}>
                    <Row style={{display:"grid", placeItems:"center"}}>
                        <span style={{...style.processHeader, fontSize: isMobile ? '25px' : "40px"}}>
                            Want Our Latest Updates ?
                        </span>
                        <p className="mt-1" style={{color:"#0B2253", fontSize: isMobile && "20px"}}>Input your email to get update from us</p>
                            <Space direction="vertical" size="middle" className="mt-2">
                                <Space.Compact style={{ width: '100%' }}>
                                    <Input prefix={<MailFilled color="#183b56" />} style={{width: isMobile ? "100%" : "35em", height: isMobile ? "35px" : "50px"}} placeholder="Your email" />
                                    <Button type="primary" style={{fontSize: isMobile ? '15px' : '', height:isMobile ? "35px" : "50px", width: isMobile ? "5em" : "10em"}}>Submit</Button>
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