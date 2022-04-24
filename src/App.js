import Navbar from './Components/navs/navbar'
import Home from './Components/home'
import { ShowFavs } from './Components/fav/favorites'
import { MovieProvider } from './Context/movieContext'
import SearchResults from './Components/search/searchResults'
import AboutPage from './Components/contact/about'
import Details from './Components/details/index'
import Footer from './Components/navs/footer'
import NotFound from './Components/404'
import Feedback from './Components/Feedback'
import { HashRouter as Router, Route, Switch, Redirect, } from 'react-router-dom';

function App() {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <div className="container-fluid" style={{ paddingTop: '80px' }}>
          <Switch>
            <Route path="/" exact> <Home /></Route>
            <Route path="/home" exact><Redirect to="/" /></Route>
            <Route path="/About" exact><AboutPage/></Route>
            <Route path="/favorites/" exact><ShowFavs /></Route>
            <Route path="/feedback" exact><Feedback /></Route>
            <Route path="/details/:movie_id" exact> <Details /></Route>
            <Route path="/filter/:Search" exact><SearchResults/></Route>
            <Route path="*"><NotFound /></Route>
          </Switch>
        </div>
        <Footer />

      </Router>
    </MovieProvider>
  );
}



export default App;
