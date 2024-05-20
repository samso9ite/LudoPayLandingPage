import { Flex, Layout } from 'antd';
import HeaderNav from '../components/Header';
import bannerBG from "../assets/images/bannerBg.svg"


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
                <Footer >Footer</Footer>
                </Layout>
            </Flex>
        </>
    )
}

export default LandingPageLayout