import React from 'react'
import hr from "../assets/curve-hr.svg";

import ProjectCard from './ProjectCard';
import ProjectdataFlutter from '../Data/ProjectData.js';
import ProjectdataDB from '../Data/ProjectDataDBPy.js';
import ProjectdataML from '../Data/ProjectDataML.js';




const Projects = () => {
  return (
    <div id="certs" className="mt-4 text-white">
    <h1 className="text-2xl font-bold">Projects</h1>
    <p className="font-light text-gray-400">Flutter </p>

    {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        {
            ProjectdataFlutter.map(({name, desc, github_link, deployed_link, img, Another_Ui}) => {
                return <ProjectCard key={name} name={name} desc={desc} github_link={github_link} deployed_link={deployed_link} img={img} Another_Ui={Another_Ui}  />
            })
        }
    </div>
    <h1 className="text-2xl font-bold"> ...</h1>
    <p className="font-light text-gray-400">Python & Database</p>

    {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        {
            ProjectdataDB.map(({name, desc, github_link, deployed_link, img, Another_Ui}) => {
                return <ProjectCard key={name} name={name} desc={desc} github_link={github_link} deployed_link={deployed_link} img={img} Another_Ui={Another_Ui}  />
            })
        }
    </div>
    <h1 className="text-2xl font-bold"> ...</h1>
    <p className="font-light text-gray-400">Academic Projects</p>

    {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        {
            ProjectdataML.map(({name, desc, github_link, deployed_link, img, Another_Ui}) => {
                return <ProjectCard key={name} name={name} desc={desc} github_link={github_link} deployed_link={deployed_link} img={img} Another_Ui={Another_Ui}  />
            })
        }
    </div>
    <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
</div>
  )
}

export default Projects
