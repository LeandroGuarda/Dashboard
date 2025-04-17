"use client"

import { useState}  from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs"

dayjs.locale("es")
const localizer = dayjsLocalizer(dayjs)


const MyCalendar = () =>{

    const [events, setEvents] = useState([{
        title:"Evento de Prueba",
        start: new Date(),
        end: new Date(),
        allDay: true
}])


const handleSelectSlot = ({start, end}) => {
    const title = prompt("ingrese nombre del evento")
    if(title){
        const newEvent = {title, start, end, allDay: true}
        setEvents([...events, newEvent])
    }
}
    return(
        <div className="bg-amber-600 w-auto h-auto">
   <Calendar
        localizer={localizer}
        events={events}
        startAccessor={"start"}
        endAccessor={"end"}
        selectable
        longPressThreshold={10}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={(events) => alert(`Evento: ${events.title}`)}
        className="shadow-lg rounded-lg bg-white p-2"
        style={{height:"500px"}}

      />
      
            
        </div>
    )
}

export default MyCalendar