import { Navbar } from "./components/navbar/Navbar"
import {MyRouter} from "./components/router/Router"
import { Footer } from "./components/footer/footer"
import {CookiesProvider} from 'react-cookie'

/*App function*/
function App() {
  return (
    <CookiesProvider>
      <div>
        <Navbar/>
        <MyRouter/>
      </div>
    </CookiesProvider>
  )
}

export default App
