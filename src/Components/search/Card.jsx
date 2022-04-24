import { Link } from 'react-router-dom';
import { ReactComponent as NoImage } from '../../Assets/icon/no-image.svg'
export default function Card({ id, poster_path, title, release_date, overview = "" }) {
    return (<>
        <div className="col  col-md-3 col-lg-3 mb-3 " key={id}>

            <div className="card h-100">
            <Link to={`/details/${id}`} style={{ textDecoration: "none" }} >

                    {poster_path != null ?
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={id} className="card-img-top " style={{ maxHeight: '330px' }} loading="lazy" /> :
                        <NoImage className="card-img-top " style={{ maxHeight: '330px' }} loading="lazy" />}
                    </Link>
                <div className="card-body">
                    <Link to={`/details/${id}`} style={{ textDecoration: "none" }}>
                        <span className="card-title slide-title" >{title}</span>
                    </Link>
                    <div>
                    </div>
                    <div>
                        <p className="card-text slide-description">{overview.substring(0, 150) + '...'}</p>
                    </div>
                </div>
                    <div className="card-footer">
                <Link to={`/details/${id}`} style={{ textDecoration: "none" }} className="btn btn-success">
                    See details
                </Link>
                        
                    </div>
            </div>
        </div>

        {/* <div className="card-img-overlay" >
            <Link to={`/details/${id}`} style={{ textDecoration: "none" }}>
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
        </div> */}
    </>)

}