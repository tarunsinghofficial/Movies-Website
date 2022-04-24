import React from 'react'
import { Link } from 'react-router-dom'

function Slide({ id, poster_path, title, release_date, original_language, overview="", vote_average }) {

    return (
        <div key={id} className="card slide ">
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={id} className="card-img-top swiper-lazy" style={{minHeight:'100%',display:'flex'}}loading="lazy" />
            <div className="card-img-overlay" >
                <Link to={`/details/${id}`} style={{textDecoration:"none"}}>
                    <div>
                        <span className="card-title slide-title" >{title}({original_language})</span>
                    </div>
                    <div className="slide-info">
                        <span className="card-text slide-info-vote"><i className="fas fa-star" style={{ color: '#ffa41c' }}></i> {vote_average}</span>
                        <span className="card-text slide-info-date">{release_date}</span>
                    </div>
                    <div>
                        <p className="card-text slide-description">{overview.substring(0, 150) + '...'}</p>
                    </div>

                </Link>
            </div>
        </div >

    )
}
export default Slide;