import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FormSearch from '../search/FormSearch'

function Navbar() {

    const [currentpage, setCurrentpage] = useState('')
    const location = useLocation();
    useEffect(() => {
        setCurrentpage(location.pathname)
    }, [location])

    return (
        <nav className="navbar navbar-expand-md navbar-dark nav d-flex align-items-center " >
            <Link className="navbar-brand" to="/"> <h3 className="mb-0"><i class="fas fa-film"></i> Movie Mania </h3></Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" >
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="navbar-collapse collapse justify-content-end mt-2 align-items-center " id="navbarNav">
           
                <div className=" d-flex justify-content-end ml-5  " >
                    <span>
                        <ul className="navbar-nav">

                            <li className={`nav-item d-flex justify-content-end ${currentpage === '/' ? 'active' : 'inactive'} `}>
                                <Link className="nav-link" to="/"> <i class="fas fa-ticket-alt"></i> Home <span className="sr-only" >(current)</span></Link>
                            </li>

                            <li className={`nav-item d-flex justify-content-end ${currentpage.includes('Favorites') ? 'active' : 'inactive'} `}>
                                <Link className="nav-link" to="/Favorites/"><i class="fas fa-folder-open"></i> My Favorites </Link>
                            </li>

                            <li className={`nav-item d-flex justify-content-end ${currentpage.includes('Feedback') ? 'active' : 'inactive'} `}>
                                <Link className="nav-link" to="/Feedback/"><i class="fas fa-folder-close"></i> Feedback </Link>
                            </li>

                        </ul>
                    </span>
                </div>
     <FormSearch />
            </div>
        </nav>

    )
}

export default Navbar;