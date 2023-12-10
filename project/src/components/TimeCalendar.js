import React, { Component } from 'react';
import dayjs from 'dayjs';

class TimeCalendar extends Component {
  constructor() {
    super();
    this.state = {
      selectedSlots: [],
    };
    this.calendarRef = React.createRef(); // Create a ref
  }

  toggleSlot = (time) => {
    this.setState((prevState) => ({
      selectedSlots: prevState.selectedSlots.includes(time)
        ? prevState.selectedSlots.filter((slot) => slot !== time)
        : [...prevState.selectedSlots, time],
    }));
  };

  getSelectedSlots = () => {
    return this.state.selectedSlots.map((slot) => slot.replace(/\s\d+$/, ''));
  };
  
  

  render() {
    const { earliestTime, latestTime } = this.props;

    const timeSlots = generateTimeSlots(earliestTime, latestTime);

    return (
      <div className='grid'>
        <div className="time-calendar-size" ref={this.calendarRef}>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Select Your Time</th>
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time, index) => (
                <tr key={index}>
                  <td>{time}</td>
                  {[0].map((day) => (
                    <td
                      key={day}
                      className={`slot ${
                        this.state.selectedSlots.includes(`${time}-${day}`)
                          ? 'selected'
                          : ''
                      }`}
                      onClick={() => this.toggleSlot(`${time}-${day}`)}
                    ></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function generateTimeSlots(earliestTime, latestTime) {
  var isSameOrBefore = require('dayjs/plugin/isSameOrBefore');
  dayjs.extend(isSameOrBefore);

  const timeSlots = [];
  let currentTime = dayjs(earliestTime);

  while (currentTime.isSameOrBefore(latestTime)) {
    timeSlots.push(currentTime.format('h:mm A'));
    currentTime = currentTime.add(30, 'minute');
  }

  return timeSlots;
}


export default TimeCalendar;
