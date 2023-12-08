// TimeCalendar.js
import React, { Component } from 'react';
import '../style/TimeCalendar.css'; // Adjust the path as needed

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
    const timeSlots = [
      '9:00 AM',
      '9:30 AM',
      '10:00 AM',
      '11:00 AM',
      '12:00 PM',
      '1:00 PM',
      '2:00 PM',
      '3:00 PM',
      '4:00 PM',
      '5:00 PM',
    ];

    return (
      <div className="time-calendar size">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time, index) => (
              <tr key={index}>
                <td>{time}</td>
                {[0, 1, 2, 3, 4,5,6].map((day) => (
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

export default TimeCalendar;

