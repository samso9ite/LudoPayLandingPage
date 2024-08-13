import { Button, Card, Col, QRCode, Row, Select } from "antd"
import dogeIcon from "../../assets/images/doge.svg"
import btcIcon from "../../assets/images/bitcoin.svg"
import ethIcon from "../../assets/images/eth.svg"
import usdtIcon from "../../assets/images/usdt.svg"
import Paragraph from "antd/es/typography/Paragraph"
import Countdown from 'react-countdown';
import axios from "axios"


const PreviewTransaction = (props) => {

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
            fontFamily: "R-Medium"
        },
        currencyVal: {
            borderLeft:"1px solid white", 
            marginLeft:"10px", 
            paddingLeft:"10px"
        },
        txt_white: {
            color:"white"
        }
    }

    const confirmPayment = () => {
        console.log("Payment confirmed");
        
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
    return(
        <>
        <Card style={style.card}>
            <Row>
                <Col span={13}>
                    <p style={style.txt_white}>Email Address</p>
                    <span style={style.value}>{props?.transactionValues.values.payer_email}</span>
                    <hr style={style.hr} />
                    <p style={style.txt_white} className="mt-1">Sender's Name</p>
                    <span style={{...style.value}}>{props?.transactionValues.values.payer_first_name} {props?.transactionValues.values.payer_last_name}</span>
                    <hr style={style.hr}/>
                    <p  style={style.txt_white} className="mt-1">Amount to Receive (NGN)</p>
                    <Row>
                        <span style={{...style.value, fontSize:"22px"}}>{props?.transactionValues.values.amount}</span > 
                        <p style={{...style.currencyVal, ...style.txt_white}}>NGN</p>
                    </Row>
                    <hr style={style.hr}/>
                    <Row className="mt-1">
                        <p style={style.txt_white} >Payment Chain</p> 
                        <Select defaultValue={props?.transactionValues.values.coin} className="ml-2">
                            <Select.Option > <img src={props?.transactionValues.values.coin == "bitcoin" ? 
                                                btcIcon : props?.transactionValues.values.coin == "ethereum" ?
                                                ethIcon : props?.transactionValues.values.coin == "dodge" ?
                                                dogeIcon : usdtIcon
                                } /> {props?.transactionValues.values.coin}</Select.Option>
                        </Select>
                     </Row>
                    <hr style={style.hr}/>
                    <p style={style.txt_white} className="mt-1"> Amount to Receive   </p>
                    <Row>
                        <span style={{...style.value, fontSize:"22px"}}>{props?.transactionValues.values.crypto_amount}</span >
                         <p style={{...style.currencyVal, ...style.txt_white}} >{props?.transactionValues.values.coin}</p>
                    </Row>
                </Col>
                <Col span={8} style={{borderLeft:"1px solid white", marginLeft:"3em"}}>
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
                        style={{marginLeft:"3em"}}
                    />
                    <span >
                        <h4 className="mt-4" style={{paddingLeft:"1em"}}>Wallet Address: 
                            <span style={{wordBreak: "break-all" }}>{props?.transactionValues.address}</span></h4>
                        <Row>
                            <p style={{width:"80%", paddingLeft:"1em"}}>{}</p> 
                             <Paragraph copyable={{text: props?.transactionValues.address}}  style={{ color: 'red', backgroundColor:"white" ,fontSize:"30px" }}/>
                        </Row>
                    </span>
                    
                </Col>
              
                <p className="mt-4" style={{textAlign:"center", fontSize:"13px", display:"flex", margin:"auto"}}>
                    <span className="mt-4" style={style.txt_white}>Send only {props?.transactionValues.values.coin} to this address.
                         Ensure the network is Binance Smart Chain (TRC20) </span>
                </p> 
            </Row>
        </Card>
        <center><span style={{fontSize:"24px"}}>Wallet Expires in: <Countdown date={Date.now() + 100000} onComplete={confirmPayment}/></span></center>
        <p className="mt-4" style={{color:"#4D4D4D",fontSize:"17px", padding:"2%", borderRadius:"10px", backgroundColor:"#F5FAFE"}}>
            After payment is confirmed we will send you a confirmation updates about your transaction
        </p>
        <center><p className="mt-2">Expected arrival & unlock: 15 Network Confirmations</p></center>
        <center><Button type="primary" className="mt-2" style={{backgroundColor:"#143e90"}} onClick={confirmPayment}>Click After Payment</Button></center>
    </>
    )
}

export default PreviewTransaction