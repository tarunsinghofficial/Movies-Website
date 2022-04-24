function Videos({ videos = "[]" }) {
    return (<>
        {
            typeof (videos) === typeof ([]) ?

                <div className="container ">
                    <hr />
                    <h3>Videos <span>({videos.length})</span></h3>
                    {videos.length > 0 ?
                        <div id="Carousel-videos" className="carousel slide carouselmovie" data-ride="carousel" data-interval="0">
                            <ol class="carousel-indicators">
                                {videos.map((video, key) => {
                                    return (<li data-target="#Carousel-videos" data-slide-to={key} className={`${key === 0 ? 'active' : 'inactive'}`}></li>)
                                })}
                            </ol>
                            <div className="carousel-inner">
                                {videos.map((video, key) => {
                                    return (<div className={`carousel-item  ${key === 0 ? 'active' : 'inactive'}`} key={key}>
                                        <iframe key={key} className="d-block w-100" width="1020" height="480" title={`video${key}`}  loading="lazy"        
                                            src={`https://www.youtube-nocookie.com/embed/${video.key}`}
                                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                    </div>)
                                })}
                            </div>

                        </div>
                        : <div >

                            <h4>No Videos to display.</h4></div>}
                </div> 
                : <div >

            <h4>No Videos to display.</h4></div>}</>
    )

}
export default Videos;