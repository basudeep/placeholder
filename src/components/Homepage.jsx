import React from 'react'
import bannerImg from '../images/banner.svg'
import Icon from '@mdi/react'
import { mdiCodeBraces, mdiSetRight, mdiShieldEditOutline } from '@mdi/js'

const Home = () => {
    return (
        <div className="container homepage">
            <div className="row justify-content-center mt-4">
                <div className="col-xl-5 col-sm-8 col-md-8">
                    <div className="hero-area mt-5">
                        <img src={bannerImg} className='img-fluid pb-3 animate__animated animate__jello' alt="" />
                    </div>
                </div>
                <div className="col-xl-10 text-center mt-5 ">
                    <h1 className="animate__animated animate__bounce">Placeholder images for your design</h1>
                    <p className='mt-3'>This website is a free image placeholder service for web designers,You can specify image size, background color & text color, as well as the text.</p>
                </div>
            </div>
            <div className="row mt-5 justify-content-center">
                <div className="col-xl-12 text-center mt-5 mb-4">
                    <h2 className='section-heading'>Browse Topics</h2>
                    <p>Chose an option that you need with your placeholder</p>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="card text-center mt-3 mb-2">
                        <div className="card-body">
                            <Icon size={4} color={'#05C896'} path={mdiCodeBraces} />
                            <h3 className='mt-2 mb-3'>Getting Started</h3>
                            <p>Just specify the image size after our URL of this website</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="card text-center mt-3 mb-2">
                        <div className="card-body">
                            <Icon size={4} color={'#05C896'} path={mdiSetRight} />
                            <h3 className='mt-2 mb-3'>Placeholder Feautres</h3>
                            <p>You can specify image size, background color & text color.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="card text-center mt-3 mb-2">
                        <div className="card-body">
                            <Icon size={4} color={'#05C896'} path={mdiShieldEditOutline} />
                            <h3 className='mt-2 mb-3'>Customization</h3>
                            <p>Get placeholder image as your specific requirements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home