// MovieInfo.js
import axios from "axios"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

function MovieInfo() {

    const [details, setDetails] = useState({})

    const {movieId: movie_id} = useParams()

    useEffect(function(){

        axios({
            url: `https://api.themoviedb.org/3/movie/${movie_id}`,
            params: {
                api_key: "65c0ea7f9a084b3b3aaed3b23d7ccb1c"
            }
        }).then(function(e){
            setDetails(e.data)
        })

    }, [])

    return (
        <section className="poster">
            <div className="description">
                <h3>{details.tagline}</h3>
                <h2>{details.title}</h2>
                <p>{details.overview}</p>
            </div>
            <div className="poster-image">
               {
                details.poster_path
                ?
                <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={`a movie poster for ${details.original_title}`}/>
                : null
               } 
            </div>
        </section>
    )
}

export default MovieInfo