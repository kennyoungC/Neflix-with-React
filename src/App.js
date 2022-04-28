import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import MyNavbar from "./Components/MyNavbar"
import SubNavbar from "./Components/SubNavbar"
import Galleries from "./Components/Galleries"
import MyFooter from "./Components/MyFooter"
import { Component } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TvShowComponent from "./Components/TvShowComponent"
import NotFound from "./Components/NotFound"
import DetailsPage from "./Components/DetailsPage"

class App extends Component {
  state = {
    gallery1: [],
    gallery2: [],
    gallery3: [],
    searchString: "",
    loading: true,
    error: false,
    selectedMovie: null,
  }
  showSearchResult = async (searchString) => {
    this.setState({ searchString })
  }
  render() {
    return (
      <BrowserRouter>
        <>
          <header>
            <MyNavbar showSearchResult={this.showSearchResult} />
            <SubNavbar />
          </header>
          <Routes>
            <Route path="/" element={<Galleries />} />
            <Route path="/tvshows" element={<TvShowComponent />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/details/:movieId" element={<DetailsPage />} />
          </Routes>
          <MyFooter />
        </>
      </BrowserRouter>
    )
  }
}
export default App
