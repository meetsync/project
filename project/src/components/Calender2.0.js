import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import "../style/Calender.css";


export default function DatePicker() {
return (
<LocalizationProvider dateAdapter={AdapterDayjs}>
<StaticDatePicker orientation="portrait" className='calender2' />
</LocalizationProvider>
);
}


