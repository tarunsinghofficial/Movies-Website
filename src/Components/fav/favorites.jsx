import { useState, useEffect } from 'react'
import Slide from '../Slider/slider';
import Carousel from '../Slider/swiper'
import { getDetails, getManyDetails } from '../../Services/apicontroller'

function GetFavorites() {
    var favorites = localStorage.getItem('favorites');
    if (favorites === null || favorites === '') {
        console.log("is", 'vacio')

        let data = []
        localStorage.setItem('favorites', JSON.stringify(data));
        favorites = localStorage.getItem('favorites');
    }
    return favorites
}
function AddFavorite(fav) {
    var data = GetFavorites();
    if (data.length <= 0) {
        data = [{ id: fav }]
        localStorage.setItem('favorites', JSON.stringify(data))
    } else {
        let val = JSON.parse(data)
        val.push({ id: fav })
        localStorage.setItem('favorites', JSON.stringify(val))
    }
}
function RemoveFavorite(fav) {
    var data = GetFavorites();
    let val = JSON.parse(data);
    let nfav = val.filter(item => item.id !== fav)

    localStorage.setItem('favorites', JSON.stringify(nfav))

}


export function AddFavorites({ id }) {
    const [isfavorite, setIsfavorite] = useState(false)
    useEffect(() => { hasKey() }, [])

    function hasKey() {
        var favs = JSON.parse(GetFavorites())
        var exist = favs.filter(e => e.id === id).length > 0
        setIsfavorite(!exist)
    }

    function HandleAdd() {
        AddFavorite(id)
        setIsfavorite(isfavorite => !isfavorite)
    }
    function Handledelete() {
        setIsfavorite(isfavorite => !isfavorite)
        RemoveFavorite(id)
    }

    return (
        <div className='mb-4'> {isfavorite ? <input type="submit" value="Add to favorites" onClick={HandleAdd} className="btn btn-success" /> :
            <input type="submit" value="Delete from favorites" onClick={Handledelete} className="btn btn-danger" />}</div>
    );

}

export function ShowFavs() {
    const [favs, setFavs] = useState([])
    const [isloading, setIsloading] = useState(true)
    const [movieDetails, setMovieDetails] = useState([])

    useEffect(() => {
        setFavs(() => {
            return [...JSON.parse(GetFavorites())];
        })
        setIsloading(false);

    }, [])

    useEffect(() => {
        async function getDatas() {
            const r = await getManyDetails(favs)
            return r
        }
        async function getdetail() {
            const response = await getDetails(favs[0].id)
            if (response.ok) {
                const details = await response.json()
                setMovieDetails([details])
            }
        }
        if (isloading === false) {
            if (favs.length > 0) {
                if ('id' in favs[0]) {
                    getDatas()
                        .then(response => {
                            if (response.length > 1) {
                                response.map(async movie => {
                                    const result = await movie.json()
                                    setMovieDetails((prevVal) => [...prevVal, result])
                                })
                            }
                            else {
                                getdetail()
                            }
                        })
                } else {
                    getdetail()
                }
            }
        }
    }, [favs])

    return (<>
        <h2  className="ml-3"><i class="fas fa-folder-open"></i> My favorites</h2>
        {movieDetails.length > 0 ?
            <Carousel loop={false}>
                {movieDetails.length > 1 ?
                    movieDetails.map((movie, index) => {
                        return (
                            <Slide {...movie} key={index}></Slide>
                        )
                    }) :
                    <Slide {...movieDetails[0]} ></Slide>
                }
            </Carousel> :
            <div className="d-flex justify-content-center h-100 " style={{ fontSize: "1.4rem" }}>
                <div>
                    <p ><i class="far fa-folder-open"></i> You have not favorites, yet.</p>
                    <p><i class="fas fa-search"></i> Search for a movie and click on Add to favorites.</p></div></div>
        }

    </>
    )



}


export default AddFavorites;