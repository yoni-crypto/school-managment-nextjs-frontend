"use client"
import { Calendar, momentLocalizer,View ,Views} from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react'
import { calendarEvents } from '@/lib/data'

const localizer = momentLocalizer(moment)

const BigCalender = () => {

    const [view, setView] = useState<View>(Views.WORK_WEEK)
    const handleOnChaneView=(selectedView:View)=>{
        setView(selectedView);
    }
    return (
            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                views={["work_week", "day"]}
                view={view}
                style={{ height: "98%" }}
                onView={handleOnChaneView}
                min={new Date(2025, 1, 1, 8, 0,0)}
                max={new Date(2025, 1, 1, 17, 0,0)}
            />
    )
}

export default BigCalender