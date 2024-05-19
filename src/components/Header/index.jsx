import { Button, Menu } from "antd"
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.svg"

const HeaderNav = () => {

    const NAVS = [
        {
            label: "Product",
            key: "/",
        },
        {
            label: "Features",
            key: "/features",
        },
        {
            label: "How it works",
            key: "/how",
        },
        {
            label: "FAQs",
            key: "/faqs",
        },
    ]

    return(
        <>
        
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['/']}
                style={{border: "none", paddingTop:"0.5em"}}
               
            >
                <img src={logo} />
                {NAVS.map((menu) => (
                    <Menu.Item key={menu.key} >
                        <Link to={menu.key}>{menu.label}</Link>
                       
                    </Menu.Item>
                    ))
                }
                <Menu.Item>
                    <Button style={{width:"11em"}}>Login</Button>
                </Menu.Item>
                <Menu.Item>
                    <Button >Sign up For Free</Button>
                </Menu.Item>
            </Menu>
        </>
    )
}

export default HeaderNav