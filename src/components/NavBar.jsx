import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import Index from './Index'
import './mystyles.css'

function NavBar() {
    return (
        <div>
            <nav id="navbar">
                <ul>
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
                
                
                
            </nav>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/about' element={<Aboutus />} />
                <Route path='/contact' element={<Contactus />} />
            </Routes>
        </div>
    )
}

export default NavBar
