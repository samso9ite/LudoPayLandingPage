import { Button, Card, Col, QRCode, Row, Select } from "antd"
import dogeIcon from "../../assets/images/doge.svg"
import btcIcon from "../../assets/images/bitcoin.svg"
import ethIcon from "../../assets/images/eth.svg"
import usdtIcon from "../../assets/images/usdt.svg"
import Paragraph from "antd/es/typography/Paragraph"
import Countdown from 'react-countdown';
import axios from "axios"
import { formatCurrency } from "../../utils"
import { useMediaQuery } from 'react-responsive';


const PreviewTransaction = (props) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const style = {
        card:{
            backgroundColor:"#153E90", 
            color:"white", 
            borderRadius:"15px"
        },
        hr: {
            borderColor:"rgb(254 245 245 / 30%)", 
            marginTop:"2%"
        },
        value: {
            fontFamily: "R-Medium", 
            color:"white"
        },
        currencyVal: {
            borderLeft: !isMobile ? "1px solid white" : undefined, 
            marginLeft: !isMobile ?  "10px" : undefined, 
            paddingLeft: !isMobile ?  "10px" : undefined,
            color:"white"
        },
        txt_white: {
            color:"white"
        },
    }

    const confirmPayment = () => {
        axios.post(
            "https://api.ludo.ng/api/transactions/confirm-payment",
            {'reference': props?.transactionValues.reference},
            {   headers: {
                    "Access-Key": "SMtqDZZW.dIpeCzCrT7Q2XP7tA4PUe4kAcEFJ9KVC"
                }
            },
        ).then(res => {
               console.log(res);
            }
        ).catch((err) => {
            console.log(err);
        })
    }
    const QR = () => {
        return(
            <Col xl={8} md={8} sm={24} 
                style={style.qr}>
                <QRCode 
                    errorLevel="H"
                    icon={
                        props?.transactionValues.values.coin == "bitcoin" ? 
                        btcIcon : props?.transactionValues.values.coin == "ethereum" ?
                        ethIcon : props?.transactionValues.values.coin == "dodge" ?
                        dogeIcon : usdtIcon
                    }
                    value={props?.transactionValues.address}
                    color="black"
                    bgColor="white"
                    style={{marginLeft:!isMobile ? "3em" : ""}}
                /> 
                <span >
                    <h4 className="mt-4" style={{paddingLeft:"1em"}}>
                        Wallet Address: <span style={{wordBreak: "break-all" }}>{props?.transactionValues.address}</span>
                    </h4>
                    <Row>
                        <p style={{width:"80%", paddingLeft:"1em"}}>{}</p>  
                        <Paragraph copyable={{text: props?.transactionValues.address}}  
                        style={{ color: 'red', backgroundColor:"white", fontSize:"30px" }}/>
                    </Row>
                </span>
            </Col>
        )
    }
    return(
        <>
      <Card style={style.card}>
                {isMobile &&
                <center> <QR /> </center>}
                <Row>
                    <Col xl={13} sm={24} md={13}>
                        <p style={{color:"white"}}>Email Address <span style={style.value}> {props?.transactionValues.values.payer_email}</span>
                        </p>
                        <hr style={style.hr} />
                        <p  className="mt-1" style={{color:"white"}}>Sender's Name</p>
                        <span style={style.value}> 
                            {props?.transactionValues.values.payer_first_name} 
                            {props?.transactionValues.values.payer_last_name}
                        </span>
                        <hr style={style.hr}/>
                        <p className="mt-1" style={{color:"white"}}>Amount to Receive (NGN)</p>
                        <Row>
                            <span style={{...style.value, fontSize:"22px"}}>{formatCurrency(props?.transactionValues.values.amount)}</span > 
                            {/* <p style={style.currencyVal}>NGN</p> */}
                        </Row>
                        <hr style={style.hr}/>
                        <Row className="mt-1">
                            <p style={{color:"white"}} >Payment Chain</p> 
                            <Select defaultValue={props?.transactionValues.values.coin} className="ml-2">
                                <Select.Option> 
                                    <img src={props?.transactionValues.values.coin == "bitcoin" ? 
                                    btcIcon : props?.transactionValues.values.coin == "ethereum" ?
                                    ethIcon : props?.transactionValues.values.coin == "dodge" ?
                                    dogeIcon : usdtIcon
                                    } /> {props?.transactionValues.values.coin}
                                </Select.Option>
                            </Select>
                         </Row>
                        <hr style={style.hr}/>
                        <p className="mt-1" style={{color:"white"}}> Amount to Receive </p>
                        <Row>
                            <span style={{...style.value, fontSize:"22px"}}>
                                {props?.transactionValues.values.crypto_amount}
                            </span > 
                            <p style={style.currencyVal}>{props?.transactionValues.values.coin}</p>
                        </Row>
                    </Col>
                    
                  {!isMobile && <QR />}
                  <p className="mt-4" style={{textAlign:"center", fontSize:"13px", display:"flex", margin:"auto", color:"white"}}>
                  
                    <span className="mt-4">Send only {props?.transactionValues.values.coin} to this address. Ensure the network is Binance Smart Chain (TRC20) </span>
                    </p> 
                </Row>
            </Card>
            <center><span style={{fontSize:"24px"}}>Wallet Expires in: <Countdown date={Date.now() + 5000} onComplete={confirmPayment}/></span></center>
            <p className="mt-4" style={{color:"#4D4D4D",fontSize:"17px", padding:"2%", borderRadius:"10px", backgroundColor:"#F5FAFE"}}>
                After payment is confirmed we will send you a confirmation updates about your transaction
            </p>
            <center><p className="mt-2">Expected arrival & unlock: 15 Network Confirmations</p></center>
            <center><Button type="primary" className="mt-2" style={{backgroundColor:"#143e90"}}>Click After Payment</Button></center>
    </>
    )
}

export default PreviewTransaction