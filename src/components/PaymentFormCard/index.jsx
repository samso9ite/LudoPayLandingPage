import { Button, Card, Form, Input, Select, Space, Tooltip } from "antd"
import FormItem from "antd/es/form/FormItem"
import dogeIcon from "../../assets/images/doge.svg"
import btcIcon from "../../assets/images/bitcoin.svg"
import ethIcon from "../../assets/images/eth.svg"
import usdtIcon from "../../assets/images/usdt.svg"
import tooltip from "../../assets/images/tooltip.svg"
import { useState } from "react"
import { currOptions } from "../../data"
import axios from 'axios'

const PaymentFormCard = () => {
    const[senderName, setSenderName ] = useState('')
    const[senderEmail, setSenderEmail ] = useState('')
    const[inputAmount, setInputAmount ] = useState(0)
    const[paymentChain, setPaymentChain ] = useState('')
    const[coinRate, setCoinRate] = useState('0.002')
    const[usdVal, setUsdVal] = useState(0)

    const style = {
        label: {
            color:"white",
            fontSize:"19px"
        },
        input: {
            marginTop:"0.2em",
            height:"3.4em",
            flex:1
        },
        card: {
            backgroundColor:"#153E90", 
            color:"white", 
            borderRadius:"15px",
            padding:"1em 3em"
        }
    }

    const fetchRate = (coin) => {
        let values = {
            amount: inputAmount,
            coin: coin
        }

        axios.post(
            "https://api.ludo.ng/api/transactions/get-coin-rate",
            values,
            {   headers: {
                    "Access-Key": "SMtqDZZW.dIpeCzCrT7Q2XP7tA4PUe4kAcEFJ9KVC"
                }
            },
        ).then(res => {
                setUsdVal(res.data.data.usd_amount)
                setCoinRate(res.data.data.crypto_amount)
            }
        )
    }
    const paymentChainHandler = (value) => {
        setPaymentChain(value)
        fetchRate(value)
    }
    const initiateTransactionHandler = () => {
        console.log("initiate transaction");
        let vals = {
            payer_email:senderEmail,
            payer_first_name: '',
            payer_last_name: '',
            crypto_amount: coinRate,
            amount: inputAmount,
            coin: paymentChain,
            merchant_id: ''
        }
        axios.post(
            "https://api.ludo.ng/api/transactions/confirm-payment",
            vals,
            {
                headers : {
                    "Access-Key": process.env.REACT_APP_API_ACCESS
                }
            }
        ).then((res) => {
            console.log("res");
        }).catch((err) => {
            console.log(err);
        })
    }
    return(
        <>
              <Card style={style.card}>
                <div >
                    <h3 style={{color:"white", fontSize:"25px", fontWeight:"900"}}>Transfer to Ludopay Account</h3>
                    <p style={{color:"white", fontSize:"20px", fontWeight:"900", fontStyle:"italic"}}> - Samson Restaurant</p>
                    <p style={{color:"white", fontSize:"12px", fontWeight:"900"}}>Input your payment details here, to generate invoice and make payment</p>
                </div>
                <Tooltip title="">
                    <div className="sm mt-2" style={{float:"right", color:"white"}}>
                        <img src={tooltip} /> USD ~ {usdVal}
                    </div>
                </Tooltip>
                <Form className="mt-5">
                    <FormItem>
                        <label htmlFor="email_address" style={style.label}>Sender's Email Address</label>
                        <Input type="email" placeholder="youremail@gmail.com"  value={senderEmail} style={style.input}
                            onChange={(e) => setSenderEmail(e.target.value) }
                        />
                    </FormItem>
                    <FormItem>
                        <label htmlFor="name" style={style.label}>Sender's Name</label>
                        <Input type="text" placeholder="Ajayi Samson" value={senderName} style={style.input}
                            onChange={(e) => setSenderName(e.target.value) }
                        />
                    </FormItem>
                    <Space direction="vertical" >
                        <label htmlFor="name" style={style.label} >Input Amount</label>
                        <Space.Compact style={{width:"28.8em"}}>
                            <Input type="number" defaultValue="200,000" onChange={(e) => (setInputAmount(e.target.value))} value={inputAmount} style={{ ...style.input, width: '400%' }}/>
                            <Select defaultValue="NGN"  options={currOptions} style={style.input}/>
                        </Space.Compact>
                    </Space>
                    <Space direction="vertical" style={{marginTop:"1.4em"}}>
                        <label htmlFor="name" style={style.label} >Select Payment Chain</label>
                        <Space.Compact style={{width:"28.8em"}}>
                            <Input  value={coinRate} style={{...style.input, width:"200%"}} />
                            <Select  style={style.input}  onChange={paymentChainHandler} value={paymentChain}>
                                <Select.Option value=""> -- Select Coin --</Select.Option>
                                <Select.Option value="bitcoin"> <img src={btcIcon} /> Bitcoin</Select.Option>
                                <Select.Option value="ethereum"> <img src={ethIcon} /> Ethereum</Select.Option>
                                <Select.Option value="usdt"> <img src={usdtIcon} /> USDT</Select.Option>
                                <Select.Option value="doge"> <img src={dogeIcon} /> Doge</Select.Option>
                            </Select>
                        </Space.Compact>
                    </Space>
                    <Form.Item className="mt-4">
                        <Button
                            htmlType="submit"
                            className="customInputStyle mt-2 block-btn"
                            style={{backgroundColor:"transparent", color:"white", borderColor:"white", width:"47%", fontSize:"19px"}}
                        >
                            Cancel
                        </Button>   
                        <Button
                            htmlType="submit"
                            className="customInputStyle mt-2 block-btn"
                            style={{color:"white", backgroundColor:"#1C70EB", border:"none", width:"47%", float:"right", fontSize:"19px"}}
                            onClick={initiateTransactionHandler}
                        >
                            Next
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    )
}

export default PaymentFormCard