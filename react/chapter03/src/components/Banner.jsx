import { useEffect, useState } from "react";
import axios from "../api/axios";
import request from "../api/request";
import './Banner.css';

const Banner = () => {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // 현재 상영중인 영화 정보를 가져오기 (여러개)
        const response = await axios.get(request.fetchNowPlaying);
        console.log(response);

        // 여러 영화 중 영화 하나의 ID를 가져오기
        const movieId = await response.data.results[Math.floor(Math.random() * response.data.results.length)].id;
        console.log(movieId);
        // 특정 영화의 더 상세한 정보를 가져오기 (비디오 정보 포함)
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, { params: { append_to_response: "videos" } });
        setMovie(movieDetail);
        console.log(movieDetail);
    };

    const truncate = (str, n) => {
      return str?.length > n? str.substr(0, n) + " ..." : str;
    }
    if (!movie) {
        return <>Loading....</>;
    } else {
        return (

                <div 
                  className="banner" 
                  style=
                    {{
                      backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
                      backgroundPosition: 'top center',
                      backgroundSize: 'cover',
                    }}>
                    <div className="banner__contents">
                        <h1 className="banner__title">{movie.title || movie.name || movie.original_name}</h1>
                        <div className="banner__buttons">{movie.videos?.results[0]?.key ? <button className='banner__button play'>Play</button> : null}</div>
                        <p className="banner__description">{truncate(movie.overview, 100)}</p>
                    </div>
                    <div className="banner--fadeBottom"></div>
                </div>

        );
    }
};


export default Banner;
