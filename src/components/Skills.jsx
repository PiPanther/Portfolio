import React from 'react'
import SkillCard from './SkillCard'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import javascript from "../assets/skills/javascript.svg"
import dart from "../assets/skills/dart.svg"
import linux from "../assets/skills/linux.svg"
import python from "../assets/skills/python.svg"
import android from "../assets/skills/android.svg"
import flutter from "../assets/skills/flutter.svg"
import react from "../assets/skills/react.svg"
import vscode from "../assets/skills/vscode.svg"
import git from "../assets/skills/git.svg"
import figma from "../assets/skills/figma.svg"
import gitlab from "../assets/skills/gitlab.svg"
import postman from "../assets/skills/postman.png"
import cpp from "../assets/skills/cpp.svg"
import html from "../assets/skills/html.svg"  
import firebase from "../assets/skills/firebase.svg" 


const SkillList = [
  {
    name : "Android",
    img: android,
  },
  {
    name : "Flutter",
    img: flutter,
  },
  {
    name:"Firebase",
    img: firebase,
  },
  
  {
    name : "Postman",
    img: postman,
  },
  {
    name:"Figma",
    img: figma,
  },

  {
    
    name : "Javascript",
    img: javascript,
  },
 
  {
    name : "Html",
    img: html,
  },

   
  {
    name : "linux",
    img: linux,
  },
  

  {
    name:"VSCode",
    img: vscode,
  },

 
  {
    name:"Python",
    img: python,
  },
  {
    name:"C++",
    img: cpp,
  },
  {
    name : "Dart",
    img: dart,
  },
  {
    name:"git",
    img: git,
  },

  {
    name:"gitlab",
    img: gitlab,
  },

 
 
]

export const Skills = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div id="skills" className="mt-4 text-white">
    <h1 className="text-2xl font-bold">Skills</h1>
    <p className="font-light text-gray-400">I am proficient in</p>

    <div className="mt-4">
        <Slider {...settings}>
        {
          SkillList.map((skill) => {
            return <SkillCard key={skill.name} name={skill.name} img={skill.img} />
          })
        }
        </Slider>
    </div>
    <img src={cpp} className="w-full mt-8 md:h-3" alt="cpp" />
</div>
  )
}
