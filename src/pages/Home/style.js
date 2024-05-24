import bannerBG from "../../assets/images/bannerBg.svg"

export const style = {
    heroHeader: {
        fontFamily: "BaseNeue-SemiBold",
        fontSize:"65px",
        width:"95%",
        lineHeight:"70px"
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
    hero: {
        backgroundImage:`url(${bannerBG})`,
        backgroundSize:"cover", 
        backgroundPosition:"center", 
        backgroundRepeat:"no-repeat", 
        paddingTop:"5em", 
        paddingBottom:"5em"
    },
    offerHeading: {
        fontSize:"23px", 
        fontWeight:"800"
    },
    whyHeading: {
        width:"50%", 
        fontWeight:"800", 
        color:"#163e90", 
        lineHeight:"1.4"
    },
    btnSpacing: {
        height:"3.5em",
        paddingLeft:"3em", 
        paddingRight:"3em", 
        marginTop:"3em",
        fontWeight:"600"
    },
    processHeader: {
        fontSize: "40px",
        fontWeight: "400",
        lineHeight: "54px",
        textAlign: "left",
        fontFamily:"R-Regular",
        marginTop:"0.6em",
        color:"#0B2253"
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
        padding:"8em"
    },
}
