import React , { useState} from 'react'
import hr from '../assets/curve-hr.svg'
import gif from '../assets/f.gif'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedinIn, faTwitter, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { SiCodeforces } from "react-icons/si";


export const Hero = () => {
    const [loaded, setLoaded] = useState(true);
  return (
    <>
     {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
        <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
            <div className="flex flex-col w-full mt-16">
            <h1 className="text-3xl text-gray-400">Hi, I'm</h1>
            <h1 className="text-6xl font-bold">Ashish Kumar</h1>
            <p className="text-2xl font-bold text-gray-300">SDE & Flutter Developer </p>
            <p className="text-lg font-light text-gray-400">Passionate in Flutter, driven by a passion for innovative solutions and continuous learning.</p>
            </div>

               
                
                <ul className='flex mt-3 gap-5 items-center'>
                   <li>
                        <a href='https://github.com/PiPanther' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://twitter.com/ashimanual' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faTwitter} /></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/ashimanual/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                    
                </ul>
            </div>
            
         

        </div>
    </>
  )
}
