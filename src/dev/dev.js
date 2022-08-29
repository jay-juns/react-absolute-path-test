import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from "moment";
import 'react-calendar/dist/Calendar.css';

function Dev() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
       <Calendar
        calendarType='US' 
        onChange={onChange} 
        value={value} 
        formatDay={(locale, date) => moment(date).format("DD")}  
      />
        <div className="today">
          {moment(value).format("YYYY년 MM월 DD일")} 
        </div>
    </div>
  )
}

export default Dev