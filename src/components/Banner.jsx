import { useEffect, useState } from "react";
import instance from "../instance";
import "./Banner.css";

function Banner({ fetchUrl }) {
    const base_url = "http://images.tmdb.org/t/p/original";
    const [movie, setMovieBanner] = useState();
    const fetchData = async () => { //backendil poyi api call cheyyum - fetchData
        const { data } = await instance.get(fetchUrl);
        setMovieBanner(data.results[Math.floor(Math.random() * data.results.length)])
    }
    useEffect(() => {
        fetchData();
    }, []);

    console.log("Movie banner images");
    console.log(movie);
    return (
        <>
            <div style={{ height: "600px", backgroundPosition: "center",backgroundAttachment:"fixed", width: "100%", backgroundImage: `url(${base_url}${movie?.backdrop_path})` }}>
                <div className="banner_content">
                    <h1>{movie?.name}</h1>  {/* ?-if movie exists */}
                    <button className="btn btn-danger ">Play<i class="fa-solid fa-play bg-transparent ms-2"></i></button> {/* Bootstrap used */}
                    <button className="btn border-white ms-3 more">More Info<i class="fa-solid fa-caret-down bg-transparent ms-2"></i></button>
                    <h2>{movie?.overview.slice(0, 200)}...</h2>
                </div>
            </div>
        </>
    )
}
export default Banner;