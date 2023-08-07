import { useEffect, useState } from "react"

// components
import CreatorCard from "../components/CreatorCard";

const ShowCreators = (props) => {

    const [creators, setCreators] = useState([]);
    useEffect(() => {
        setCreators(props.data);
    }, [props])

    return(
        <div>
            {creators && creators.length > 0 ?
                creators.map((creator, index) => 
                    <div key = {creator.id}>
                        <CreatorCard 
                            id={creator.id}
                            name={creator.name} 
                            desc={creator.description}
                            img_url={creator.imageURL}
                            insta_link={creator.insta_link}
                            fb_link={creator.fb_link}
                            yt_link={creator.yt_link}
                            twitter_link={creator.twitter_link}> </CreatorCard>
                    </div>)
                    : <div>
                        "No Creators Are Added Yet"
                    </div>
            }

        </div>
    )
}

export default ShowCreators