import Carousel from '../Slider/swiper'
import { ReactComponent as Unknownuser } from '../../Assets/icon/unknowuser.svg'
const baseimg = 'https://image.tmdb.org/t/p/'

function Crews({ cast }) {
    return (<div className="container">
        <h3>Actors <span>({cast.length})</span></h3>
        {cast.length > 0 ?
            <Carousel loop={false}>
                


                    {cast.map((actor, key) => {

                        return (

                            <div className="card " style={{ marginRight: '.5rem' }} key={key}>
                                {actor.profile_path != null ? <img className="card-img-top" src={`${baseimg}w200/${actor.profile_path}`} alt="person" loading={"lazy"} /> :
                                    <Unknownuser className="card-img-top" style={{ paddingBottom: '3.5rem', height: '100%' }} />}

                                <div className="card-body people">
                                    <h6 className="card-title">{actor.name}</h6>
                                    <p className="card-text" style={{ fontSize: ".8rem" }}>{actor.character}</p>
                                    <a href={`https://www.themoviedb.org/person/${actor.id}`} rel="noreferrer" target='_blank' className="btn btn-outline-info"  >
                                        See more.
                                    </a>

                                </div>
                            </div>
                        )
                    })}
            
            </Carousel>
            :
            <div >

                <h4>No Actors to display.</h4></div>
        }



    </div>)

}

export default Crews