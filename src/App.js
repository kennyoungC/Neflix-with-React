import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import MyNavbar from "./Components/MyNavbar"
import SubNavbar from "./Components/SubNavbar"
import Galleries from "./Components/Galleries"
import MyFooter from "./Components/MyFooter"

function App() {
  return (
    <>
      <header>
        <MyNavbar />
        <SubNavbar />
      </header>
      <main>
        <Galleries />
      </main>
      <MyFooter />
    </>
  )
}

export default App
