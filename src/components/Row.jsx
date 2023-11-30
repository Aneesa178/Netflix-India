
import { useEffect, useState } from "react";
import instance from "../instance";
import './Row.css';

function Row({ title, fetchurl }) {
    const [allMovies, setAllMovies] = useState();
    const base_url = "http://images.tmdb.org/t/p/original"
    const fetchData = async () => {
        const response = await instance.get(fetchurl);
        setAllMovies(response.data.results);
    }
    useEffect(() => {
        fetchData();
    }, [])

    console.log(allMovies);


    return (
        <div className="row">
            <h1 style={{ color: "white" }}>{title}</h1>
            <div className="movie-row">
                {
                    allMovies?.map(item => (

                        <img className="movie" src={`${base_url}${item.poster_path}`} alt="no-image" />
                    )
                    )
                }






            </div>
        </div>

    )
}
export default Row;
