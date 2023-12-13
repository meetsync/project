import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { AllEventList } from '../components/AllEventList';


export const EventDetail = () => {
    const routeParams = useParams();
    const [event, setEvent] = useState(AllEventList[0])
    AllEventList.forEach(element => {  
        if (element.id === routeParams) {
            
            setEvent = element
        }
    });
    console.log(event)
  return (
    <>
    <div>EventDetail</div>
    <div className="participants">
        {event.map(()=>(
            <div>
                <h1>{}</h1>
            </div>
        ))}
    </div>
    </>
  )
}
