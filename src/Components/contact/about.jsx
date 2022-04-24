import { react } from 'react'


export default function AboutPage() {

    return (<><div className="d-flex justify-content-center row pb-5 pt-5" id="About">
        <div className="container filter">
        
        <div className="d-flex justify-content-between w-85"> 
            <h1>Hi, dear lecturer.</h1>
            <span className="mt-2"><i class="fas fa-envelope-open-text"></i></span>
        </div>
            <p> My name is Mario Gonzalez, Im a software developer who has interest in to learn and improve the web.</p>
            <p>This is my first app with React,Im made this app as a personal proyect to proof my abilities with react,
                even if Im not making any post in this api I have learn alot about React basic </p>
            <p>Movie Master app consume data from <a className="btn btn-link" href="https://developers.themoviedb.org/3" target="blank">MovieDb API</a>.</p>
            <ul style={{listStyle:"none",}}>
                <li className="mb-3">ReactJS <a href="https://reactjs.org/" target="blank" className="btn btn-outline-primary" > <i class="fa-brands fab-react"></i> ReactJS  </a></li>
                <li className="mb-3">Firebase <a href="https://firebase.google.com/" target="blank" className="btn btn-outline-warning" > <i class="fa fa-database"></i> Firebase  </a></li>
                <li className="mb-3">HTML5 and CSS3 <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="blank" className="btn btn-outline-danger" > <i class="fab fa-html5"></i> Github Repository </a></li>
            </ul>
            <h5>-Mario gonzazlez</h5>
        </div >

    </div></>)
}