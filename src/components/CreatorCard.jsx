import { Container, Row, Col, Card, Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./CreatorCard.css"

import yt_logo from "../assets/yt_logo.png"
import insta_logo from "../assets/insta_logo.png"
import fb_logo from "../assets/fb_logo.png"
import x_logo from "../assets/x_logo.png"
import empty_icon from "../assets/emptyIcon.jpg"
import threedot from "../assets/threedot.png"
import { useState } from "react"

const CreatorCard = (props) => {

    const [dropDown, setDropDown] = useState(false);
    const toggleDropdown = () => {
        setDropDown(!dropDown)
    }

    return(
        <Container className="creator_card">
            <img src={threedot} className="threedot" align="right" onClick={toggleDropdown}/>
            {
                dropDown && (
                    <div className="dropdown">
                        <div className="dropdownMenu">
                            <div>
                                <Link to={'viewCreator/'+props.id}>
                                    View Creator
                                </Link>
                            </div>
                            <div>
                                <Link to={'editCreator/'+props.id}>
                                    Edit Creator
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }

            <Row>
                
                <div className="logo_cont">
                    {props.img_url ? 
                    <img className="icon" src={props.img_url} alt={empty_icon}/>:
                    <img className="icon" src={empty_icon}/> }
                </div>
                
                <Col>
                    {props.name ?
                    <h3 className="name"> {props.name}</h3> 
                    : <h3></h3>}
                    {props.desc ? 
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
    )
}
export default CreatorCard