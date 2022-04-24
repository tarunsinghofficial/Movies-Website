import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Preloader from '../preloader.jsx'
import NotFound from '../404'
import Header from './header';
import Videos from './videos'
import Crews from './actors'
import { getDetails, getVideos, getCredits } from '../../Services/apicontroller'


function Details() {
    const { movie_id } = useParams()
    const [isloading, setIsloading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [mediainfo, setMediainfo] = useState({})
    const [video, setVideo] = useState([{}])
    const [crew, setCrew] = useState([{}])

    useEffect(() => {
        async function load() {
            const response = await getDetails(movie_id)
            if (response.ok) {
                const details = await response.json()
                setMediainfo(details)

                getVideos(movie_id).then(
                    results => setVideo(results)
                )
                const credits = await getCredits(movie_id)
                if (credits.ok) {
                    const creditsDetails = await credits.json()
                    setCrew(creditsDetails)
                }
                setIsloading(false)
            }
            else {
                setHasError(true)
            }
        }
        if (isloading) {
            load()
        }
    }, [movie_id,isloading])
    return (<>{
            hasError ? <NotFound/>: 
            isloading ? <Preloader /> : <div>
            <Header {...mediainfo} />
            <Crews cast={crew.cast} />
            <Videos videos={video.results} />
        </div>
    }</>)
}
export default Details;