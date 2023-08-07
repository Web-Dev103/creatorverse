import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { supabase } from "../client";


const EditCreator = () => {
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

    useEffect(() => {
        fetchCreator();
        console.log(creator);
    }, [id])

    const fetchCreator = async () => {
        let { data: creator, error } = await supabase
        .from('creator')
        .select('*')
        .eq('id', id)
        .single()
        setCreator(creator)
    }

    const deleteCreator = async () => {
        const { error } = await supabase
        .from('creator')
        .delete()
        .eq('id', id)
      
        window.location = "/"
    }

    const updateCreator = async (event) => {
        event.preventDefault();

        await supabase
        .from('creator')
        .update({
            name: creator.name,
            description: creator.description,
            imageURL: creator.imageURL,
            insta_link: creator.insta_link,
            fb_link: creator.fb_link,
            yt_link: creator.yt_link,
            twitter_link: creator.twitter_link,
        })
        .eq('id', id)

        window.location = "/"
    }

    const handleChange = (event) => {
        const {name: value} = event.target;
        setCreator(prevCreator => ({...prevCreator, [name]: value}))
    }

    return (
        <div onSubmit={updateCreator}>
            {/* big card */}
            <div>
                Editing Creator
            </div>

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

export default EditCreator