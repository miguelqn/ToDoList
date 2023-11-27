import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import './TeamMember.css'

function TeamMember({member}) {

  return (
    <div className="card-container">
        <img className="card-img" src={member.picture} alt={member.name + " image"} />
        <h2 className="card-title">{member.name}</h2>
        <p className="description">{member.description}</p>
        <div className='contact'>
            <span> 
                <a href={member.github} target='blank'>
                    <FaGithub />
                </a>
                <a href={"mailto:" + member.mail} target='blank'>
                    <IoIosMail />
                </a>
                <a href={"tel:" + member.tel} target='blank'>
                    <BsFillTelephoneFill />
                </a>
            </span>
        </div>
    </div>
  )
}

export default TeamMember