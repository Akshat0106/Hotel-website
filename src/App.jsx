import { BrowserRouter,Route,Routes,Link,Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/aboutus' element={<AboutUs/>}></Route>
            <Route path='/rooms' element={<Rooms/>}></Route>
            <Route path='/dining' element={<Dining/>}></Route>
            <Route path='/banquet' element={<Banquet/>}></Route>
            <Route path='/otherfacilities' element={<OtherFacilities/>}></Route>
            <Route path='/gallery' element={<Gallery/>}></Route>
            <Route path='/getintouch' element={<GetInTouch/>}></Route>
            <Route path='/*' element={<ErrorPage/>}></Route>
          </Route>
      </Routes>
    </BrowserRouter>


    </>
  )
}
function ErrorPage(){
  return (
    <>
    <h2>OOPS!</h2>
    <h1>404</h1>
    <h3>Sorry, an error has occured, Requested page not found!</h3>
    </>
  )
}

function Layout(){
  return (
    <>
    <div className='w-screen h-screen'>
      <Header/>
      <div className='min-h-[60vh]'>
        <Outlet/>
      </div>
      <div className='min-h-[20vh]'>
        <Footer/>
      </div>
    </div>
    </>
  )
}

function Header(){
  return (
    <>
    <Link to='/'>Home</Link>
    <Link to='/aboutus'>About Us</Link>
    <Link to='/rooms'>Rooms</Link>
    <Link to='/dining'>Dining</Link>
    <Link to='/banquet'>Banquet</Link>
    <Link to='/otherfacilities'>Other Facilities</Link>
    <Link to='/gallery'>Gallery</Link>
    <Link to='/getintouch'>Get In Touch</Link>
    </>
  )
}

function Home(){
  return (
    <>
    Hi you are on home
    </>
  )
}

function AboutUs(){
  return (
    <>
    Hi you are on home
    </>
  )
}

function Rooms(){
  return (
    <>
    Hi you are on home
    </>
  )
}

function Dining(){
  return (
    <>
    Hi you are on home
    </>
  )
}

function Banquet(){
  return (
    <>
    Hi you are on home
    </>
  )
}

function OtherFacilities(){
  return (
    <>
    Hi you are on home
    </>
  )
}

function Gallery(){
  return (
    <>
    Hi you are on home
    </>
  )
}

function GetInTouch(){
  return (
    <>
    Hi you are on home
    </>
  )
}

function Footer(){
  return (
    <>
    Footer
    </>
  )
}

export default App
