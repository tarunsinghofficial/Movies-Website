import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();
    var date = new Date();
    var [currentpage, setCurrentpage] = useState('')
    useEffect(() => {
        setCurrentpage(location.pathname)
    }, [location])
    return (
        <div className="bg-dark pt-3 pb-1  h-100 w-100" id='footer'>
            <div className=" d-flex w-100 justify-content-center mb-3">
                <Link className="nav-link" to="/About"><h5 className={`pr-2 ${currentpage.includes('/About') ? 'active' : 'inactive'} `} >About</h5></Link>
                {/* <Link className="nav-link" to="/Contact"><h5 className={`pl-2 ${currentpage.includes('/Contact') ? 'active' : 'inactive'} `}>Contact Me</h5></Link> */}
                <a className="nav-link" href="#" target="blank" > <h5> MovieZ </h5></a>

            </div>
            <div className="col-12 d-flex w-100 justify-content-center align-item-bottom">
                <p className="text-light ">CopyRight &copy; Sahil Team {date.getFullYear()}</p>
            </div>
        </div>
    )

}

export default Footer;