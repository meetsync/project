import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserButtons from '../components/UserButtons';
import TimePickerValue from '../components/TimePicker';
import TimeCalendar from '../components/TimeCalendar';
import dayjs from 'dayjs';

const ParticipantPage = () => {
  const { id } = useParams();
  const [eventDetails, setEventDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch event details from the backend API
  const fetchEventDetails = async () => {
    try {
      const response = await fetch(`YOUR_BACKEND_API_ENDPOINT/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch event details. Status: ${response.status}`);
      }

      const eventData = await response.json();

      // Parse the string times into dayjs objects
      const parsedEarliestTime = dayjs(eventData.earliestTime, 'h:mm A');
      const parsedLatestTime = dayjs(eventData.latestTime, 'h:mm A');

      // Update the event details with the parsed times
      setEventDetails({
        ...eventData,
        earliestTime: parsedEarliestTime,
        latestTime: parsedLatestTime,
      });
    } catch (error) {
      console.error('Error fetching event details:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!eventDetails) {
    return <div>Failed to load event details.</div>;
  }

  const { eventName, earliestTime, latestTime } = eventDetails;

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>You are invited to enter your availability for {eventName}</h1>
      </div>
      <div style={{ marginTop: '60px', marginLeft: '20px' }}>
        <p>The organizer has choosen these times to meet:</p>
        <p>Earliest Time: {earliestTime.format('h:mm A')}</p>
        <p>Latest Time: {latestTime.format('h:mm A')}</p>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ marginTop: '450px' }}>
          <UserButtons></UserButtons>
        </div>
      </div>
      <TimeCalendar earliestTime={earliestTime} latestTime={latestTime}></TimeCalendar>
    </div>
  );
};

export default ParticipantPage;
