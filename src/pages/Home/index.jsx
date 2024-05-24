import { Avatar, Badge, Button, Card, Carousel, Col, Collapse, Rate, Row, Space } from "antd"
import LandingPageLayout from "../../layout"
import bannerBG from "../../assets/images/bannerBg.svg"
import bannerImg from "../../assets/images/bannerImg.svg"
import metreIcon from "../../assets/images/metre.svg"
import qrIcon from "../../assets/images/qr.svg"
import receivePaymentImg from "../../assets/images/receivePayment.svg"
import receiveQR from "../../assets/images/receiveQR.svg"
import withdrawImg from "../../assets/images/withdraw.svg"
import getPaidImg from "../../assets/images/getPaid.svg"
import map from "../../assets/images/map.svg"
import withdrawIcon from "../../assets/images/withdrawIcon.svg"
import securityIcon from "../../assets/images/security.svg"
import supportIcon from "../../assets/images/supportIcon.svg"
import faqBtn from "../../assets/images/faqBtn.svg"
import mobileImg from "../../assets/images/mobileImg.svg"
import googleBtn from "../../assets/images/googleBtn.svg"
import appleBtn from "../../assets/images/appleBtn.svg"
import headerGif from "../../assets/images/headerImg.gif"
import customerSupport from "../../assets/images/customerSupport.svg"
import {ArrowRightOutlined, MailFilled} from "@ant-design/icons"
import Search from "antd/es/input/Search"
import Input from "antd/es/input/Input"
import testimonialImg from "../../assets/images/testimonialImg.svg"
import testimonialImg2 from "../../assets/images/testimonialImg2.svg"
import testimonial3 from "../../assets/images/testimonial3.svg"

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

        },
        pillCount: {
            backgroundColor:"#1c70eb", 
            color:"white", 
            borderRadius:"100%", 
            padding:"0.4em", 
            marginRight:"0.7em"
        },
        processPill: {
            display: 'inline-block',
            backgroundColor:"#f4fafd",
            color:"#4D4D4D", 
            fontSize:"20px", 
            padding:"0.7em", 
            borderRadius:"50px",
            margin:"8px",
        }
    }

    let processData = [
        {
            title:"Create an account",
            count: "01"
        }, 
        {
            title:"Click on receive payment",
            count: "02"
        },
        {
            title:"Input amount to be received",
            count: "03"
        },
        {
            title:"Select preferred crypto",
            count: "04"
        },
        {
            title:"Generate payment QR code",
            count: "05"
        },
        {
            title:"Wait to get paid",
            count: "06"
        },
    ]
    const panelStyle = {
        marginBottom: 18,
        backgroundColor:"#f4fafd",
        border: '1px solid #BDBDBD',
        borderRadius:"10px",
        padding:"0.7em"
      };
    const getItems = (panelStyle) => [
        {
          key: '1',
          label: 'What is a Cryptocurrency ?',
          children: <p>A cryptocurrency is a digital currency that uses encryption to secure transactions and function as a virtual accounting system. Cryptocurrencies are peer-to-peer systems that allow anyone to send and receive payments without banks verifying transactions. 
            They run on a public ledger called blockchain, which is a record of all transactions held and updated by currency holders</p>,
          style: panelStyle,
        },
        {
          key: '2',
          label: 'Do I need a crypto wallet to use Ludopay ?',
          children: <p>Crypto wallets come in two types: hot (online storage) and cold (offline storage), and a variety of price points. Crypto.com DeFi Wallet and Zengo
             Wallet are two of the highest-rated hot wallets. Ledger earns top marks among cold wallets</p>,
          style: panelStyle,
        },
        {
          key: '3',
          label: 'Is Ludopay free to use?',
          children: <p>Crypto wallets come in two types: hot (online storage) and cold (offline storage), and a variety of price points. Crypto.com DeFi Wallet and Zengo
          Wallet are two of the highest-rated hot wallets. Ledger earns top marks among cold wallets</p>,
          style: panelStyle,
        },
        {
            key: '4',
            label: 'Is Ludopay free to use?',
            children: <p>Crypto wallets come in two types: hot (online storage) and cold (offline storage), and a variety of price points. Crypto.com DeFi Wallet and Zengo
            Wallet are two of the highest-rated hot wallets. Ledger earns top marks among cold wallets</p>,
            style: panelStyle,
          },
          {
            key: '5',
            label: 'Is Ludopay free to use?',
            children: <p>Crypto wallets come in two types: hot (online storage) and cold (offline storage), and a variety of price points. Crypto.com DeFi Wallet and Zengo
            Wallet are two of the highest-rated hot wallets. Ledger earns top marks among cold wallets</p>,
            style: panelStyle,
          },
      ];
      const items = [
        { id: 1, content: 'I must commend the simplicity of the platform and payment process +. It was so easy to use. Thumbs up, guys! ',
         rating:5, name:" Chukwuma Obi"},
        { id: 2, content: 'Thanks to LudoPay, I have been able to expand payment options for my services. The process was smooth and direct. My customers are happy. I am happy. I recommend LudoPay 100%',
         name:"Femi Awoyeye", rating:4 },
        { id: 3, content: 'I love how I could tell our customers that we accept cryptocurrencies. It warms their heart and makes them see how much we have grown. Thank you, Ludopay.',
         name:"Sidi Herbert", rating:5 },
         { id: 4, content: 'Thanks to LudoPay, I have been able to expand payment options for my services. The process was smooth and direct. My customers are happy. I am happy. I recommend LudoPay 100%',
         name:"Femi Awoyeye" },
         { id: 5, content: '“I must commend the simplicity of the platform and payment process +. It was so easy to use. Thumbs up, guys! “',
         rating:3, name:" Chukwuma Obi"},
         { id: 6, content: 'I love how I could tell our customers that we accept cryptocurrencies. It warms their heart and makes them see how much we have grown. Thank you, Ludopay.',
         name:"Sidi Herbert", rating:5 },
      ];
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
                <div style={{margin:"8em"}}>
                <Row  style={{paddingTop:"7em", paddingBottom:"7em"}}>

                    <Col span={14} className="txt-white">
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
                    <Col span={9}>
                        <img src={getPaidImg} width={"80%"} />
                    </Col>
                </Row>
                </div>
            </div>

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