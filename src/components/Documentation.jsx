import React, { useState } from 'react'
import { mdiContentCopy } from '@mdi/js'
import Icon from '@mdi/react'


const Documentation = () => {

    const [content, Setcontent ] = useState([
        {
            title: "Specify width of the image",
            desc: "200"
        },
        {
            title: "Specify width & height of the image",
            desc: "300 X 200"
        },
        {
            title: "Specify background of the image",
            desc: "300 X 200/ffffff"
        },
        {
            title: "Specify text color of the image",
            desc: "300 X 200/ffffff/00000"
        },
    ])

    return (
        <div className="main docs">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-md-10 text-center">
                        <h2 className='section-heading my-5 animate__animated animate__bounceInRight'>Documentation</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                


                    {
                        content.map((item, i) =>
                            <div className="col-xl-5 col-md-6" key={i}>
                                <div className="single-doc card mb-5 animate__animated animate__fadeIn  animate__delay-1s">
                                    
                                        <div className="card-body">
                                            <h5>{item.title}</h5>
                                            <p>{window.location.origin}/<span>{item.desc}</span></p>
                                        </div>
                                       <Icon className='copy' path={mdiContentCopy}></Icon>
                                        <div class="alert alert-success" role="alert">
                                            Copied Succesfully
                                        </div>
                                </div>
                            </div>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}
export default Documentation