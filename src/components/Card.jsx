import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Card = ({film, title}) => {
    // const [data, setData] = useState("fahri");
    const favorites = useSelector((state) => state.favorites);

    const button = () => {
        console.log("apa");
    }

    return (
        <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: '18rem'}}>
            <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} className="card-img-top" alt="..." style={{width: '200px'}}/>
            <div className="card-body">
                <h1>creator {title}</h1>
                <h5 className="card-title">{film.title}</h5>
                <p className="card-text">{film.overview}</p>
                <a href="/coba" className="btn btn-primary" onClick={() => button()}>Go somewhere</a>
            </div>
        </div>
    );
}

export default Card;