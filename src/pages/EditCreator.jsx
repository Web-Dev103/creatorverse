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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreator(prevCreator => ({ ...prevCreator, [name]: value }));
    };

    return (
        <div className='form-container'>
            <form onSubmit={updateCreator}>
                <h3> Edit Creator Info </h3>
                <div className='form_group'>
                    

                </div>
                <div className='form_group'>
                    <label htmlFor="name"> Creator Name: </label>
                    <input type="text" id="name" name="name" value={creator.name} onChange={handleChange} className='input-box'/>
                </div>
                <div className='form_group'>
                    <label htmlFor="description"> Description: </label>
                    <input type="text" id="description" name="description" value={creator.description} onChange={handleChange} className='input-box'/>
                </div>
                <div className='form_group'>
                    <label htmlFor="imageURL"> Image URL: </label>
                    <input type="text" id="imageURL" name="imageURL" value={creator.imageURL} onChange={handleChange} className='input-box'/>
                </div>
                <div className='form_group'>
                    <label htmlFor="insta_link"> Instagram Link: </label>
                    <input type="text" id="insta_link" name="insta_link" value={creator.insta_link} onChange={handleChange} className='input-box'/>
                </div>
                <div className='form_group'>
                    <label htmlFor="fb_link"> Facebook Link: </label>
                    <input type="text" id="fb_link" name="fb_link" value={creator.fb_link} onChange={handleChange} className='input-box'/>
                </div>
                <div className='form_group'>
                    <label htmlFor="yt_link"> Youtube Link: </label>
                    <input type="text" id="yt_link" name="yt_link" value={creator.yt_link} onChange={handleChange} className='input-box'/>
                </div>
                <div className='form_group'>
                    <label htmlFor="twitter_link"> Twitter Link: </label>
                    <input type="text" id="twitter_link" name="twitter_link" value={creator.twitter_link} onChange={handleChange} className='input-box'/>
                </div>
                <div className='submit'>
                    <input type="submit" value="Submit" className='input-box'/>
                    <button className="input-box" onClick={deleteCreator}> Delete </button>
                </div>
                
                
            </form>
        </div>
    )
}

export default EditCreator