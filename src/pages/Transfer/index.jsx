import PaymentFormCard from "../../components/PaymentFormCard";
import PreviewTransaction from "../../components/PreviewTransaction";
import SignupComp from "../../components/Signup"
import LandingPageLayout from "../../layout"
import { useMediaQuery } from 'react-responsive';
import { Checkbox, Col, Form, Row } from "antd"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Transfer = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const style = {
        paymentSpacing: {
            margin: "0 auto"
        }
    }
    const [paymentState, setPaymentState] = useState("form")
    const [transactionVals, setTransactionVals] = useState()
    const [merchantInfo, setMerchantInfo] = useState({})
    const { merchant_id } = useParams();
    console.log(merchant_id);

    const switchPaymentStateHandler = (values, address, reference) => {
        setTransactionVals({values, 'address': address, 'reference': reference})
        setPaymentState("QRState")
    }

    const getMerchantDetails = () => {
        axios.post(
            "https://api.ludo.ng/api/merchant/external/profile",
            {merchant_id:merchant_id},
            {   headers: {
                    "Access-Key": "SMtqDZZW.dIpeCzCrT7Q2XP7tA4PUe4kAcEFJ9KVC"
                }
            },
        ).then(res => {
               console.log(res.data);
               setMerchantInfo(res.data.data.merchant)
            }
        )
    }

    useEffect(() => {
        getMerchantDetails()
    }, [])
    return(
      <LandingPageLayout>
        <div style={{margin: isMobile ? '1em' : "8em"}}>
        <Row style={{marginBottom:"5em"}}>
            <Col xl={paymentState == "form" ? 10 : 15}
             md={paymentState == "form" ? 10 : 15}
             sm={24}
                style={style.paymentSpacing}>
                {   paymentState == "form" ?  
                    <PaymentFormCard switchPaymentState={switchPaymentStateHandler} merchantInfo= {merchantInfo}/> :
                    <PreviewTransaction transactionValues={transactionVals} />
                }
            </Col>
        </Row>

            <SignupComp />
        </div>
      </LandingPageLayout>
    )
}

export default Transfer