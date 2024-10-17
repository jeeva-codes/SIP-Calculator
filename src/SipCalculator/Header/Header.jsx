import React from 'react'
import '../Header/Header.css'
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Calculator from '../Calculator/Calculator'
import Notes from '../SipInfo/Notes'
function Header() {
  return (
   <>
   <BrowserRouter>
   <header>
   <h1 id='title'>SIP Calcutator</h1>
   <nav>
    <ul>
    <li><Link to='/' id='links'>Home</Link></li>
    <li><Link to='/note' id='links'>Notes</Link></li>
    </ul>
   </nav>
   </header>
   <Routes>
   <Route path='/' element={<Calculator />} />
   <Route path='/note' element={<Notes/>} />

   </Routes>
   </BrowserRouter>
   </>
  )
}

export default Header