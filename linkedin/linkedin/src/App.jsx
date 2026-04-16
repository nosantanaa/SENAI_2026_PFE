import ProfileHeader from "./components/ProfileHeader"
import Highlights from "./components/Highlights"
import Activities from "./components/Activities"
import About from "./components/About"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Languages from "./components/Languages"
import Sidebar from "./components/Sidebar"
import './App.css'

function App() {
  
  return (
    <>
    <div className="container">

      <div className="main">

        <ProfileHeader />

        <Highlights />

        <Activities />

        <About />

        <Experience />

        <Education />

        <Languages />

      </div>

      <Sidebar />

    </div>
    </>
  )
}

export default App
