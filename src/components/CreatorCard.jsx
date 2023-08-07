import { Container, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./CreatorCard.css"

import yt_logo from "../assets/yt_logo.png"
import insta_logo from "../assets/insta_logo.png"
import fb_logo from "../assets/fb_logo.png"
import x_logo from "../assets/x_logo.png"
import empty_icon from "../assets/emptyIcon.jpg"

const CreatorCard = (props) => {
    return(
        <Container className="creator_card">
            <Row>
                <Col>
                    <div className="logo_cont">
                        {props.img_url != null ? 
                        <img className="icon" src={props.img_url} alt={empty_icon}/>:
                        <img class="icon" src={empty_icon}/> }
                    </div>
                </Col>
                <Col>
                    {props.name != null ?
                    <h3 className="name"> {props.name}</h3> 
                    : <h3></h3>}
                    {props.desc != null ? 
                    <p> {props.desc} </p>:
                    <p></p>}
                    
                    {props.insta_link ?
                    <a href={props.insta_link}> <img className="social_logo" src={insta_logo} /> </a>
                    : <p> </p>}
                    {props.yt_link ?
                    <a href={props.yt_link}> <img className="social_logo" src={yt_logo}/> </a>
                    : <p> </p>}               
                    {props.fb_link ?
                    <a href={props.fb_link}> <img className="social_logo" src={fb_logo}/> </a>
                    : <p> </p>}
                    {props.twitter_link ?
                    <a href={props.twitter_link}> <img className="social_logo" src={x_logo}/> </a>
                    : <p> </p>}
                </Col>
            </Row>
        </Container>
        // <div>

            
           
            
            




        //     <button>
        //         <Link to={'viewCreator/'+props.id}>
        //             View 
        //         </Link>
        //     </button>
        //     <button>
        //         <Link to={'editCreator/'+props.id}>
        //             Edit
        //         </Link>
        //     </button>
        // </div>
    )
}
export default CreatorCard