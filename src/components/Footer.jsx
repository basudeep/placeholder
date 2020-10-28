import Icon from '@mdi/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { mdiFacebook, mdiTwitter, mdiLinkedin, mdiInstagram, mdiHeart} from '@mdi/js'
const Footer = () =>{
    return(
        <div className="footer mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <ul className='footer-menu mb-5 mt-5'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/docs'>Docs</Link></li>
                        </ul>
                        <ul>
                            <li><a href="#"><Icon path={mdiFacebook}></Icon></a></li>
                            <li><a href="#"><Icon path={mdiTwitter}></Icon></a></li>
                            <li><a href="#"><Icon path={mdiLinkedin}></Icon></a></li>
                            <li><a href="#"><Icon path={mdiInstagram}></Icon></a></li>
                        </ul>
                    </div>
                    <div className="col-xl-12 text-center mt-3 mb-5">
                        <p>Made by <a href="#">Deep Basu</a> with <Icon color={'red'} size={0.7} path={mdiHeart}></Icon></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer