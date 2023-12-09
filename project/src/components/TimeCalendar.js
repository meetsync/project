import React, { Component } from 'react';
import dayjs from 'dayjs';

class TimeCalendar extends Component {
  
  constructor() {
    super();
    this.state = {
      selectedSlots: [],
    };
  }

  toggleSlot = (time) => {
    this.setState((prevState) => ({
      selectedSlots: prevState.selectedSlots.includes(time)
        ? prevState.selectedSlots.filter((slot) => slot !== time)
        : [...prevState.selectedSlots, time],
    }));
  };

  render() {
    
    const { earliestTime, latestTime } = this.props;
    console.log(earliestTime, latestTime);

    const timeSlots = generateTimeSlots(earliestTime, latestTime);

    return (
      <div className="time-calendar-size">
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
    );
  }
}

function generateTimeSlots(earliestTime, latestTime) {
  //dayjs.extend(isSameOrBefore);

   const timeSlots = [];
  let currentTime = dayjs(earliestTime);

  while (currentTime.isBefore(latestTime)) {
    timeSlots.push(currentTime.format('h:mm A'));
    currentTime = currentTime.add(30, 'minutes');
  }

  return timeSlots;
}

export default TimeCalendar;
