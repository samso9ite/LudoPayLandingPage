import {MailFilled} from "@ant-design/icons"
import { Button, Space, Input, Row } from "antd";
import { useMediaQuery } from 'react-responsive';
import { style } from "../../pages/Home/style";

const NewsletterComp = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return(
        <div style={{margin: isMobile ? "1em" : "8em"}}>
            <Row style={{display:"grid", placeItems:"center"}}>
              <span style={{...style.processHeader, fontSize: isMobile ? '20px' : "40px"}}>
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
    )
}

export default NewsletterComp