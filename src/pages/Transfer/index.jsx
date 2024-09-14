import PaymentFormCard from "../../components/PaymentFormCard";
import PreviewTransaction from "../../components/PreviewTransaction";
import SignupComp from "../../components/Signup"
import LandingPageLayout from "../../layout"
import { useMediaQuery } from 'react-responsive';
import { Checkbox, Col, Form, Row } from "antd"
import { useState } from "react";


const Transfer = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const style = {
        paymentSpacing: {
            margin: "0 auto"
        }
    }
    const [paymentState, setPaymentState] = useState("form")
    const [transactionVals, setTransactionVals] = useState()

    const switchPaymentStateHandler = (values, address, reference) => {
        setTransactionVals({values, 'address': address, 'reference': reference})
        setPaymentState("QRState")
    }

    return(
      <LandingPageLayout>
        <div style={{margin: isMobile ? '1em' : "8em"}}>
        <Row style={{marginBottom:"5em"}}>
            <Col xl={paymentState == "form" ? 10 : 15}
             md={paymentState == "form" ? 10 : 15}
             sm={24}
                style={style.paymentSpacing}>
                {   paymentState == "form" ?  
                    <PaymentFormCard switchPaymentState={switchPaymentStateHandler}/> :
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