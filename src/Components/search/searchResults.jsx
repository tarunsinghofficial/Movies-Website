import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { findMovie } from '../../Services/apicontroller';
import Card from "./Card";
import Preloader from '../preloader'

function Results() {
    const [isloading, setIsLoading] = useState(true)
    const { Search } = useParams()
    const [movies, setMovies] = useState([])
    const [filterValue, setFilterValue] = useState("")
    const [result, setResult] = useState(movies)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    useEffect(() => {
        const findMovies = async () => {
            setIsLoading(true)
            const result = await findMovie(Search)
            if (result.ok) {
                const data = await result.json()
                return data
            }
        }
        findMovies().then(x => {
            setMovies(x.results)
            setCurrentPage(x.page)
            setTotalPages(x.total_pages)
            setIsLoading(false)
            console.log(x)
        })
    }, [Search])

    useEffect(() => {
        setResult(movies)
    }, [movies])

    function filterMovies() {

        if (filterValue.length > 2) {
            var filters = movies.filter(x => {
                let release_year = x.release_date.substring(0, 4);
                console.log("release_year", release_year)
                console.log("filterValue", filterValue)
                return release_year === filterValue
            })
            setResult(filters)
        } else {
            setResult(movies)
        }
    }

    return (<div className="container mt-3">
        <div className="row">
            <div className="col col-12">

                <div className="d-flex align-items-center justify-content-end mb-3">

                    <h5 className="mr-3">Filter <span style={{ marginRight: "0" }}>{`${Search.toUpperCase()}`}</span> by year of release:</h5>
                    <form className="d-flex form-group" onSubmit={(e) => { e.preventDefault(); filterMovies() }} method="post">
                        <input className="form-control" type="number" name="Year" id="year" min="1888"
                            placeholder="Release year" onChange={(e) => setFilterValue(e.target.value)} value={filterValue} pattern="\d*" />
                        <input type="submit" className="btn btn-success ml-2" value="Apply filter" />
                        {(filterValue.length > 0) ? <button className='btn btn-outline-danger ml-2' onClick={_=> {setFilterValue(''); filterMovies()}}><i class="fas fa-broom"></i></button>:'' }
                        
                        </form>

                </div>
            </div>
        </div>
        <div className="row ">

            {isloading ? <Preloader /> :
                result.length !== 0 ?
                    result.map(movie => {
                        return <Card id={movie.id} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} overview={movie.overview}></Card>
                    }) :
                    <div className="d-flex w-100 align-items-center justify-content-center" style={{ height: "78vh" }}><h2>No movie to display</h2></div>

            }

        </div>
    </div >

    )
}


export default Results;