import React from 'react'
import EventList from "../components/EventList"
import { AllEventList } from '../components/AllEventList'

export default function Events({AllEventList}) {
  return (
    <div>
        <div className="Event-Page-Header">
            Events
        </div>
        <div className="Event-Menu">
            {AllEventList.map((event, index)=>(
                <EventList 
                    key={index}
                    eventName={event.name}
                    eventDate={event.date}
                    eventLink={event.list}
                />
            ))}
        </div>

    </div>
  )
}
