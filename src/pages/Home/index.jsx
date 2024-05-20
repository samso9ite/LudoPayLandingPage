import { Button, Col, Row } from "antd"
import LandingPageLayout from "../../layout"
import bannerBG from "../../assets/images/bannerBg.svg"
import bannerImg from "../../assets/images/bannerImg.svg"

const HomePage = () => {
    const style = {
        heroHeader: {
            fontFamily: "BaseNeue-SemiBold",
            fontSize:"48px",
            width:"70%",
            lineHeight:"52px"
        }
    }
    return(
        <>
        <LandingPageLayout>
          <Row style={{backgroundImage:bannerBG, height:"10em"}}>
            <Col span={10}>
                <h1 style={{...style.heroHeader}}>
                    Switch to the crypto-side of Payments
                </h1>
                <p style={{width:"80%"}}>
                Give your customers a better and more secured payment option. 
                Get paid in crypto, receive the payments as fiat money. It’s fast and easy.
                </p>
                <Button>Get Started</Button>
            </Col>
            <Col span={10}>
                <img src={bannerImg} />
            </Col>
          </Row>

          {/* Our Offer Section */}
          <Row>
            <Col span={10}>
                <h2>
                    Experience the future of digital payments
                </h2>
            </Col>
          </Row>
        </LandingPageLayout>
           
        </>
    )
}

export default HomePage