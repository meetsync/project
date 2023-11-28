// CalendarPage.js
import React from 'react';
import Calender3 from './Calender3';
import NextButton from './NextButton';

const CalendarPage = () => {
  // Define a function to be called when "Next" button is clicked
  const handleNextClick = (selectedDates) => {
    console.log('Handling next click in the CalendarPage component:', selectedDates);
    // Add your logic here, e.g., updating state, making API calls, etc.
  };

  // Render your existing "Next" button
  const renderNextButton = (onClick) => (
    <NextButton className="common-button-container" onClick={onClick}>
      Next
    </NextButton>
  );

  return (
    <div>
      <Calender3 onClick={handleNextClick} renderNextButton={renderNextButton} />
    </div>
  );
};

export default CalendarPage;

