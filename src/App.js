import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import MyNavbar from "./Components/MyNavbar"
import SubNavbar from "./Components/SubNavbar"
import MovieGallery from "./Components/MovieGallery"

function App() {
  return (
    <header>
      <MyNavbar />
      <SubNavbar />
      <MovieGallery />
    </header>
  )
}

export default App
