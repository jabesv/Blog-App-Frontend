import { useState, useEffect } from "react";
import axios from 'axios'

const Giphy = (props) => {
    console.log(props);

    const [giphys, setGiphys] = useState(null)

    useEffect(() => {
        axios.get(
            "https://api.giphy.com/v1/gifs/search?api_key=a4i3zz0H0yKrquHmUZ9yP6IfsY3RVVtq&q=Travel&limit=25&offset=0&rating=g&lang=en"    
        )
        .then((item) => setGiphys(item.data))
    }, [])
    return(
        <div>
            {giphys && (
                <div>
                    
                    <img src={giphys.data[5].images.original.url} alt={giphys.data[5].title} />
                    <h2> {giphys.data[5].title} </h2>
                    {/* {props.user && <span>{props.user.username}</span>} */}
                </div>
            )}
        </div>
    )
}


export default Giphy