import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { supabase } from "../client";

const ViewCreator = () => {
    const {id} = useParams();
    const [creator, setCreator] = useState([])

    useEffect(()=> {
        fetchCreator();
        console.log(creator)
    }, [id]);

    const fetchCreator = async () => {
        let { data: creator, error } = await supabase
        .from('creator')
        .select('*')
        .eq('id', id)

        setCreator(creator);
    }

    return (
        <div>
            {/* constructing profile page and edit page*/}
            Hello
        </div>
    )

}

export default ViewCreator