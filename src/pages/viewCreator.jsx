import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { supabase } from "../client";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import threedot from "../assets/threedot.png"
import empty_icon from "../assets/emptyIcon.jpg"
import insta_logo from '../assets/insta_logo.png'
import yt_logo from "../assets/yt_logo.png"
import x_logo from "../assets/x_logo.png"

const ViewCreator = () => {
    const {id} = useParams();
    const [creator, setCreator] = useState({
        name: "",
        description: "",
        imageURL: "",
        insta_link: "",
        fb_link: "",
        yt_link: "",
        twitter_link: "",
    });

    const [dropDown, setDropDown] = useState(false);
    const toggleDropdown = () => {
        setDropDown(!dropDown)
    }

    useEffect(()=> {
        fetchCreator();
        console.log(creator)
    }, [id]);

    const fetchCreator = async () => {
        let { data: creator, error } = await supabase
        .from('creator')
        .select('*')
        .eq('id', id)
        .single()
        setCreator(creator)
    }

    return (
        <Container className="creator_card">
            <img src={threedot} className="threedot" align="right" onClick={toggleDropdown}/>
            {
                dropDown && (
                    <div className="dropdown">
                        <div className="dropdownMenu">
                            <div>
                                <Link to={'/editCreator/'+creator.id}>
                                    Edit Creator
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }

            <Row>
                
                <div className="logo_cont">
                    {creator.imageURL ? 
                    <img className="icon" src={creator.imageURL} alt={empty_icon}/>:
                    <img className="icon" src={empty_icon}/> }
                </div>
                
                <Col>
                    {creator.name ?
                    <h3 className="name"> {creator.name}</h3> 
                    : <h3></h3>}

                    {creator.description ? 
                    <p> {creator.description} </p>:
                    <p></p>}
                    
                    {creator.insta_link ?
                    <a href={creator.insta_link}> <img className="social_logo" src={insta_logo} /> </a>
                    : <p> </p>}
                    {creator.yt_link ?
                    <a href={creator.yt_link}> <img className="social_logo" src={yt_logo}/> </a>
                    : <p> </p>}               
                    {creator.fb_link ?
                    <a href={creator.fb_link}> <img className="social_logo" src={fb_logo}/> </a>
                    : <p> </p>}
                    {creator.twitter_link ?
                    <a href={creator.twitter_link}> <img className="social_logo" src={x_logo}/> </a>
                    : <p> </p>}
                </Col>
            </Row>
        </Container>
    )

}

export default ViewCreator