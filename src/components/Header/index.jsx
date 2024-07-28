import { Button, Drawer, Menu } from "antd";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { MenuOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import './Navbar.css';
import { useMediaQuery } from 'react-responsive';

const HeaderNav = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const NAVS = [
        { label: "Product", key: "/" },
        { label: "Features", key: "/features" },
        { label: "How it works", key: "/how" },
        { label: "FAQs", key: "/faqs" },
    ];

    const style = {
        button: {
            paddingLeft: '2em', 
            paddingRight: "2em",
            fontFamily: "R-Medium",
            fontSize: "16px",
            color: "#4D4D4D"
        },
        signupbtn: {
            backgroundColor: "#1C70EB", 
            color: "white", 
            border: "none"
        },
        menu: {
            border: 'none', 
            paddingTop: '0.5em', 
            display: 'flex', 
            alignItems: 'center' 
        }
    };

  
    return (
        <>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['/']}
                style={{...style.menu}}
                >

                <div style={{ marginRight: 'auto' }}>
                    <img style={{ paddingTop: "1em", ...(isMobile ? {width: '100%'} : "") }} src={logo} alt="logo" />
                </div>
                <span style={{...(isMobile ? {display:"none"} : "")}}>
                {NAVS.map((menu) => (
                    <Menu.Item key={menu.key}>
                        <Link to={menu.key}>{menu.label}</Link>
                    </Menu.Item>
                ))}
                <Menu.Item>
                    <Link to="https://ludo-pay-frontend.vercel.app/auth/signin">
                        <Button style={{ ...style.button, width: "10em", border: "1px solid #153E90", height: "3em"}}>
                            Login
                        </Button>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="https://ludo-pay-frontend.vercel.app/auth/signup"> <Button style={{ ...style.button, ...style.signupbtn, height:"3em" }}>Sign up For Free</Button></Link>
                </Menu.Item>
                </span>
            </Menu>
            
            <Button className="mobile-menu-button" style={!isMobile ? {display : "none"} : { marginRight:"20px"}} icon={<MenuOutlined />} onClick={() => setShowDrawer(true)} />
            
            <Drawer
                title="Menu"
                placement="right"
                onClose={() => setShowDrawer(false)}
                visible={showDrawer}
                className="mobile-menu"
                width={500}
            >
                <Menu mode="vertical" defaultSelectedKeys={['/']}>
                    {NAVS.map((menu) => (
                        <Menu.Item key={menu.key}>
                            <Link to={menu.key} onClick={() => setShowDrawer(false)} style={{fontSize:"17px"}}>{menu.label}</Link>
                        </Menu.Item>
                    ))}
                    {/* <Menu.Item>
                        <Link to="/">
                            <span style={{ ...style.span, border: "1px solid #153E90",  padding:"5em", }}>Login</span>
                        </Link>
                    </Menu.Item> */}
                    <Menu.Item style={{}}>
                        <Link to="https://ludo-pay-frontend.vercel.app/auth/signin"><span style={{ ...style.button, ...style.signupbtn, border:"1px solid", padding:"7.5em", borderRadius:"30px", }}>Login</span></Link>
                    </Menu.Item>
                    <Menu.Item style={{marginTop:"10px"}}>
                        <Link to="https://ludo-pay-frontend.vercel.app/auth/signin"><span style={{ ...style.button, ...style.signupbtn, border:"1px", padding:"5em", borderRadius:"10px" }}>Sign up For Free</span></Link>
                    </Menu.Item>
                </Menu>
            </Drawer>
        </>
    ); 
}

export default HeaderNav;
