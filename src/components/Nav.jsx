import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiClose, mdiFolderImage } from '@mdi/js'
const Nav = () => {

    const [menu, setMenu] = useState(false)

    let location = useLocation()
    function isActive(path) {
        if (location.pathname == path) {
            return 'active'
        }
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-light sticky-top bg-white">
            <div className="container px-2">
                <h2><Link to='/'>Placeholder <span> <Icon path={mdiFolderImage} color={'05C896'} size={1}></Icon></span></Link></h2>
                <button className="navbar-toggler" onClick={() => setMenu(!menu)} type="button" >
                    {
                        menu ? <Icon size={1.3} path={mdiClose}></Icon> : <span className="navbar-toggler-icon"></span>
                    }
                </button>
                <div className={menu ? "collapsed navbar-collapse" : "collapse navbar-collapse"}  >
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item ${isActive('/')}`}>
                            <Link to='/' onClick={()=> setMenu(!menu)} className='nav-link'>Home</Link>
                        </li>
                        <li className={`nav-item ${isActive('/about')}`}>
                            <Link onClick={()=> setMenu(!menu)} to='/about' className='nav-link'>About</Link>
                        </li>
                        <li className={`nav-item ${isActive('/docs')}`}>
                            <Link to='/docs' onClick={()=> setMenu(!menu)} className='nav-link'>Documentaion</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav