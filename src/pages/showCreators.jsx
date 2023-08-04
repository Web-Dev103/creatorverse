import { useEffect, useState } from "react"

const ShowCreators = (props) => {

    const [creators, setCreators] = useState([]);
    useEffect(() => {
        setCreators(props.data);
    }, [props])

    return(
        <div>

        </div>
    )
}

export default ShowCreators