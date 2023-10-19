import React from 'react'
import EventList from "../components/EventList"
import { AllEventList } from '../components/AllEventList'
import { Link } from 'react-router-dom'
import '../App.css'


export default function Events() {
  return (
    <div>
        <div className="Event-Page-Header">
            Events
        </div>
        <div className="Event-Menu">
            {/* {AllEventList.map((event, index)=>(
                <EventList 
                    key={index}
                    eventName={event.name}
                    eventDate={event.date}
                    eventLink={event.list}
                />
            ))} */}

            {AllEventList.map((AllEventList) => (
            <div className='event-list'>
                <Link to={AllEventList.link}>
                <h1>{AllEventList.name}</h1>
                <h1>{AllEventList.date}</h1>
                </Link>
            </div> 
            ))}


        </div>
        

    </div>
  )
}
