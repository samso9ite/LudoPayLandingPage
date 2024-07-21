import bannerBG from "../../assets/images/bannerBg.svg"

export const style = {
    heroHeader: {
        base: {
            fontFamily: "BaseNeue-SemiBold",
            fontSize:"65px",
            width:"95%",
            lineHeight:"70px"
        },
        mobile: {
          fontSize: '3em',
          textAlign: 'center',
          fontFamily: "BaseNeue-SemiBold",
        },
      },
      heroHeaderDescription: {
        base: {
            width:"90%", 
            color:"white", 
            fontSize:"22px", 
            fontWeight:"800"
        },
        mobile: {
            fontSize:"20px",
            textAlign: "center",
            color:"white",
        }
      },
      heroImg: {
        // margin:"0px auto",
        display: "flex",
        justifyContent: "center" 
      
      },
    btnMobile: {
        fontSize:"19pxpx",
        paddingLeft: '2em',
        paddingRight: "2em",
    },
    primaryBtn: {
        backgroundColor:"#1C70EB", 
        color:"white", 
        border:"none"
    },
    pill: {
        padding:"10px 30px", 
        background:"#eaf3fd", 
        color:"#163e90", 
        borderRadius:"20px", 
        fontSize:"19px"
    },
    pillBtn: {
        base: {
            padding:"10px 30px", 
            background:"#eaf3fd", 
            color:"#163e90", 
            borderRadius:"20px", 
            // fontSize:"19px"
        },
        mobile: {
            fontSize: "15px",
            marginBottom:"1em"
        }
    },
    mobileH1: {
        fontSize:"35px",
        lineHeight:"1.4em",
        // marginBottom:"2em"
    },
    mobileImg: {
        width:"90%",
        marginBottom:"2em"
    },
  
    hero: {
        backgroundImage:`url(${bannerBG})`,
        backgroundSize:"cover", 
        backgroundPosition:"center", 
        backgroundRepeat:"no-repeat", 
        paddingTop:"5em", 
        // paddingBottom:"5em"
    },
    offerHeading: {
        fontSize:"23px", 
        fontWeight:"800"
    },
    whyContainer: {
        display:"grid", 
        placeItems:"center"
    },
    whyHeading: {
        base: {
            width:"50%", 
            fontWeight:"800", 
            color:"#163e90", 
            lineHeight:"1.4",
            textAlign:"center"
        },
       
    },
    btnSpacing: {
        height:"2.5em",
        paddingLeft:"3em", 
        paddingRight:"3em", 
        marginTop:"3em",
        fontWeight:"600"
    },
    processHeader: {
        base: {
            fontSize: "40px",
            fontWeight: "400",
            lineHeight: "54px",
            textAlign: "left",
            fontFamily:"R-Regular",
            marginTop:"0.6em",
            color:"#0B2253"
        },
        mobile: {
            fontSize:"25px", 
            width:"80%", 
            lineHeight:"1.3em"
        },
        text: {
            fontFamily: "R-Light",
            fontSize: "22px",
            lineHeight: "32px",
            textAlign: "left",
            color:"#909090"
        }
       
    },
    processText: {
        fontFamily: "R-Light",
        fontSize: "22px",
        lineHeight: "32px",
        textAlign: "left",
        color:"#909090"

    },
    pillCount: {
        backgroundColor:"#1c70eb", 
        color:"white", 
        borderRadius:"100%", 
        padding:"0.4em", 
        marginRight:"0.7em"
    },
    processPill: {
        display: 'inline-block',
        backgroundColor:"#f4fafd",
        color:"#4D4D4D", 
        fontSize:"20px", 
        padding:"0.7em", 
        borderRadius:"50px",
        margin:"8px",
    },
    processCol: {
        backgroundColor:"#0b2253", 
        backgroundRepeat:"no-repeat", 
        padding:"8em",
        backgroundSize:"cover"
    },
    vision: {
        width:"90%", 
        lineHeight:"50px", 
        color:"#1c70eb"
    },
    signUp : {
        txt:{
            lineHeight:"50px", 
            fontSize:"35px",
            fontWeight:"700", 
            fontFamily:"BaseNeue-ExpSemiBsd"
        },
        headerMobile:{
            fontSize:"3px", 
            lineHeight:"1.3em", 
            textAlign:"center", 
            width:"70%", 
            margin:"0px auto"
        }
    },
    faq: {
        base:{
            fontSize:"31px", 
            fontWeight:"800", 
            color:"#153E90"
        },
        
    }
}

