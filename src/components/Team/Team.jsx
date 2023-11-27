import React from 'react'
import Navbar from '../Navbar/Navbar'
import TeamMember from '../TeamMember/TeamMember'
import data from '../data.json'
import './Team.css'

function Team() {

    const membersList = data.map((member, index) => {
        return <TeamMember key={index} member={member}/>
    }
    )

  return (
    <div>
        <Navbar />
        <h1>Miembros del equipo</h1>
        <div className='memberlist'>
            {membersList}
        </div>
    </div>
  )
}

export default Team