import { Button, Drawer, Menu } from "antd";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { MenuOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import './Navbar.css';

const HeaderNav = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    const updateMedia = () => {
        setIsMobile(window.innerWidth <= 576);
    };

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

    useEffect(() => {
        updateMedia();
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
      }, []);
    return (
        <>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['/']}
                style={{...style.menu}}
                >

                <div style={{ marginRight: 'auto' }}>
                    <img style={{ paddingTop: "1em", ...(isMobile ? {width: '150%'} : "") }} src={logo} alt="logo" />
                </div>
                <span style={{...(isMobile ? {display:"none"} : "")}}>
                {NAVS.map((menu) => (
                    <Menu.Item key={menu.key}>
                        <Link to={menu.key}>{menu.label}</Link>
                    </Menu.Item>
                ))}
                <Menu.Item>
                    <Link to="/">
                        <Button style={{ ...style.button, width: "10em", border: "1px solid #153E90", height: "3em"}}>
                            Login
                        </Button>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/"> <Button style={{ ...style.button, ...style.signupbtn, height:"3em" }}>Sign up For Free</Button></Link>
                </Menu.Item>
                </span>
            </Menu>
            
            <Button className="mobile-menu-button" style={!isMobile ? {display : "none"} : ''} icon={<MenuOutlined />} onClick={() => setShowDrawer(true)} />
            
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
                    <Menu.Item>
                        <Link to="/">
                            <Button style={{ ...style.button, width: "15em", border: "1px solid #153E90" }}>Login</Button>
                        </Link>
                    </Menu.Item>
                    <Menu.Item style={{marginTop:"20px"}}>
    
                        <Link to="/"><Button style={{ ...style.button, ...style.signupbtn, width:"15em" }}>Sign up For Free</Button></Link>
                    </Menu.Item>
                </Menu>
            </Drawer>
        </>
    ); 
}

export default HeaderNav;
