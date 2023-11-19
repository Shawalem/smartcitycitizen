import React from 'react'
import './support.scss'
import { useContext } from 'react'
import ReportContext from '../../contexts/ReportContext'

const Support = () => {
    const support = useContext(ReportContext)
    console.log(support);
  return (
    <section>
        <div className="support_wrapper">
            Support
        </div>
    </section>
  )
}

export default Support