import React from 'react'
import Typical from 'react-typical'

import './Profile.css'

const Profile = (props) => {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='www.facebook.com'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='www.instagram.com'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='www.youtube.com'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='www.twitter.com'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {""}
                        Hello, I'm <span className='highlighted-text'>Shaikat</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {""}
                        <h1>
                            {""}
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Full Stack Developer",
                                1000,
                                "React Js Developer",
                                1000,
                                "MERN Stack Dev",
                                1000,
                                "Ethusiastic Dev",
                                1000,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Knack of building applications with front and back operations.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href='ehizcv.pdf' download='Ehiedu ehizcv.pdf'>
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile