import React from 'react'
import { Link } from 'react-router-dom'


export default function Events({eventName, eventDate, eventLink}) {
  return (
    <div>
        <Link to={eventLink}>
        <span>{eventName}</span>
        <span>{eventDate}</span>
        </Link>
    </div>
  )
}
