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

    const style = {
        button: {
            height:"3em", 
            paddingLeft:'2em', 
            paddingRight:"2em",
            fontFamily:"R-Medium",
            fontSize:"16px",
            color: "#4D4D4D"
        },
        signupbtn: {
            backgroundColor:"#1C70EB", 
            color:"white", 
            border:"none"
        },
        menu: {
            border: 'none', 
            paddingTop: '0.5em', 
            display: 'flex', 
            alignItems: 'center' 
        }
    }
    return(
        <>
        
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['/']}
                style={style.menu}
            >
               <div style={{ marginRight: 'auto' }}>
                    <img style={{paddingTop:"1em"}} src={logo} alt="logo" />
                </div>
                {NAVS.map((menu) => (
                    <Menu.Item key={menu.key} >
                        <Link to={menu.key}>{menu.label}</Link>
                    </Menu.Item>
                    ))
                }
                <Menu.Item>
                    <Link to="/"><Button style={{...style.button, width:"10em", border:"1px solid #153E90"}}>Login</Button></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/"><Button  style={{...style.button, ...style.signupbtn}}>Sign up For Free</Button></Link>
                </Menu.Item>
            
            </Menu>
          
        </>
    )
}

export default HeaderNav