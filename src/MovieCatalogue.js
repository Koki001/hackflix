// MovieCatalogue.js
// 1. import axios library
import axios from "axios"
// 2. import useState hook and useEffect hook
import {useState, useEffect} from "react"

// in order to recreate the behaviour of an anchor tag with the added benefit/logic of React Router, we can use the Link component
import {Link} from "react-router-dom"

function MovieCatalogue(){
    console.log("Catalogue has rendered")
    // 3. initialize state to keep track of movie data which will be returned from the API 
    const [movies, setMovies] = useState([])

    // 4. initialize a useEffect to run the side effect of fetching data from the movie API (this side effect is running a single time on page load)
    useEffect(function(){
        console.log("side effect is running")
        // 5. make an asynchronous request using axios
        axios ({
            url: "https://api.themoviedb.org/3/discover/movie",
            params: {
                api_key: "65c0ea7f9a084b3b3aaed3b23d7ccb1c",
                include_adult: false
            }
        }).then(function(showMeTheMovies){
            console.log(showMeTheMovies)
            // 6. save the returned data within state
            setMovies(showMeTheMovies.data.results)
        })

    }, [])



    return (
        <section>
            <h2>Here are your viewing options:</h2>

            <ul className="catalogue">
            {/* 7. map through state and return a movie for each movie present in the returned API data */}
                {
                    movies.map(function(e){
    
                        return(
                            // we want to make the posters clickable and navigate to a unique URL to respresent each specific movie
                            <Link to={`/${e.id}`} key={e.id}>
                                <li >
                                    <img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} alt={`A poster for the movie ${e.title}`} />
                                </li>
                            </Link>
                        )
                    })
                }

            </ul>
        </section>

    )
}
export default MovieCatalogue