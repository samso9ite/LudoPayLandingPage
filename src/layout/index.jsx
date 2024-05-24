import { Flex, Layout, Row } from 'antd';
import HeaderNav from '../components/Header';
import bannerBG from "../assets/images/bannerBg.svg"
import FooterComp from '../components/Footer';


const { Header, Footer, Sider, Content } = Layout;



const LandingPageLayout = ({children}) => {
    return(
        <>
            <Flex gap="middle" wrap>
                <Layout >
                <Header style={{backgroundColor:"white", minHeight:"6em"}}>
                    <HeaderNav />
                </Header>
                    <Content >{children}</Content>
                <Footer style={{backgroundColor:"#0b2253"}}>
                    <FooterComp />
                </Footer>
                </Layout>
            </Flex>
        </>
    )
}

export default LandingPageLayout