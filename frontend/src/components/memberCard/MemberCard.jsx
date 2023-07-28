import React from 'react'
import './memberCard.scss'

const MemberCard = () => {
  return (
    <div className='member_card'>
        <h3>Paul Wilson</h3>
        <img src="./images/advisory_member.png" alt="member" />
        <p>Advisory Board Chair</p>
        <h4>SmartCityCitizen</h4>
    </div>
  )
}

export default MemberCard