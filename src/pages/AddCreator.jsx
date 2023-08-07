import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { supabase } from "../client";

const AddCreator = () => {

    // useState to handle the forms
    const [creator, setCreator] = useState({
        name: "",
        description: "",
        imageURL: "",
        insta_link: "",
        fb_link: "",
        yt_link: "",
        twitter_link: "",
    });

    // handleChange
    const handleChange = (e) => {
        const {name, value} = e.target;
        setCreator({...creator, [name]: value})
    };

    // useEffect

    // handleSubmit
    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        await supabase
            .from('creator')
            .insert({
                name: creator.name,
                description: creator.description,
                imageURL: creator.imageURL,
                insta_link: creator.insta_link,
                fb_link: creator.fb_link,
                yt_link: creator.yt_link,
                twitter_link: creator.twitter_link,
            })

        window.location ="/";
    };

    return(
        <div onSubmit={handleSubmit}>
            {/* big card */}

            <form>
                <label htmlFor="name"> Creator Name: </label>
                <input type="text" id="name" name="name" value={creator.name} onChange={handleChange}/>
                <br/>
                <label htmlFor="description"> Description: </label>
                <input type="text" id="description" name="description" value={creator.description} onChange={handleChange}/>
                <br/>
                <label htmlFor="imageURL"> Image URL: </label>
                <input type="text" id="imageURL" name="imageURL" value={creator.imageURL} onChange={handleChange}/>
                <br/>
                <label htmlFor="insta_link"> Instagram Link: </label>
                <input type="text" id="insta_link" name="insta_link" value={creator.insta_link} onChange={handleChange}/>
                <br/>
                <label htmlFor="fb_link"> Facebook Link: </label>
                <input type="text" id="fb_link" name="fb_link" value={creator.fb_link} onChange={handleChange}/>
                <br/>
                <label htmlFor="yt_link"> Youtube Link: </label>
                <input type="text" id="yt_link" name="yt_link" value={creator.yt_link} onChange={handleChange}/>
                <br/>
                <label htmlFor="twitter_link"> Twitter Link: </label>
                <input type="text" id="twitter_link" name="twitter_link" value={creator.twitter_link} onChange={handleChange}/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )

}

export default AddCreator
