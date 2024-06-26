
import './App.css'
import Navbar from './Navbar'
import About from './About'
import Project from './Project'
import Resume from './Resume'
import Skill from './Skill'
import Certificate from './Certificate'
import Contact from './Contact'


function App() {

  return (
    <>
    <div className='h-auto'>
      <Navbar/>
   <About/>
   <Project/>
   <Skill/>
   <Resume/>
  <Certificate/>
  <Contact/>
  </div>
    </>
  )
}

export default App
